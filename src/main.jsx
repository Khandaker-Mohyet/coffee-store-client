import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import Layout from './Components/Layout.jsx';
import LogIn from './Components/LogIn.jsx';
import SignUp from './Components/SignUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/coffee')
   },
   {
    path: "/coffee",
    element: <AddCoffee></AddCoffee>
    
   },
   {
    path: "/updatecoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader:({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
    
   },
   {
    path: "/login",
    element: <LogIn></LogIn>
   },
   {
    path: "/signup",
    element: <SignUp></SignUp>
   },
   {
    path: "/users",
    element: <Users></Users>,
    loader:()=>fetch('http://localhost:5000/users')
   },
    ]
  },
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
