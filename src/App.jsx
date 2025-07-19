
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import About from './About'
import Protfilo from './Protfilo'
import Home from './Home'
import Contact from './contact'
import Errore from './Errore'



// function App() {
//   let routes=createBrowserRouter([{
//     path:"",element:<Layout/> ,children:[
//          { index:true, element: <Home /> }, 
//       {path:"about",element:<About/>},
//       {path:"protfilo",element:<Protfilo/>},
     
//       {path:"contact",element:<Contact/>},
//       {path:"*",element:<Errore/>},
     
//     ]
//   }])


//   return (
//     <>
// <RouterProvider router={routes}></RouterProvider>
//     </>
//   )
// }



function App() {
let routes=createBrowserRouter([{
  path:"",element: <Layout/>,children:[
    {index:true , element:<Home/>},
    {path:"about" , element:<About/>},
    {path:"protfilo" , element:<Protfilo/>},
    {path:"contact" , element:<Contact/>},
    {path:"*" , element:<Errore/>},
  ]
}])


  return (
  <RouterProvider router={routes}></RouterProvider>
  )
}

















export default App
