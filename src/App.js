
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer'
import About from './components/About';
import MealData from './components/MealData';
import {
  Outlet,
  createBrowserRouter
} from "react-router-dom";

import Error from './components/Error';




function App() {


return (
    <div className="">
      
    <Header></Header>
    <Outlet/>
  
   <Footer></Footer>
      
    </div>
  );




}

export const appRouter = createBrowserRouter([
  {
path: '/',
element: <App/>,
errorElement: <Error/>,

children: [

  {
     path: '/about',
     element: <About/>
  },


{

  path: '/',
  element: <Body/>
},
{
path: '/restaurant/:id',
element:   <MealData/>
}
]


}])

export default App;
