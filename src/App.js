import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Projects';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Footer />
    </main>
  );
}

export default App;
