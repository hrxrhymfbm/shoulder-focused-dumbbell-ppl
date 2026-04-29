import type { WorkoutLog } from '../types';

export const SEED_LOGS: WorkoutLog[] = [
  // ── Push ──────────────────────────────────────────────────────────────────
  {
    id: 'seed-push-2026-04-07',
    date: '2026-04-07',
    exercises: [
      { exerciseId: 'incline-db-press',        sets: [{weight:40,reps:8},{weight:40,reps:8},{weight:40,reps:8}] },
      { exerciseId: 'flat-db-bench-press',      sets: [{weight:45,reps:9},{weight:45,reps:9},{weight:45,reps:9}] },
      { exerciseId: 'seated-db-shoulder-press', sets: [{weight:25,reps:10},{weight:25,reps:10},{weight:25,reps:10}] },
      { exerciseId: 'lateral-raise',            sets: [{weight:7.5,reps:15},{weight:7.5,reps:15},{weight:7.5,reps:15},{weight:7.5,reps:11}] },
      { exerciseId: 'incline-db-fly',           sets: [{weight:22.5,reps:12},{weight:22.5,reps:12},{weight:22.5,reps:12}] },
      { exerciseId: 'overhead-db-tricep-ext',   sets: [{weight:40,reps:12},{weight:40,reps:12},{weight:40,reps:12}] },
    ],
  },
  {
    id: 'seed-push-2026-04-11',
    date: '2026-04-11',
    exercises: [
      { exerciseId: 'incline-db-press',        sets: [{weight:40,reps:9},{weight:40,reps:9},{weight:40,reps:9}] },
      { exerciseId: 'flat-db-bench-press',      sets: [{weight:45,reps:10},{weight:45,reps:10},{weight:45,reps:10}] },
      { exerciseId: 'seated-db-shoulder-press', sets: [{weight:30,reps:8},{weight:30,reps:8},{weight:30,reps:8}] },
      { exerciseId: 'lateral-raise',            sets: [{weight:7.5,reps:15},{weight:7.5,reps:15},{weight:7.5,reps:15},{weight:7.5,reps:12}] },
      { exerciseId: 'incline-db-fly',           sets: [{weight:25,reps:10},{weight:25,reps:10},{weight:25,reps:10}] },
      { exerciseId: 'overhead-db-tricep-ext',   sets: [{weight:45,reps:10},{weight:45,reps:10},{weight:45,reps:10}] },
    ],
  },
  {
    id: 'seed-push-2026-04-15',
    date: '2026-04-15',
    exercises: [
      { exerciseId: 'incline-db-press',        sets: [{weight:45,reps:6},{weight:45,reps:6},{weight:45,reps:6}] },
      { exerciseId: 'flat-db-bench-press',      sets: [{weight:50,reps:8},{weight:50,reps:8},{weight:50,reps:8}] },
      { exerciseId: 'seated-db-shoulder-press', sets: [{weight:30,reps:9},{weight:30,reps:9},{weight:30,reps:9}] },
      { exerciseId: 'lateral-raise',            sets: [{weight:7.5,reps:15},{weight:7.5,reps:15},{weight:7.5,reps:15},{weight:7.5,reps:13}] },
      { exerciseId: 'incline-db-fly',           sets: [{weight:25,reps:11},{weight:25,reps:11},{weight:25,reps:10}] },
      { exerciseId: 'overhead-db-tricep-ext',   sets: [{weight:45,reps:11},{weight:45,reps:11},{weight:45,reps:11}] },
    ],
  },
  {
    id: 'seed-push-2026-04-19',
    date: '2026-04-19',
    exercises: [
      { exerciseId: 'incline-db-press',        sets: [{weight:45,reps:7},{weight:45,reps:7},{weight:45,reps:7}] },
      { exerciseId: 'flat-db-bench-press',      sets: [{weight:50,reps:9},{weight:50,reps:8},{weight:50,reps:8}] },
      { exerciseId: 'seated-db-shoulder-press', sets: [{weight:30,reps:9},{weight:30,reps:9},{weight:30,reps:9}] },
      { exerciseId: 'lateral-raise',            sets: [{weight:7.5,reps:15},{weight:7.5,reps:15},{weight:7.5,reps:15},{weight:7.5,reps:12}] },
      { exerciseId: 'incline-db-fly',           sets: [{weight:25,reps:11},{weight:25,reps:11},{weight:25,reps:11}] },
      { exerciseId: 'overhead-db-tricep-ext',   sets: [{weight:45,reps:12},{weight:45,reps:12},{weight:45,reps:12}] },
    ],
  },
  {
    id: 'seed-push-2026-04-23',
    date: '2026-04-23',
    exercises: [
      { exerciseId: 'incline-db-press',        sets: [{weight:45,reps:8},{weight:45,reps:8},{weight:45,reps:8}] },
      { exerciseId: 'flat-db-bench-press',      sets: [{weight:50,reps:9},{weight:50,reps:9},{weight:50,reps:8}] },
      { exerciseId: 'seated-db-shoulder-press', sets: [{weight:30,reps:10},{weight:30,reps:10},{weight:30,reps:10}] },
      { exerciseId: 'lateral-raise',            sets: [{weight:7.5,reps:15},{weight:7.5,reps:15},{weight:7.5,reps:15},{weight:7.5,reps:15}] },
      { exerciseId: 'incline-db-fly',           sets: [{weight:25,reps:12},{weight:25,reps:12},{weight:25,reps:10}] },
      { exerciseId: 'overhead-db-tricep-ext',   sets: [{weight:50,reps:10},{weight:50,reps:10},{weight:50,reps:10}] },
    ],
  },

  // ── Pull ──────────────────────────────────────────────────────────────────
  {
    id: 'seed-pull-2026-04-08',
    date: '2026-04-08',
    exercises: [
      { exerciseId: 'chest-supported-db-row',  sets: [{weight:35,reps:10},{weight:35,reps:10},{weight:35,reps:10},{weight:35,reps:7}] },
      { exerciseId: 'one-arm-db-row',          sets: [{weight:45,reps:10},{weight:45,reps:10},{weight:45,reps:8}] },
      { exerciseId: 'incline-rear-delt-fly',   sets: [{weight:10,reps:13},{weight:10,reps:13},{weight:10,reps:10},{weight:10,reps:10}] },
      { exerciseId: 'db-shrugs',               sets: [{weight:35,reps:13},{weight:35,reps:13},{weight:35,reps:12}] },
      { exerciseId: 'incline-db-curl',         sets: [{weight:20,reps:11},{weight:20,reps:9},{weight:20,reps:9}] },
      { exerciseId: 'hammer-curl',             sets: [{weight:17.5,reps:10},{weight:17.5,reps:10},{weight:17.5,reps:10}] },
    ],
  },
  {
    id: 'seed-pull-2026-04-12',
    date: '2026-04-12',
    exercises: [
      { exerciseId: 'chest-supported-db-row',  sets: [{weight:35,reps:10},{weight:35,reps:10},{weight:35,reps:10},{weight:35,reps:10}] },
      { exerciseId: 'one-arm-db-row',          sets: [{weight:45,reps:10},{weight:45,reps:10},{weight:45,reps:9}] },
      { exerciseId: 'incline-rear-delt-fly',   sets: [{weight:10,reps:13},{weight:10,reps:13},{weight:10,reps:13},{weight:10,reps:11}] },
      { exerciseId: 'db-shrugs',               sets: [{weight:35,reps:13},{weight:35,reps:13},{weight:35,reps:13}] },
      { exerciseId: 'incline-db-curl',         sets: [{weight:20,reps:11},{weight:20,reps:11},{weight:20,reps:11}] },
      { exerciseId: 'hammer-curl',             sets: [{weight:17.5,reps:11},{weight:17.5,reps:11},{weight:17.5,reps:11}] },
    ],
  },
  {
    id: 'seed-pull-2026-04-16',
    date: '2026-04-16',
    exercises: [
      { exerciseId: 'chest-supported-db-row',  sets: [{weight:40,reps:8},{weight:40,reps:8},{weight:40,reps:8},{weight:40,reps:8}] },
      { exerciseId: 'one-arm-db-row',          sets: [{weight:45,reps:10},{weight:45,reps:10},{weight:45,reps:10}] },
      { exerciseId: 'incline-rear-delt-fly',   sets: [{weight:10,reps:13},{weight:10,reps:13},{weight:10,reps:13},{weight:10,reps:13}] },
      { exerciseId: 'db-shrugs',               sets: [{weight:35,reps:14},{weight:35,reps:14},{weight:35,reps:14}] },
      { exerciseId: 'incline-db-curl',         sets: [{weight:20,reps:12},{weight:20,reps:11},{weight:20,reps:9}] },
      { exerciseId: 'hammer-curl',             sets: [{weight:17.5,reps:12},{weight:17.5,reps:9},{weight:17.5,reps:9}] },
    ],
  },
  {
    id: 'seed-pull-2026-04-20',
    date: '2026-04-20',
    exercises: [
      { exerciseId: 'chest-supported-db-row',  sets: [{weight:40,reps:9},{weight:40,reps:8},{weight:40,reps:8},{weight:40,reps:8}] },
      { exerciseId: 'one-arm-db-row',          sets: [{weight:45,reps:10},{weight:45,reps:10},{weight:45,reps:10}] },
      { exerciseId: 'incline-rear-delt-fly',   sets: [{weight:10,reps:14},{weight:10,reps:13},{weight:10,reps:13},{weight:10,reps:13}] },
      { exerciseId: 'db-shrugs',               sets: [{weight:35,reps:15},{weight:35,reps:15},{weight:35,reps:15}] },
      { exerciseId: 'incline-db-curl',         sets: [{weight:20,reps:12},{weight:20,reps:11},{weight:20,reps:10}] },
      { exerciseId: 'hammer-curl',             sets: [{weight:17.5,reps:12},{weight:17.5,reps:9},{weight:17.5,reps:9}] },
    ],
  },
  {
    id: 'seed-pull-2026-04-24',
    date: '2026-04-24',
    exercises: [
      { exerciseId: 'chest-supported-db-row',  sets: [{weight:40,reps:9},{weight:40,reps:9},{weight:40,reps:8},{weight:40,reps:8}] },
      { exerciseId: 'one-arm-db-row',          sets: [{weight:45,reps:10},{weight:45,reps:10},{weight:45,reps:10}] },
      { exerciseId: 'incline-rear-delt-fly',   sets: [{weight:10,reps:14},{weight:10,reps:14},{weight:10,reps:14},{weight:10,reps:12}] },
      { exerciseId: 'db-shrugs',               sets: [{weight:40,reps:10},{weight:40,reps:10},{weight:40,reps:10}] },
      { exerciseId: 'incline-db-curl',         sets: [{weight:20,reps:12},{weight:20,reps:12},{weight:20,reps:10}] },
      { exerciseId: 'hammer-curl',             sets: [{weight:17.5,reps:12},{weight:17.5,reps:9}] },
    ],
  },

  // ── Legs ──────────────────────────────────────────────────────────────────
  {
    id: 'seed-legs-2026-04-09',
    date: '2026-04-09',
    exercises: [
      { exerciseId: 'bulgarian-split-squat',  sets: [{weight:17.5,reps:9},{weight:17.5,reps:9},{weight:17.5,reps:9},{weight:17.5,reps:9}] },
      { exerciseId: 'db-romanian-deadlift',   sets: [{weight:40,reps:9},{weight:40,reps:9},{weight:40,reps:9},{weight:40,reps:9}] },
      { exerciseId: 'goblet-squat',           sets: [{weight:35,reps:12},{weight:35,reps:12},{weight:35,reps:12}] },
      { exerciseId: 'db-hip-thrust',          sets: [{weight:40,reps:10},{weight:40,reps:10},{weight:40,reps:10}] },
      { exerciseId: 'db-calf-raise',          sets: [{weight:52.5,reps:15},{weight:52.5,reps:15},{weight:52.5,reps:15},{weight:52.5,reps:15}] },
      { exerciseId: 'lateral-raise',          sets: [{weight:5,reps:15},{weight:5,reps:15},{weight:5,reps:15}] },
    ],
  },
  {
    id: 'seed-legs-2026-04-13',
    date: '2026-04-13',
    exercises: [
      { exerciseId: 'bulgarian-split-squat',  sets: [{weight:17.5,reps:10},{weight:17.5,reps:10},{weight:17.5,reps:10},{weight:17.5,reps:10}] },
      { exerciseId: 'db-romanian-deadlift',   sets: [{weight:40,reps:10},{weight:40,reps:10},{weight:40,reps:10},{weight:40,reps:10}] },
      { exerciseId: 'goblet-squat',           sets: [{weight:40,reps:10},{weight:40,reps:10},{weight:40,reps:10}] },
      { exerciseId: 'db-hip-thrust',          sets: [{weight:40,reps:11},{weight:40,reps:11},{weight:40,reps:11}] },
      { exerciseId: 'db-calf-raise',          sets: [{weight:52.5,reps:16},{weight:52.5,reps:16},{weight:52.5,reps:16},{weight:52.5,reps:13}] },
      { exerciseId: 'lateral-raise',          sets: [{weight:5,reps:16},{weight:5,reps:16},{weight:5,reps:16}] },
    ],
  },
  {
    id: 'seed-legs-2026-04-17',
    date: '2026-04-17',
    exercises: [
      { exerciseId: 'bulgarian-split-squat',  sets: [{weight:20,reps:8},{weight:20,reps:8},{weight:20,reps:8},{weight:20,reps:8}] },
      { exerciseId: 'db-romanian-deadlift',   sets: [{weight:45,reps:8},{weight:45,reps:8},{weight:45,reps:8},{weight:45,reps:8}] },
      { exerciseId: 'goblet-squat',           sets: [{weight:40,reps:11},{weight:40,reps:11},{weight:40,reps:11}] },
      { exerciseId: 'db-hip-thrust',          sets: [{weight:40,reps:12},{weight:40,reps:12},{weight:40,reps:12}] },
      { exerciseId: 'db-calf-raise',          sets: [{weight:52.5,reps:16},{weight:52.5,reps:16},{weight:52.5,reps:16},{weight:52.5,reps:14}] },
      { exerciseId: 'lateral-raise',          sets: [{weight:5,reps:17},{weight:5,reps:17},{weight:5,reps:17}] },
    ],
  },
  {
    id: 'seed-legs-2026-04-21',
    date: '2026-04-21',
    exercises: [
      { exerciseId: 'bulgarian-split-squat',  sets: [{weight:20,reps:9},{weight:20,reps:9},{weight:20,reps:9},{weight:20,reps:9}] },
      { exerciseId: 'db-romanian-deadlift',   sets: [{weight:45,reps:9},{weight:45,reps:9},{weight:45,reps:9},{weight:45,reps:9}] },
      { exerciseId: 'goblet-squat',           sets: [{weight:40,reps:12},{weight:40,reps:12},{weight:40,reps:12}] },
      { exerciseId: 'db-hip-thrust',          sets: [{weight:45,reps:10},{weight:45,reps:10},{weight:45,reps:10}] },
      { exerciseId: 'db-calf-raise',          sets: [{weight:52.5,reps:16},{weight:52.5,reps:16},{weight:52.5,reps:16},{weight:52.5,reps:16}] },
      { exerciseId: 'lateral-raise',          sets: [{weight:5,reps:18},{weight:5,reps:18},{weight:5,reps:18}] },
    ],
  },
];
