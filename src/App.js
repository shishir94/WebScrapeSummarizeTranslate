import './App.css';
import Textform from './Components/Textform';

function App() {
  return (
    <>
    <span style={{ margin: '0 10px' }}></span>
    <div className="container">
      <h2>Enter your chatgpt key</h2>
        <textarea className="form-control" value={"Enter your key"} id="myBox" rows="1"></textarea>
    </div>
    <span style={{ margin: '0 10px' }}></span>
    <div className="container" my3="true">
      <Textform heading="Enter the URL" heading1="Your Summary"></Textform>
    </div>
    </>
  );
}

export default App;
