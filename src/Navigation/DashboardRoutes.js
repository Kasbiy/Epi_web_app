import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';
import Profil from '../Components/Profil';
import Accueil from '../Components/Accueil';
import Favoris from '../Components/Favoris';
import Upload from '../Components/Upload';


export default class DashboardRoutes extends Component {
  	render() {
  	  	return (
  	  	  	<Router>
  	  	  	   	<Switch>
  	  	  	   	  	<Route exact path='/' component={Accueil}>
  	  	  	   	  	  	<Link to='/' />
  	  	  	   	  	  	<Accueil/>
  	  	  	   	  	</Route>
  	  	  	   	  	<Route path='/profil' component={Profil}>
  	  	  	   	  	  	<Link to='/profil' />
  	  	  	   	  	  	<Profil/>
  	  	  	   	  	</Route>
  	  	  	   	  	<Route path='/favoris' component={Favoris}>
  	  	  	   	  	  	<Link to='/favoris' />
  	  	  	   	  	  	<Favoris/>
  	  	  	   	  	</Route>
  	  	  	   	  	<Route path='/upload' component={Upload}>
  	  	  	   	  	  	<Link to='/upload' />
  	  	  	   	  	  	<Upload/>
  	  	  	   	  	</Route>
  	  	  	   	</Switch>
  	  	  	</Router>
  	  	)
  	}
}
