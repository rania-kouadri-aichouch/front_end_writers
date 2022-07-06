import About from "./about";
import Footer from "./footer";
import Navbar from "./navbar";

const AboutUs = () => {
    return ( 
          <div>
             <Navbar/>
             
             <div className="my-32">

                <About/>
                
             </div>
             <div>
               <Footer />
             </div>
             
             
          </div>
     );
}
 
export default AboutUs ;