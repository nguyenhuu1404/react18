import { Outlet } from "react-router-dom";
import './App.scss';
import Header from './components/common/Header'

function App() {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
