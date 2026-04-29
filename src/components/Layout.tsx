import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <div className="app">
      <nav className="nav">
        <span className="nav-logo">Shoulder-Focused Dumbbell PPL</span>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Dashboard
          </NavLink>
          <NavLink to="/log" className={({ isActive }) => isActive ? 'active' : ''}>
            Log Workout
          </NavLink>
          <NavLink to="/exercises" className={({ isActive }) => isActive ? 'active' : ''}>
            Exercises
          </NavLink>
          <NavLink to="/history" className={({ isActive }) => isActive ? 'active' : ''}>
            History
          </NavLink>
        </div>
      </nav>
      <main className="main">
        <Outlet />
      </main>
      <nav className="bottom-nav" aria-label="Mobile navigation">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/log" className={({ isActive }) => isActive ? 'active' : ''}>Log</NavLink>
        <NavLink to="/exercises" className={({ isActive }) => isActive ? 'active' : ''}>Exercises</NavLink>
        <NavLink to="/history" className={({ isActive }) => isActive ? 'active' : ''}>History</NavLink>
      </nav>
    </div>
  );
}
