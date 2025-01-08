import './App.css';
import Catagory from './pages/Catagory';
import Coupons from './pages/Coupons';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DeliveryCharges from './pages/DeliveryCharges';
import Navbar from './components/Navbar';
import AddNewProduct from './pages/AddNewProduct';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
    },
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
    {
      path: "/addnewproduct",
      element: <AddNewProduct/>,
    },
   
   
  ])
  return (
    <div className="App text-center">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
