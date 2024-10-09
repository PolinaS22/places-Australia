import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./Main";
// import Melbourne from './Melbourne';
// import Sydney from './Sydney';
// import Perth from "./Perth";
import './App.css';
import { dataMelbourne } from "./data/dataMelbourne";
import { dataPerth } from "./data/dataPerth";
import { dataSydney } from "./data/dataSydney";

import { souvenirsPerth } from "./data/souvenirsPerth";
import { souvenirsMelbourne } from "./data/souvenirsMelbourne";
import { souvenirsSydney } from "./data/souvenirsSydney";
import { dataInfoMelbourne } from "./data/dataInfoMelbourne";
import { dataInfoSydney } from "./data/dataInfoSydney";
import { dataInfoPerth } from "./data/dataInfoPerth";

import City from "./City";




function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>
    },

    // {
    //   path: '/melbourne',
    //   element: <Melbourne/>
    // },
    // {
    //   path: '/sydney',
    //   element: <Sydney/>
    // },
    // {
    //   path: '/perth',
    //   element: <Perth/>
    // }

    // TEST
    {
      path: '/melbourne',
      element: <City dataCity={dataMelbourne} dataSouvenirs={souvenirsMelbourne} dataInfo={dataInfoMelbourne}/>
    },
    {
      path: '/sydney',
      element: <City dataCity={dataSydney} dataSouvenirs={souvenirsSydney} dataInfo={ dataInfoSydney }/>
    },
    {
      path: '/perth',
      element: <City dataCity={dataPerth} dataSouvenirs={souvenirsPerth} dataInfo={ dataInfoPerth }/>
    },
    

  ]);

  
  return (
    <div>      
      <RouterProvider router={router}/>
    </div>
  );








}

export default App;
