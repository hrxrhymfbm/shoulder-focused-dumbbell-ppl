export interface RoutineExercise {
  exerciseId: string;
  sets: number;
  repRange: string;
}

export interface RoutineDay {
  name: string;
  exercises: RoutineExercise[];
}

export interface Routine {
  id: string;
  name: string;
  days: RoutineDay[];
}

export const ROUTINES: Routine[] = [
  {
    id: 'shoulder-focused-ppl',
    name: 'Shoulder-Focused Dumbbell PPL',
    days: [
      {
        name: 'Push',
        exercises: [
          { exerciseId: 'incline-db-press',        sets: 3, repRange: '6–8'   },
          { exerciseId: 'flat-db-bench-press',      sets: 3, repRange: '8–10'  },
          { exerciseId: 'seated-db-shoulder-press', sets: 3, repRange: '8–10'  },
          { exerciseId: 'lateral-raise',            sets: 4, repRange: '12–15' },
          { exerciseId: 'incline-db-fly',           sets: 3, repRange: '10–12' },
          { exerciseId: 'overhead-db-tricep-ext',   sets: 3, repRange: '10–12' },
        ],
      },
      {
        name: 'Pull',
        exercises: [
          { exerciseId: 'chest-supported-db-row',   sets: 4, repRange: '8–10'  },
          { exerciseId: 'one-arm-db-row',           sets: 3, repRange: '8–10'  },
          { exerciseId: 'incline-rear-delt-fly',    sets: 4, repRange: '12–15' },
          { exerciseId: 'db-shrugs',                sets: 3, repRange: '10–15' },
          { exerciseId: 'incline-db-curl',          sets: 3, repRange: '10–12' },
          { exerciseId: 'hammer-curl',              sets: 3, repRange: '10–12' },
        ],
      },
      {
        name: 'Legs',
        exercises: [
          { exerciseId: 'bulgarian-split-squat',    sets: 4, repRange: '8–10'  },
          { exerciseId: 'db-romanian-deadlift',     sets: 4, repRange: '8–10'  },
          { exerciseId: 'goblet-squat',             sets: 3, repRange: '10–12' },
          { exerciseId: 'db-hip-thrust',            sets: 3, repRange: '10–12' },
          { exerciseId: 'db-calf-raise',            sets: 4, repRange: '12–20' },
          { exerciseId: 'lateral-raise',            sets: 3, repRange: '15–20' },
        ],
      },
    ],
  },
];
