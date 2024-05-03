import './App.css';
import List from './layoutComponent/lists/List';
import LargeAuthorListItems from './layoutComponent/lists/authers/LargeListItems';
import SmallAutherListItems from './layoutComponent/lists/authers/SmallListItems';
import LargeBookListItems from './layoutComponent/lists/books/LargeListItems';
import SmallBookListItems from './layoutComponent/lists/books/SmallListItems';
import { authors } from './layoutComponent/lists/data/authors';
import { books } from './layoutComponent/lists/data/books';
import SplitScreen from './layoutComponent/splitScreen/SplitScreen';


function App() {
  return (<>
    <h1> authors</h1>
    <SplitScreen LeftWidth={2} RightWidth={1}>
        <List items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItems}/>
        <List items={authors} sourceName={"author"} ItemComponent={SmallAutherListItems}/>
    </SplitScreen>
    <hr/>
    <h1>books</h1>
    <SplitScreen LeftWidth={2} RightWidth={1}>
        <List items={books} sourceName={"book"} ItemComponent={LargeBookListItems}/>
        <List items={books} sourceName={"book"} ItemComponent={SmallBookListItems}/>
    </SplitScreen>
  </>);
}

export default App;
