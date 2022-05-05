import logo from './logo.svg';
import './App.css';
import Bttns from './components/Bttns';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuHeader from './components/MenuHeader';
import CarasoulsReact from './components/CarasoulsReact';
function App() {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between",height:"100%"}} className="App" >
     <Bttns/>
     <CarasoulsReact/>

    </div>
  );
}

export default App;
