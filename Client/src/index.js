import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
// import About from './about'
// import App from './App'
import Welcome from './Welcome'
import About from './About'
import ClothingPage from './ClothingPage'
import Contact from './Contact'

// React Router Config

const myRouter = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Welcome />
    },
    {
      path: "/inventory",
      element: <ClothingPage />,
      loader: async () => fetch("/clothes").then(res => res.json())
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    }
  ]
}]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
