import { Outlet } from 'react-router-dom';
import { Header } from './modules/shared/Header';
import './App.scss';

export const App = () => (
  <div className="App">
    <Header />

    <main>
      <Outlet />
    </main>

    {/* Footer will go here */}
  </div>
);
