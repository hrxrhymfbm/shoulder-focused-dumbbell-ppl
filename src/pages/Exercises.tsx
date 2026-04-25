import { useStorage } from '../hooks/useStorage';
import { DEFAULT_EXERCISES, CATEGORY_LABELS } from '../data/exercises';
import type { Category, Exercise } from '../types';
import './Exercises.css';

const CATEGORIES: Category[] = ['chest', 'back', 'legs', 'shoulders', 'arms', 'core'];

export default function Exercises() {
  const [exercises] = useStorage<Exercise[]>('exercises', DEFAULT_EXERCISES);

  const grouped = CATEGORIES.reduce<Record<string, Exercise[]>>((acc, cat) => {
    acc[cat] = exercises.filter(e => e.category === cat);
    return acc;
  }, {} as Record<string, Exercise[]>);

  return (
    <div className="exercises-page">
      <h1>Exercises</h1>

      <div className="exercise-list">
        {CATEGORIES.map(cat => {
          const group = grouped[cat];
          if (!group.length) return null;
          return (
            <div key={cat} className="exercise-group">
              <h3>{CATEGORY_LABELS[cat]}</h3>
              <ul>
                {group.map(ex => (
                  <li key={ex.id}>
                    <span className="ex-name">{ex.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
