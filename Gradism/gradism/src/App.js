
import './App.css';
import Nav from './components/Nav';
import ColorComponents from './components/ColorComponents';
import ColorOne from './components/ColorOne';
import Output from './components/Output';
import MaterialUi from './components/MaterialUi';

function App() {
  return (
    <div className="App">
      <div className="text-center">
       <div className='p-2'>
        <Nav/>
        </div>
       <div className="p-2">
        <ColorComponents/>
        </div>
        <div className="p-2">
        <ColorOne/>
        <ColorOne/>
        <ColorOne/>
        </div>
        <Output/>
        <MaterialUi/>
      </div>
      
    </div>
  );
}

export default App;
