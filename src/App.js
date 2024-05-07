import './App.css'
import CurrentUserLoader from './ContainerComponents/CurrentUserLoader.jsx';
import UserInfo from './ContainerComponents/UserInfo';
import UserLoader from './ContainerComponents/UserLoader.jsx';


function App() {
  return (<>
        <UserLoader userId={'1'}>
          <UserInfo/>
        </UserLoader>
        <UserLoader userId={'2'}>
          <UserInfo/>
        </UserLoader>
        <UserLoader userId={'3'}>
          <UserInfo/>
        </UserLoader>
</>);
}

export default App;
