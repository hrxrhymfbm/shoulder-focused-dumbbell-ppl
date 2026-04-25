import { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { useStorage } from '../hooks/useStorage';
import { DEFAULT_EXERCISES } from '../data/exercises';
import type { WorkoutLog } from '../types';
import './Dashboard.css';

function epley1RM(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return Math.round(weight * (1 + reps / 30));
}

function getBestSet(sets: { weight: number; reps: number }[]) {
  return sets.reduce(
    (best, s) => (epley1RM(s.weight, s.reps) > epley1RM(best.weight, best.reps) ? s : best),
    sets[0]
  );
}

export default function Dashboard() {
  const [logs] = useStorage<WorkoutLog[]>('logs', []);
  const [selectedExerciseId, setSelectedExerciseId] = useState('');

  const exerciseMap = Object.fromEntries(DEFAULT_EXERCISES.map(e => [e.id, e]));

  // Collect all exercise IDs that have been logged
  const loggedExerciseIds = Array.from(
    new Set(logs.flatMap(l => l.exercises.map(e => e.exerciseId)))
  );

  // Build PR table
  const prs = loggedExerciseIds.map(exId => {
    const allSets = logs.flatMap(l =>
      l.exercises.filter(e => e.exerciseId === exId).flatMap(e => e.sets)
    ).filter(s => s.reps > 0 && s.weight > 0);

    if (!allSets.length) return null;
    const best = getBestSet(allSets);
    return {
      exerciseId: exId,
      name: exerciseMap[exId]?.name ?? exId,
      weight: best.weight,
      reps: best.reps,
      estimated1RM: epley1RM(best.weight, best.reps),
    };
  }).filter(Boolean) as { exerciseId: string; name: string; weight: number; reps: number; estimated1RM: number }[];

  // Build chart data for selected exercise
  const chartData = selectedExerciseId
    ? logs
        .filter(l => l.exercises.some(e => e.exerciseId === selectedExerciseId))
        .sort((a, b) => a.date.localeCompare(b.date))
        .map(log => {
          const we = log.exercises.find(e => e.exerciseId === selectedExerciseId)!;
          const validSets = we.sets.filter(s => s.reps > 0 && s.weight > 0);
          if (!validSets.length) return null;
          const best = getBestSet(validSets);
          const volumeMultiplier = exerciseMap[selectedExerciseId]?.isDumbbell ? 2 : 1;
          const volume = validSets.reduce((sum, s) => sum + s.weight * s.reps, 0) * volumeMultiplier;
          return {
            date: log.date,
            est1RM: epley1RM(best.weight, best.reps),
            volume,
            bestWeight: best.weight,
          };
        })
        .filter(Boolean)
    : [];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      {logs.length === 0 && (
        <p className="empty-state">No workouts logged yet. Head to <strong>Log Workout</strong> to get started.</p>
      )}

      {prs.length > 0 && (
        <section className="section">
          <h2>Personal Records</h2>
          <table className="pr-table">
            <thead>
              <tr>
                <th>Exercise</th>
                <th>Best Set</th>
                <th>Est. 1RM</th>
              </tr>
            </thead>
            <tbody>
              {prs.map(pr => (
                <tr
                  key={pr.exerciseId}
                  className={selectedExerciseId === pr.exerciseId ? 'selected' : ''}
                  onClick={() => setSelectedExerciseId(
                    selectedExerciseId === pr.exerciseId ? '' : pr.exerciseId
                  )}
                >
                  <td>{pr.name}</td>
                  <td>{pr.weight} lbs × {pr.reps}</td>
                  <td>{pr.estimated1RM} lbs</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="hint">Click a row to view progress charts.</p>
        </section>
      )}

      {selectedExerciseId && chartData.length >= 1 && (
        <section className="section">
          <h2>{exerciseMap[selectedExerciseId]?.name} — Progress</h2>

          <div className="chart-block">
            <h3>Estimated 1RM over time</h3>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                <XAxis dataKey="date" tick={{ fill: '#888', fontSize: 12 }} />
                <YAxis tick={{ fill: '#888', fontSize: 12 }} unit=" lbs" />
                <Tooltip
                  contentStyle={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: 6 }}
                  labelStyle={{ color: '#aaa' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line
                  type="monotone"
                  dataKey="est1RM"
                  name="Est. 1RM"
                  stroke="#e84040"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-block">
            <h3>Volume per session (lbs × reps)</h3>
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                <XAxis dataKey="date" tick={{ fill: '#888', fontSize: 12 }} />
                <YAxis tick={{ fill: '#888', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: 6 }}
                  labelStyle={{ color: '#aaa' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend wrapperStyle={{ color: '#aaa', fontSize: 12 }} />
                <Line
                  type="monotone"
                  dataKey="volume"
                  name="Volume"
                  stroke="#4c9fff"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      )}

      {selectedExerciseId && chartData.length === 0 && (
        <p className="hint">Not enough data to chart this exercise yet.</p>
      )}
    </div>
  );
}
