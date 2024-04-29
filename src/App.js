import './App.css';
import SplitScreen from './layoutComponent/splitScreen/SplitScreen';

const LeftSideComponent = ()=>{
  return<>
    <div style={{background:"red"}}>this is left component</div>
  </>
}
const RightSideComponent = ()=>{
  return<>
    <div style={{background:"blue"}}>this is right component</div>
  </>
}

function App() {
  return (
    <div className="App">
     <SplitScreen Left={LeftSideComponent} Right={RightSideComponent}/>
    </div>
  );
}

export default App;
