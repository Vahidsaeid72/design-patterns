import './App.css';
import List from './layoutComponent/lists/List';
import LargeAuthorListItems from './layoutComponent/lists/authers/LargeListItems';
import SmallAutherListItems from './layoutComponent/lists/authers/SmallListItems';
import LargeBookListItems from './layoutComponent/lists/books/LargeListItems';
import SmallBookListItems from './layoutComponent/lists/books/SmallListItems';
import { authors } from './layoutComponent/lists/data/authors';
import { books } from './layoutComponent/lists/data/books';
import Modal from './layoutComponent/modals/Modal';
import SplitScreen from './layoutComponent/splitScreen/SplitScreen';


function App() {
  return (<>
      <Modal>
        <div>this is my moadal</div>
      </Modal>
  </>);
}

export default App;
