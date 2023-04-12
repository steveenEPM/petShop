/* eslint-disable no-unused-vars */
import { createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";
import Homes from "./pages/homes";
import Productos from "./pages/productos1";
import Informacion from "./pages/informacion";
import Loing from "./pages/loing";
import SingIn from "./pages/singIn";
import MyPerfil from "./pages/perfil";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homes />,

    },
    {
      path: '/productos',
      element: <Productos />,
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
    },
    {
      path: '/loing',
      element: <Loing />
    },
    {
      path: '/singIng',
      element: <SingIn />
    },
    {
      path: '/perfil',
      element: <MyPerfil />,
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
