import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Main from "./Main";
import Melbourne from './Melbourne';
import Sydney from './Sydney';
import Perth from "./Perth";


function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>
    },
    {
      path: '/melbourne',
      element: <Melbourne/>
    },
    {
      path: '/sydney',
      element: <Sydney/>
    },
    {
      path: '/perth',
      element: <Perth/>
    }
  ]);

  
  return (
    <div>      
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
