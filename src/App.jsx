import { useEffect } from 'react'
import './App.css'
import About from './components/about/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Home from './components/Home'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  // // let crsr = document.querySelector(".crsr")
  // let circle = document.querySelector(".crsr")

  // useEffect(()=>{

  //   document.addEventListener('mousemove', (dets) => {

  //     // // 1st way
  //     // setTimeout(()=>{
  //     //   crsr.style.left = dets.x+"px"
  //     //   crsr.style.top = dets.y+"px"
  //     // })
      
  //     // 2nd way
  //     const height = circle.offsetheight;
  //     const width = circle.offsetwidth;

  //     setTimeout(()=>{
  //       circle.style.left = `${dets.pagex - height/2}px`
  //       circle.style.top = `${dets.pagey - width/2}px`
  //     },20)

  //   })  

  // },[])
    
  return (
    <div className='App'>

      {/* <div className='crsr'></div> */}

      <div className='mainbody'>

        <Nav/>

        <Home/>

        {/* <About/> */}

        <Education/>

        <Skills/>

        <Projects/>

        <Contact/>

        <Footer/>

      </div>

    </div>
  )
}

export default App
