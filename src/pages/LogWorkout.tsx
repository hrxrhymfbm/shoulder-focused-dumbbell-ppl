import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useStorage } from '../hooks/useStorage';
import { DEFAULT_EXERCISES } from '../data/exercises';
import { ROUTINES } from '../data/routine';
import type { Routine, RoutineDay } from '../data/routine';
import type { SetEntry, WorkoutExercise, WorkoutLog } from '../types';
import './LogWorkout.css';

function parseRepRange(repRange: string): { min: number; max: number } | null {
  const match = repRange.match(/(\d+)\s*[–\-]\s*(\d+)/);
  if (!match) return null;
  return { min: parseInt(match[1]), max: parseInt(match[2]) };
}

function findPreviousSession(logs: WorkoutLog[], day: RoutineDay): WorkoutLog | null {
  const dayIds = day.exercises.map(e => e.exerciseId);
  for (const log of [...logs].reverse()) {
    const logIds = new Set(log.exercises.map(e => e.exerciseId));
    if (dayIds.every(id => logIds.has(id))) return log;
  }
  return null;
}

export default function LogWorkout() {
  const [logs, setLogs] = useStorage<WorkoutLog[]>('logs', []);

  const today = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(today);
  const [selectedRoutine, setSelectedRoutine] = useState<Routine | null>(null);
  const [selectedDay, setSelectedDay] = useState<RoutineDay | null>(null);
  const [workoutExercises, setWorkoutExercises] = useState<WorkoutExercise[]>([]);
  const [weightIncreased, setWeightIncreased] = useState<Record<string, boolean>>({});
  const [previousSession, setPreviousSession] = useState<WorkoutLog | null>(null);
  const [pendingWeightApply, setPendingWeightApply] = useState<{ exerciseId: string; weight: number } | null>(null);
  const [saved, setSaved] = useState(false);

  const exerciseMap = Object.fromEntries(DEFAULT_EXERCISES.map(e => [e.id, e]));

  function selectRoutine(routine: Routine) {
    setSelectedRoutine(routine);
    setSelectedDay(null);
    setWorkoutExercises([]);
    setWeightIncreased({});
    setPreviousSession(null);
    setSaved(false);
  }

  function selectDay(day: RoutineDay) {
    const prev = findPreviousSession(logs, day);
    setPreviousSession(prev);

    const increased: Record<string, boolean> = {};

    const exercises = day.exercises.map(re => {
      const prevEx = prev?.exercises.find(e => e.exerciseId === re.exerciseId);
      const range = parseRepRange(re.repRange);

      if (!prevEx || prevEx.sets.length === 0 || !range) {
        return {
          exerciseId: re.exerciseId,
          sets: Array.from({ length: re.sets }, () => ({ weight: 0, reps: 0 })),
        };
      }

      const allAtMax = prevEx.sets.every(s => s.reps >= range.max);
      increased[re.exerciseId] = allAtMax;

      let sets: SetEntry[];
      if (allAtMax) {
        // All sets hit max reps — bump weight by 5 lbs, reset to bottom of rep range
        sets = prevEx.sets.map(s => ({ weight: s.weight + 5, reps: range.min }));
      } else {
        // Increment the first set that's below max reps by 1
        let incremented = false;
        sets = prevEx.sets.map(s => {
          if (!incremented && s.reps < range.max) {
            incremented = true;
            return { weight: s.weight, reps: s.reps + 1 };
          }
          return { weight: s.weight, reps: s.reps };
        });
      }

      // Match target set count from routine
      while (sets.length < re.sets) sets.push({ ...sets[sets.length - 1] });
      sets = sets.slice(0, re.sets);

      return { exerciseId: re.exerciseId, sets };
    });

    setSelectedDay(day);
    setWorkoutExercises(exercises);
    setWeightIncreased(increased);
    setSaved(false);
  }

  function addSet(exerciseId: string) {
    setWorkoutExercises(prev =>
      prev.map(e => {
        if (e.exerciseId !== exerciseId) return e;
        const last = e.sets[e.sets.length - 1];
        return { ...e, sets: [...e.sets, { weight: last.weight, reps: last.reps }] };
      })
    );
  }

  function removeSet(exerciseId: string, setIndex: number) {
    setWorkoutExercises(prev =>
      prev.map(e =>
        e.exerciseId === exerciseId
          ? { ...e, sets: e.sets.filter((_, i) => i !== setIndex) }
          : e
      )
    );
  }

  function updateSet(exerciseId: string, setIndex: number, field: keyof SetEntry, value: number) {
    setWorkoutExercises(prev =>
      prev.map(e =>
        e.exerciseId === exerciseId
          ? { ...e, sets: e.sets.map((s, i) => i === setIndex ? { ...s, [field]: value } : s) }
          : e
      )
    );
    if (field === 'weight' && setIndex === 0) {
      setPendingWeightApply({ exerciseId, weight: value });
    }
  }

  function applyWeightToAll(exerciseId: string, weight: number) {
    setWorkoutExercises(prev =>
      prev.map(e =>
        e.exerciseId === exerciseId
          ? { ...e, sets: e.sets.map(s => ({ ...s, weight })) }
          : e
      )
    );
    setPendingWeightApply(null);
  }

  function saveWorkout() {
    if (workoutExercises.length === 0) return;
    const log: WorkoutLog = {
      id: uuidv4(),
      date,
      exercises: workoutExercises.map(e => ({
        ...e,
        sets: e.sets.filter(s => s.reps > 0),
      })).filter(e => e.sets.length > 0),
    };
    setLogs(prev => [...prev, log]);
    setSelectedDay(null);
    setWorkoutExercises([]);
    setWeightIncreased({});
    setPreviousSession(null);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  const repRangeMap = selectedDay
    ? Object.fromEntries(selectedDay.exercises.map(re => [re.exerciseId, re.repRange]))
    : {};

  return (
    <div className="log-page">
      <h1>Log Workout</h1>

      <div className="log-date">
        <label>Date</label>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </div>

      <div className="selection-section">
        <p className="selection-label">Routine</p>
        <div className="btn-group">
          {ROUTINES.map(routine => (
            <button
              key={routine.id}
              className={`btn-select${selectedRoutine?.id === routine.id ? ' active' : ''}`}
              onClick={() => selectRoutine(routine)}
            >
              {routine.name}
            </button>
          ))}
        </div>
      </div>

      {selectedRoutine && (
        <div className="selection-section">
          <p className="selection-label">Day</p>
          <div className="btn-group">
            {selectedRoutine.days.map(day => (
              <button
                key={day.name}
                className={`btn-select${selectedDay?.name === day.name ? ' active' : ''}`}
                onClick={() => selectDay(day)}
              >
                {day.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {!selectedRoutine && (
        <p className="empty-hint">Select a routine above to get started.</p>
      )}

      {selectedRoutine && !selectedDay && (
        <p className="empty-hint">Now select a day.</p>
      )}

      {workoutExercises.map(we => {
        const ex = exerciseMap[we.exerciseId];
        const repRange = repRangeMap[we.exerciseId];
        const didIncrease = weightIncreased[we.exerciseId];
        const prevEx = previousSession?.exercises.find(e => e.exerciseId === we.exerciseId);

        return (
          <div key={we.exerciseId} className="exercise-card">
            <div className="exercise-card-header">
              <span className="exercise-name">{ex?.name ?? we.exerciseId}</span>
              <div className="exercise-card-meta">
                {didIncrease && (
                  <span className="weight-increased" title="Weight increased 5 lbs from last session">
                    ↑ +5 lbs
                  </span>
                )}
                {repRange && <span className="rep-range">{repRange} reps</span>}
              </div>
            </div>

            {pendingWeightApply?.exerciseId === we.exerciseId && we.sets.length > 1 && (
              <div className="apply-weight-prompt">
                <span>Apply {pendingWeightApply.weight} lbs to all sets?</span>
                <button className="btn-ghost small" onClick={() => applyWeightToAll(we.exerciseId, pendingWeightApply.weight)}>Yes</button>
                <button className="btn-ghost small" onClick={() => setPendingWeightApply(null)}>No</button>
              </div>
            )}

            <table className="sets-table">
              <thead>
                <tr>
                  <th>Set</th>
                  <th>Weight ({ex?.isDumbbell ? 'lbs each' : 'lbs'})</th>
                  <th>Reps</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {we.sets.map((s, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      <input
                        type="number"
                        min={0}
                        value={s.weight || ''}
                        placeholder="0"
                        onChange={e => updateSet(we.exerciseId, i, 'weight', parseFloat(e.target.value) || 0)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        min={0}
                        value={s.reps || ''}
                        placeholder="0"
                        onChange={e => updateSet(we.exerciseId, i, 'reps', parseInt(e.target.value) || 0)}
                      />
                    </td>
                    <td>
                      {we.sets.length > 1 && (
                        <button className="btn-ghost small" onClick={() => removeSet(we.exerciseId, i)}>✕</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button className="btn-ghost" onClick={() => addSet(we.exerciseId)}>+ Add Set</button>

            {prevEx && prevEx.sets.length > 0 && (
              <div className="prev-session">
                <span className="prev-session-label">Last session ({previousSession!.date})</span>
                <div className="prev-session-sets">
                  {prevEx.sets.map((s, i) => (
                    <span key={i} className="prev-set-chip">{s.weight} lbs × {s.reps}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}

      {workoutExercises.length > 0 && (
        <div className="save-row">
          <button className="btn-primary" onClick={saveWorkout}>Save Workout</button>
          {saved && <span className="saved-msg">Workout saved!</span>}
        </div>
      )}

      {logs.length > 0 && (
        <div className="recent-logs">
          <h2>Recent Workouts</h2>
          {[...logs].reverse().slice(0, 5).map(log => (
            <div key={log.id} className="log-summary">
              <span className="log-date-label">{log.date}</span>
              <span className="log-exercises">
                {log.exercises.map(e => exerciseMap[e.exerciseId]?.name ?? e.exerciseId).join(', ')}
              </span>
              <button
                className="btn-ghost small btn-delete-log"
                onClick={() => setLogs(prev => prev.filter(l => l.id !== log.id))}
                title="Delete workout"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
