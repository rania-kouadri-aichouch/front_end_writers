import About from "./about";
import Footer from "./footer";
import Navbar from "./navbar";

const Home = () => {
    return ( 
          <div>
            
        <div className="relative ">
          <Navbar className="absolute top-0"/>
        <img
          className=" object-cover relative sm:h-72 sm:w-14 md:h-full md:w-full lg:w-full lg:h-100  lg:mt-0"
          src={require("../images/resized.jpeg")}
          alt=""
        />
        </div>

        <About/>

        <Footer/>
          </div>
     );
}
 
export default Home ;