import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Stock from './components/Stock/Stock';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <Hero />
      </header>
      <Stock />
      <Footer />
    </div>
  );
}

export default App;
