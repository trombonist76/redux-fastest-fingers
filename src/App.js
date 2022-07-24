import TextArea from './components/TextArea';
import Navbar from "./components/Navbar.jsx"
import './scss/App.scss';
import Input from './components/Input';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TextArea/>
      <Input/>
      <Result/>
    </div>
  
  );
}

export default App;
