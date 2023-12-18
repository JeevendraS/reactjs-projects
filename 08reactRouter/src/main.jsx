import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './componants/home/Home'
import AboutUs from './componants/aboutUs/AboutUs'
import ContactUs from './componants/contactUs/ContactUs'
import User from './componants/User/User'
import Github, { githubInfoLoader } from './componants/Github/Github'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'/',
//         element:<Home/>
//       },
//       {
//         path:'about',
//         element:<AboutUs/>
//       },
//       {
//         path:'contact',
//         element:<ContactUs/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<AboutUs/>}/>
      <Route path='contact' element={<ContactUs/>}/>
      <Route path='user/:UserId' element={<User/>}/>   
      <Route 
      loader={
        githubInfoLoader
      }
      path='github' 
      element={<Github/>}
      />   
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Layout/>
    </RouterProvider>
  </React.StrictMode>,
)
