// import Full from "./Full"
// import Navbar from "./Navbar"
// import Big from "./Big"
// import Content from "./content"
// import Propscard from "./Propscard"
// import Imageset from "./Imageset"
// import Big_under from "./Big_under"
// import Sync from "./Sync"
// import { UseeeeRefee } from "./UseContext,UseRef,Json-server/UseeeeRefee"
// import Control_input from "./control_input"
// import Content_2 from "./Content_2"
// import Landscape from "./Landscape"
// import Content_3 from "./Content_3"
// import Text_under from "./Text_under"
// import Againinamge from "./Againinamge"
// import Content_4 from "./Content_4"
// import Imagesmall from "./Imagesmall"
// import Content_5 from "./Content_5"
// import Videos_headset from "./Videos_headset.jsx"
// import Footer_2 from "./Footer_2.jsx"
// import About1 from "./About1.jsx"
import { BrowserRouter } from "react-router-dom"
import Routerboat from "./Routerboat.jsx"
// import './index.css'




// import Imageset_2 from "./Imageset_2"

function App() {

  return (
    <div className="mainn">
       {/* <Navbar/>
        <Big/>
       <Big_under/>
        <Content/>
       <Propscard/>
        <Imageset/> 
       <Content_2/>
       <Landscape/>
       <Content_3/>
       <Text_under/>
       <Imageset_2/>
       <Againinamge/>
       <Content_4/>
       <Imagesmall/>
       <br />
       <br />
       <Content_5/>
      <Videos_headset/>
      <About1/>
      <Footer_2/> */}
      <BrowserRouter>
      <Routerboat/>
      </BrowserRouter>
      {/* <Sync/> */}
      {/* <UseeeeRefee/> */}
    </div>
   )
}

export default App
