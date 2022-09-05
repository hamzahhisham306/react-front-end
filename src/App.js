import './App.css';
import Person from './Components/Person';
import Header from './Components/Header'
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Please input the Information</h1>
      <Person/>
      <Footer/>
    </div>
  );
}

export default App;
