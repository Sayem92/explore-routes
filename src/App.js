
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Products from './components/Products/Products';

function App() {
  const router = createBrowserRouter([
          {path: '/', element: <div>This is default page</div>},
          {path: '/home', element: <Home></Home>},
          {path: 'about', element: <About></About>},
          {path: '/products', element: <Products></Products>},
  ]);

  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
