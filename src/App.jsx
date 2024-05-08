import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Wallet from "./pages/Wallet";
import Members from "./pages/Members";
import Home from "./pages/Home";
import './App.css'

function App() {
  
  const router = createBrowserRouter([
  {path:'/',element: <Wallet />},
  {path:'/members',element:<Members />},
  {path:'/home',element:<Home />},  
  ])
  return (
    <>
      <RouterProvider router ={router}/>
    </>
  )
}

export default App
