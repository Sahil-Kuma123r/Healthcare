
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Page from './components/Page';
import Doctors from './components/Doctors';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import DoctorPage from './components/DoctorPage';
import DiseasePricePredictor from './components/DiseasePricePredictor';
import RoomPage from './components/RoomPage';
import RoomHome from './components/RoomHome';
import Layout from './components/Layout';
import Donate from './components/Donate';
import Schemes from './components/Schemes';
import Info from './components/Info';
import Explore from './components/Explore';
import TopDoctors from './components/TopDoctors';
import CategorySearch from './components/CategorySearch';
import LoginPage from './components/LoginPage';

// Define your router
const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout/>,
    children:[{path:"",element:<Page/>},{path:"/donate",element:<Donate/>},{path:"/price_prediction",element:<DiseasePricePredictor/>},{path:'/schemes',element:<Schemes/>},{path:'/info',element:<Info/>},{path:'/explore',element:<Explore/>},{ path:"/register", element:<RegistrationForm/>},{ path:'/login',  element:<LoginForm/> },  { path:'doctor/:id',element:<DoctorPage/> } ,{ path:'all_docs',element:<Doctors/> },{path:'/emergency',element:<RoomHome/>}]
  },

  {path:'/room/:roomId',element:<RoomPage/>},
  {path:'/user',element:<LoginPage/>}


]);

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App;

