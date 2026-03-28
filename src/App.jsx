import React from "react"
import Home from "./component/Home/Home"
import { createBrowserRouter } from "react-router-dom"


function App() { 

  const router = createBrowserRouter([
    {
      path : '/',
      element:<Home/>
    },
     {
      path : '/',
      element:<Home/>
    },
  ])
  return(
    <div>
      <Home/>
    </div>
  )
}


export default App
