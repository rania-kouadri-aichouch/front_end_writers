import './App.css';
import {
  BrowserRouter as Router,
  Switch, //in v6 routes in v5 switch
  Route,
  Redirect,
} from "react-router-dom";

import Login from './componenents/login';
import Statistiques from './componenents/statistiques';
import About from './componenents/about';
import Register from './componenents/register';
import Home from './componenents/home';
import Books from './componenents/books';


function App() {
  return (
    <div className="App">

        <Router>
         <div className="App">
          
          <Switch>
             <Route exact path="/" > 
             
                <Home/>

             </Route>

            <Route  exact path="/books" >
              <Books/>
                
            </Route>

            <Route  exact path="/about" >
                <About/>
            </Route>

            <Route exact path="/statistiques">
              <Statistiques/>
            </Route>

            <Route exact path="/login">
              <Login/>
            </Route>


            <Route exact path="/register">
              <Register/>
            </Route>

          </Switch>
 
         </div>

        </Router>
       



    </div>
  );
}

export default App;
