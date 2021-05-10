
import {BrowserRouter as  Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';
import Detail from './components/Details';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="app">
     <Router>
       <Header/>
       <Switch>
         <Route exact path="/">            
           <Login/>
         </Route>
         <Route path='/home'>
           <Home/>
         </Route>
         <Route path ='/detail/:id'>
           <Detail/>
         </Route>
       </Switch>
     </Router>


    </div>
  );
}

export default App;
