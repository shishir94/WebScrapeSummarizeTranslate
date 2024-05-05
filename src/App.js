import './App.css';
import Textform from './Components/Textform';

function App() {
  return (
    <>
    <span style={{ margin: '0 10px' }}></span>
    <div className="container" my3="true">
      <Textform heading="Enter the URL" heading1="Your Summary"></Textform>
    </div>
    </>
  );
}

export default App;
