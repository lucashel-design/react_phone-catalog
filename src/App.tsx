import { Outlet } from 'react-router-dom';
import './App.scss';

export const App = () => (
  <div className="App">
    {/* Header will go here */}

    <main>
      <Outlet />
    </main>

    {/* Footer will go here */}
  </div>
);
