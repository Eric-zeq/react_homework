import './App.css';
import img1 from "./images/f3.png"
import img2 from "./images/f4.png"
import img3 from "./images/f5.png"
import Task from './components/week13.js';
import Pizzacard from './components/week14.js';


function App() {
  return (
    <div className="App">
      <div class='dcenter'>
        <Task img={img1} title={'First block'} content={'Lorem, ipsum dolor sit amet consectetur'} p_content={'adipisicing elit'}/>
        <Task img={img2} title={'Second block'} content={'Lorem, ipsum dolor sit amet consectetur'} p_content={'adipisicing elit?'} />
        <Task img={img3} title={'Third block'} content={'Lorem, ipsum dolor sit amet consectetur'} p_content={'adipisicing elit!'}/>
      </div>     
      <Pizzacard />
    </div>
  );
}

export default App;
