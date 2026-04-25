export type Category = 'chest' | 'back' | 'legs' | 'shoulders' | 'arms' | 'core' | 'custom';

export interface Exercise {
  id: string;
  name: string;
  category: Category;
  isCustom: boolean;
  isDumbbell?: boolean; // bilateral dumbbell exercise — volume counts each hand
}

export interface SetEntry {
  weight: number;
  reps: number;
}

export interface WorkoutExercise {
  exerciseId: string;
  sets: SetEntry[];
}

export interface WorkoutLog {
  id: string;
  date: string; // YYYY-MM-DD
  exercises: WorkoutExercise[];
}
