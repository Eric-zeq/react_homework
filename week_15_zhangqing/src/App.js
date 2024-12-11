
import './App.css';
import Header from   './components/header.js'
import Content from './components/content.js';
import About from './components/about.js';
import Footer from './components/footer.js';

function App() {
  const about_title='Why our Consulting?'
  const about_content='Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing.Apartments frequently or motionless on reasonable'
  const content_title = "What We Do?"
  const quote = "Get a Quote"
  const p_text1 = "Big Opportunity";
  const p_text2 = "For Your Business";
  return (
    <div className="App">
      <header>
        <Header quote={quote} p_text1={p_text1} p_text2={p_text2} />
      </header>
      <main>
        <Content content_title={content_title} />
        <About about_title={about_title} about_content={about_content} />
      </main>
      <footer>
        <Footer />  
      </footer>
    </div>
  );
}

export default App;
