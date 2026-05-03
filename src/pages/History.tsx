import { useState } from 'react';
import { useStorage } from '../hooks/useStorage';
import { DEFAULT_EXERCISES } from '../data/exercises';
import type { WorkoutLog } from '../types';
import './History.css';

export default function History() {
  const [logs, setLogs] = useStorage<WorkoutLog[]>('logs', []);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const exerciseMap = Object.fromEntries(DEFAULT_EXERCISES.map(e => [e.id, e]));
  const sorted = [...logs].sort((a, b) => b.date.localeCompare(a.date));

  function deleteLog(id: string) {
    setLogs(prev => prev.filter(l => l.id !== id));
    if (expandedId === id) setExpandedId(null);
  }

  if (sorted.length === 0) {
    return (
      <div className="history-page">
        <h1>History</h1>
        <p className="empty-hint">No workouts logged yet.</p>
      </div>
    );
  }

  return (
    <div className="history-page">
      <h1>History</h1>
      <p className="history-count">{sorted.length} session{sorted.length !== 1 ? 's' : ''}</p>

      <div className="session-list">
        {sorted.map(log => {
          const isOpen = expandedId === log.id;
          const exerciseNames = log.exercises.map(e => exerciseMap[e.exerciseId]?.name ?? e.exerciseId);
          return (
            <div key={log.id} className={`session-card${isOpen ? ' open' : ''}`}>
              <button className="session-header" onClick={() => setExpandedId(isOpen ? null : log.id)}>
                <div className="session-header-left">
                  <span className="session-date">{log.date}</span>
                  <span className="session-preview">{exerciseNames.join(', ')}</span>
                </div>
                <span className="session-chevron">{isOpen ? '▲' : '▼'}</span>
              </button>

              {isOpen && (
                <div className="session-body">
                  {log.exercises.map(we => {
                    const ex = exerciseMap[we.exerciseId];
                    return (
                      <div key={we.exerciseId} className="history-exercise">
                        <p className="history-exercise-name">{ex?.name ?? we.exerciseId}</p>
                        <table className="history-sets-table">
                          <thead>
                            <tr>
                              <th>Set</th>
                              <th>Weight ({ex?.isDumbbell ? 'lbs each' : 'lbs'})</th>
                              <th>Reps</th>
                            </tr>
                          </thead>
                          <tbody>
                            {we.sets.map((s, i) => (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{s.weight}</td>
                                <td>{s.reps}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  })}

                  <button
                    className="btn-ghost small btn-delete-session"
                    onClick={() => deleteLog(log.id)}
                  >
                    Delete session
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
