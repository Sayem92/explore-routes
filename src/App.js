
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([

          {
            path: '/', 
            element: <Main></Main>,
            children: [
            {path: '/', element: <Home></Home>},
            {path: '/home', element: <Home></Home>},
            {path: '/products', element: <Products></Products>},
            {path: '/friends', element: <Friends></Friends>},

          ]},
          {path: 'about', element: <About></About>},
  ]);

  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
