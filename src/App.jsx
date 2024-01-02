import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { Anime } from './components/Anime/Anime';
import { Series } from './components/Series/Series';
import { Movies } from './components/Movies/Movies';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/anime",
          element: <Anime/>
        },
        {
          path: "/series",
          element: <Series/>
        },
        {
          path: "/movies",
          element: <Movies/>
        },
      ]
    }
  ]);

  return (
    <div className='w-full flex items-center justify-center h-screen bg-[#242424]'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
