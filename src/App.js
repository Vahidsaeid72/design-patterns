import './App.css';
import SplitScreen from './layoutComponent/splitScreen/SplitScreen';

const LeftSideComponent = ({title})=>{
  return<>
    <div style={{background:"red"}}>{title}</div>
  </>
}
const RightSideComponent = ({title})=>{
  return<>
    <div style={{background:"blue"}}>{title}</div>
  </>
}

function App() {
  return (
    <div className="App">
     <SplitScreen LeftWidth={2} RightWidth={4}>
        <LeftSideComponent title={'left side component'}/>
        <RightSideComponent title={'right side component'}/>
     </SplitScreen>
    </div>
  );
}

export default App;
