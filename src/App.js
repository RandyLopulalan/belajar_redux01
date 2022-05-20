import './App.css';
import ChangeColor from './Component/ChangeColor';
import Counter from './Component/Counter';
import Login from './Component/Login';
import Profile from './Component/Profile';

function App() {
  return (
    <div className="App">
        <Profile />
        <Login />
        <ChangeColor />
        <Counter />
    </div>
  );
}

export default App;
