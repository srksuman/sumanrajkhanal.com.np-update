
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css" ; 
import NavBar from "./components/navbar";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Particles from 'react-particles-js';
function App() {
  return (
    <>
    <Particles
    className="particles"
    params={{
      particles: {
        line_linked: {
          shadow: {
            enable: true,
            color: "#3CA9D1",
            blur: 5
          },
          shape:{
            type:"star",
            color:"yellow"
          }
        
        }
        
      }
    }}
    />
    <NavBar/>
    <Header/>
    <About/>
    <Education/>
    </>
  );
}

export default App;
