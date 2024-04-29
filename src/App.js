import './App.css';
import List from './layoutComponent/lists/List';
import LargeAuthorListItems from './layoutComponent/lists/authers/LargeListItems';
import SmallAutherListItems from './layoutComponent/lists/authers/SmallListItems';
import { authors } from './layoutComponent/lists/data/authors';
import SplitScreen from './layoutComponent/splitScreen/SplitScreen';


function App() {
  return (
    <SplitScreen LeftWidth={2} RightWidth={1}>
        <List items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItems}/>
        <List items={authors} sourceName={"author"} ItemComponent={SmallAutherListItems}/>
    </SplitScreen>
  );
}

export default App;
