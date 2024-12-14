
import './App.css';
import Header from   './components/header.js'
import Content from './components/content.js';
import About from './components/about.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
        <Header/>
        <Content/>
        <About/>
        <Footer/>  
    </div>
  );
}

export default App;
