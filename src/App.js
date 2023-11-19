import './App.css';
import { NavBar } from './components/HomePage/NavBar';
import AllRoutes from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
              <NavBar/>

        <AllRoutes/>
    </div>
  );
}

export default App;
