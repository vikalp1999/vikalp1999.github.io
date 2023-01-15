import "./Navigator.css"
import {  useState } from 'react'
import Scrollspy from "react-scrollspy"

function Navigator()
{

   

    const [showNavList, setShowNavList] = useState(false)

    const toggleNavList = () => setShowNavList(!showNavList)


    return(<div id="nav">

     <Scrollspy items={["home","About","contact","skills","project"]} currentClassName="active">

      <a href="#home" onClick={toggleNavList} >  <button ></button> </a>  
      <a href="#About" onClick={toggleNavList} >  <button ></button> </a>  
      <a href="#contact" onClick={toggleNavList} >  <button ></button> </a>  
      <a href="#skills" onClick={toggleNavList} >  <button ></button> </a>  
      <a href="#project" onClick={toggleNavList} >  <button ></button> </a>  
     </Scrollspy>
    </div>)

}

export default Navigator