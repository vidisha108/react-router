import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Movies } from './pages/Movies';
import { Contact } from './pages/Contact';
import AppLayout from './components/layout/AppLayout';

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      children:[
        {
           
      path:"/",
      element:<Home />,
    },
     {
      path:"/about",
      element:<About/>,
    },
     {
      path:"/movies",
      element:<Movies />,
    },
     {
      path:"/contact",
      element:<Contact />,
    },
        ]
    },
    ]);
  return <RouterProvider router={router} />;
};

export default App
