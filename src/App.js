import React from 'react';
import Login from './Connexion/Login';
import DashboardRoutes from './Navigation/DashboardRoutes'

export default function App() {
    return (
		<Login/>
      	//<DashboardRoutes/>
      	// sessionStorage.getItem('Authenticated') ? <DashboardRoutes/> : <Login/>
    );
}
