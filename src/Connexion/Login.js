import React, {Component} from 'react';
import TextField from '@mui/material/TextField';
import {Typography } from '@material-ui/core';

import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true
        }
    }
    
    render() {
        if (this.state.login == true) {
            return (    
                <div>
                    <div style={{backgroundColor: 'white', border: '1px solid grey', display: 'flex', flexDirection: 'column', width: '35%', marginLeft: '33%', marginTop: '10%', borderRadius: '2%'}}>
                        <Typography style={{marginTop: '5%', textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>InstaLike</Typography>
                        <TextField label="E-mail" variant="outlined" type="email" style={{width: '60%', marginLeft: '20%', marginTop: '5%'}}/>
                        <TextField label="Mot de Passe" variant="outlined" type='password' style={{width: '60%', marginLeft: '20%', marginTop: '5%'}}/>
                        <button id='login'>Connexion</button>
                    </div>
                    <div style={{backgroundColor: 'white', border: '1px solid grey', display: 'flex', flexDirection: 'column', width: '35%', marginLeft: '33%', marginTop: '3%', borderRadius: '2%', height: '40px'}}>
                        <Typography style={{marginTop: '1%', color: '#2E95F6', textAlign: 'center', fontWeight: 'bold', fontSize: 16}} onClick={() => this.setState({login: false})}>Inscrivez-vous</Typography>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div style={{backgroundColor: 'white', border: '1px solid grey', display: 'flex', flexDirection: 'column', width: '35%', marginLeft: '33%', marginTop: '10%', borderRadius: '2%'}}>
                        <Typography style={{marginTop: '5%', textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>InstaLike</Typography>
                        <TextField label="E-mail" variant="outlined" type="email" style={{width: '60%', marginLeft: '20%', marginTop: '5%'}}/>
                        <TextField label="Nom Complet" variant="outlined" type="email" style={{width: '60%', marginLeft: '20%', marginTop: '5%'}}/>
                        <TextField label="Nom d'Utilisateur" variant="outlined" type="email" style={{width: '60%', marginLeft: '20%', marginTop: '5%'}}/>
                        <TextField label="Mot de Passe" variant="outlined" type='password' style={{width: '60%', marginLeft: '20%', marginTop: '5%'}}/>
                        <button id='login'>S'inscrire</button>
                    </div>
                    <div style={{backgroundColor: 'white', border: '1px solid grey', display: 'flex', flexDirection: 'column', width: '35%', marginLeft: '33%', marginTop: '3%', borderRadius: '2%', height: '70px'}}>
                        <Typography style={{textAlign: 'center', marginTop: '3%'}}>
                            Vous avez un compte ?
                            <Typography onClick={() => this.setState({login: true})} style={{color: '#2E95F6', textAlign: 'center', fontWeight: 'bold', fontSize: 16, marginBottom: '3%'}}>Connectez-vous</Typography>
                        </Typography>
                    </div>
                </div>
            )
        }
    }
};
