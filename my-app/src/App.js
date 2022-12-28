import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import './App.css';

function App() {
  return (
    <>
      <Navbar title="openText" abtText="About Us"/>
      <div className="container my-3">
          <TextForm heading="Enter The Text :"/>
          {/* <About/> */}
      </div>
    </>
  );
}

export default App;
