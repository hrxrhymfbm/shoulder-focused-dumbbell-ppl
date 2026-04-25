import type { Exercise } from '../types';

// Shoulder-Focused Dumbbell PPL Plan
export const DEFAULT_EXERCISES: Exercise[] = [
  // Push
  { id: 'incline-db-press', name: 'Incline Dumbbell Press', category: 'chest', isCustom: false, isDumbbell: true },
  { id: 'flat-db-bench-press', name: 'Flat Dumbbell Bench Press', category: 'chest', isCustom: false, isDumbbell: true },
  { id: 'incline-db-fly', name: 'Incline Dumbbell Fly', category: 'chest', isCustom: false, isDumbbell: true },
  { id: 'seated-db-shoulder-press', name: 'Seated Dumbbell Shoulder Press', category: 'shoulders', isCustom: false, isDumbbell: true },
  { id: 'lateral-raise', name: 'Dumbbell Lateral Raises', category: 'shoulders', isCustom: false, isDumbbell: true },
  { id: 'overhead-db-tricep-ext', name: 'Overhead Dumbbell Tricep Extension', category: 'arms', isCustom: false, isDumbbell: false },

  // Pull
  { id: 'chest-supported-db-row', name: 'Chest-Supported Dumbbell Row', category: 'back', isCustom: false, isDumbbell: true },
  { id: 'one-arm-db-row', name: 'One-Arm Dumbbell Row', category: 'back', isCustom: false, isDumbbell: true },
  { id: 'incline-rear-delt-fly', name: 'Incline Rear Delt Fly', category: 'shoulders', isCustom: false, isDumbbell: true },
  { id: 'db-shrugs', name: 'Dumbbell Shrugs', category: 'back', isCustom: false, isDumbbell: true },
  { id: 'incline-db-curl', name: 'Incline Dumbbell Curl', category: 'arms', isCustom: false, isDumbbell: true },
  { id: 'hammer-curl', name: 'Hammer Curls', category: 'arms', isCustom: false, isDumbbell: true },

  // Legs
  { id: 'bulgarian-split-squat', name: 'Bulgarian Split Squats', category: 'legs', isCustom: false, isDumbbell: true },
  { id: 'db-romanian-deadlift', name: 'Dumbbell Romanian Deadlifts', category: 'legs', isCustom: false, isDumbbell: true },
  { id: 'goblet-squat', name: 'Goblet Squats', category: 'legs', isCustom: false, isDumbbell: false },
  { id: 'db-hip-thrust', name: 'Dumbbell Hip Thrusts', category: 'legs', isCustom: false, isDumbbell: false },
  { id: 'db-calf-raise', name: 'Standing Dumbbell Calf Raises', category: 'legs', isCustom: false, isDumbbell: true },
];

export const CATEGORY_LABELS: Record<string, string> = {
  chest: 'Chest',
  back: 'Back',
  legs: 'Legs',
  shoulders: 'Shoulders',
  arms: 'Arms',
  core: 'Core',
};
