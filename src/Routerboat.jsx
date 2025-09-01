import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Big from './Big'
import Content from './content'
import Propscard from './Propscard'
import Imageset from './Imageset'
import Content_3 from './Content_3'
import Landscape from './Landscape'
import Content_2 from './Content_2'
import Text_under from './Text_under'
import Againinamge from './Againinamge'
import Content_4 from './Content_4'
import Imagesmall from './Imagesmall'
import Content_5 from './Content_5'
import Videos_headset from './Videos_headset.jsx'
import About1 from './About1'
import Footer_2 from './Footer_2'
import Home from './Home.jsx'
import Params from './Params.jsx'
import Params_2 from './Params_2.jsx'
import Params_3 from './Params_3.jsx'

const Routerboat = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Imageset />} />
        <Route path='/' element={<Home/>}/>
        <Route path='/headset/:id' element={<Params/>}/>
        <Route path='/headphone/:id' element={<Params_2/>}/>
        <Route path='/products/:id' element={<Params_3/>}/>
      </Routes>
        <About1 />
        <Footer_2/>
    </>

  );
};

export default Routerboat;