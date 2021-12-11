import React, {Component} from 'react';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import UserAvatar from 'react-user-avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import HeaderBar from './HeaderBar';
import './Accueil.css';

export default class Accueil extends Component {
    render() {
        return (    
            <div style={{backgroundColor: '#FAFAFA', width: '100%', height: '100%'}}>
                <HeaderBar/>
                <div class="publications">
                    <Grid content>
                        <div style={{flexDirection: 'row', display: 'flex'}}>
                            <UserAvatar
  	                          	name='test'
                                style={{marginTop: '2%', marginLeft: '2%'}}
  	                          	size={38}
  	                          	src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
  	                        />
                            <Typography style={{marginLeft: '2%', marginTop: '3.5%', fontSize: 14, fontWeight: 'bold'}}>Nom User</Typography>
                        </div>
      		  	        <img src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' alt="Logo" style={{width: '100%', marginTop: '3%'}}/>
                        <FavoriteBorderIcon style={{marginTop: '2%', marginLeft: '2%'}}/>
                        <div style={{flexDirection: 'row', display: 'flex', marginBottom: '4%'}}>
                            <UserAvatar
  	                          	name='test'
                                style={{marginTop: '2%', marginLeft: '2%'}}
  	                          	size={28}
  	                          	src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
  	                        />
                            <Typography style={{marginLeft: '2%', marginTop: '3%', fontSize: 12, fontWeight: 'bold'}}>Nom User</Typography>
                        </div>
  	                </Grid>
                </div>
            </div>
        );
    }
};
