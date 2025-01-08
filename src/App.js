import './App.css';
import Catagory from './pages/Catagory';
import Coupons from './pages/Coupons';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DeliveryCharges from './pages/DeliveryCharges';

function App() {
  const router = createBrowserRouter([
   
    {
      path: "/coupons",
      element: <Coupons/>,
    },
    {
      path: "/catagory",
      element: <Catagory/>,
    },
    {
      path: "/deliveryCharges",
      element: <DeliveryCharges/>,
    },
   
  ])
  return (
    <div className="App text-center">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
