import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';

function App() {
  return (
    <>
      <Navbar title="TextUtils" abtText="About Us"/>
      <div className="container my-3">
          <TextForm heading="Enter The Text to Analyze Below"/>
      </div>
    </>
  );
}

export default App;
