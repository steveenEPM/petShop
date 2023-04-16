/* eslint-disable no-unused-vars */
import { createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";
import Homes from "./pages/homes";
import Productos from "./pages/productos1";
import Informacion from "./pages/informacion";
import Loing from "./pages/loing";
import SingIn from "./pages/singIn";
import MyPerfil from "./pages/perfil";
import NotFound from "./pages/404";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homes />,
      errorElement:<NotFound/>
    },
    {
      path: '/productos',
      element: <Productos />,
      errorElement:<NotFound/>,
      children: [
        {
          path: '/productos/:id',
          element: <Productos />
        }, {
          path: '/productos/search/:id',
          element: <Productos />
        }
      ]
    },
    {
      path: '/comprar/:ide',
      element: <Informacion />,
      errorElement:<NotFound/>
    },
    {
      path: '/loing',
      element: <Loing />,
      errorElement:<NotFound/>
    },
    {
      path: '/singIng',
      element: <SingIn />
    },
    {
      path: '/perfil',
      element: <MyPerfil />,
      errorElement:<NotFound/>,
      children:[
        {
          path:'/perfil/:id',
          element:<MyPerfil/>
        }
      ]
    }
  ])

  return <RouterProvider router={router} />;
}

export default App;
