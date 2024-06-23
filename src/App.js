import axios from 'axios';
import './App.css'
import CurrentUserLoader from './ContainerComponents/CurrentUserLoader.jsx';
import ResourceLoader from './ContainerComponents/ResourceLoader.jsx';
import {UserInfo} from './ContainerComponents/UserInfo';
import UserLoader from './ContainerComponents/UserLoader.jsx';
import DataSource from './ContainerComponents/DataSource.jsx';
import {includeUser} from './HOC/includeUser.js'



function App() {

  const UserInfoWithData =  includeUser(UserInfo,1);

  // const Getdata =async (url)=>{
  //   const response = await axios.get(url)
  //   return response.data
  // }
  return (<>
        {/* <UserLoader userId={'2'}>
          <UserInfo/>
        </UserLoader>

        <UserLoader userId={'3'}>
          <UserInfo/>
        </UserLoader>

        <ResourceLoader resourceUrl={"/users/2"} resourceName={"/user"}  >
          <UserInfo/>
        </ResourceLoader> */}

        {/* <DataSource 
        getData={()=>Getdata("/users/3")}
        resourceName={"user"}
       >
          <UserInfo/>
        </DataSource> */}

   
        <UserInfoWithData/>

</>);
}

export default App;
