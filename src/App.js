import './App.css'
import CurrentUserLoader from './ContainerComponents/CurrentUserLoader.jsx';
import UserInfo from './ContainerComponents/UserInfo';


function App() {
  return (
      <CurrentUserLoader>
        <UserInfo/>
      </CurrentUserLoader>
  );
}

export default App;
