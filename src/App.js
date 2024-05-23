import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './components/assets/styles/styles.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
