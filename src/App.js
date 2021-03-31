
import './App.css';
import Bar from "./components/bar"
import Side from "./components/side"
import Main from "./components/main"
function App() {
  return (
    <div className="App">
      <Bar/>
      <div className="row">
        <Side />
        <Main />
      </div>
    </div>
  );
}

export default App;
