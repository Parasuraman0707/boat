import React from 'react'
import Big from './Big'
import Big_under from "./Big_under"
import Content from './content'
import Propscard from './Propscard'
import Imageset from './Imageset'
import Content_2 from './Content_2'
import Landscape from './Landscape'
import Content_3 from './Content_3'
import Text_under from './Text_under'
import Againinamge from './Againinamge'
import Content_4 from './Content_4'
import Imagesmall from './Imagesmall'
import Content_5 from './Content_5'
import Videos_headset from './Videos_headset.jsx'

const Home = () => {
  return (
    <div>
         {/* <Navbar/> */}
        <Big/>
       {/* <Big_under/> */}
        <Content/>
       <Propscard/>
        <Imageset/> 
       <Content_2/>
       <Landscape/>
       <Content_3/>
       <Text_under/>
       {/* <Imageset_2/> */}
       <Againinamge/>
       <Content_4/>
       <Imagesmall/>
       <br />
       <br />
       <Content_5/>
      <Videos_headset/>
      {/* <About1/> */}
      {/* <Footer_2/> */}
    </div>
  )
}

export default Home