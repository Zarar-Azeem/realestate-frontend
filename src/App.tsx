import React from 'react'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import Properties from './pages/Properties'
import { PropertryPage } from './pages/PropertryPage'
import ProfilePage from './pages/ProfilePage'
import { AddProperty } from './pages/AddProperty'
import UpdateProfile from './pages/UpdateProfile'
import PrivateRoutes from './components/PrivateRoutes'

const App = () => {
  return (
    <>
    <Header/>
    <div className='container'>
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route element={<PrivateRoutes />}>
            <Route path="/properties" element={ <Properties/> } />
            <Route path="/propertypage/:id" element={ <PropertryPage/> } />
            <Route path="/profile" element={ <ProfilePage/> } />
            <Route path="/addproperty" element={ <AddProperty/> } />
            <Route path="/updateproperty" element={ <UpdateProfile/> } />
          </Route>
          <Route path="/register" element={ <Register/> } />
          <Route path="/login" element={ <Login/> } />
        </Routes>
    </div>
    </>
  )
}

export default App