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
import BookDetails from './componenents/bookDetails';
import AddBook from './componenents/addBook';
import UpdateBook from './componenents/updateBook';
import AboutUs from './componenents/aboutUs';


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

            <Route  exact path="/aboutus" >
                <AboutUs/>
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

            <Route exact path="/add/book">
              <AddBook/>
            </Route>

            <Route  exact path="/book/details/:id" >
                <BookDetails/>
            </Route>    

            <Route  exact path="/book/update/:id" >
                <UpdateBook/>
            </Route>                    

          </Switch>
 
         </div>

        </Router>
       



    </div>
  );
}

export default App;
