
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

function App() {
  const router = createBrowserRouter([
          {path: '/', element: <div>This is default page</div>},
          {path: '/home', element: <div>Home page</div>},
          {path: '/about', element: <div>This is about page</div>},
  ]);

  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
