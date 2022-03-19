import './App.css';
import Header from './components/header/header.js';
import Content from './components/content/content.js';
import VisitInfo from './components/visitInfo/visitInfo.js';
import Form from './components/form/form.js';
import About from './components/about/about.js';
import Footer from'./components/footer/footer.js';
function App() {
  return (
    <>
    <Header/>
    <div className='container'>
    <Content/>
    <VisitInfo/>
    <Form/>
    <About/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
