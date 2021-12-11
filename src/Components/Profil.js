import React, {Component} from 'react';
import UserAvatar from 'react-user-avatar';
import { Typography } from '@material-ui/core';

import HeaderBar from './HeaderBar';

export default class Profil extends Component {
    render() {
        return (    
            <div style={{backgroundColor: '#FAFAFA', width: '100%', height: '100%'}}>
                <HeaderBar/>
                <div style={{flexDirection: 'row', display: 'flex'}}>
                    <UserAvatar
  	                    name='test'
                        style={{marginTop: '3%', marginLeft: '20%'}}
  	                    size={150}
  	                    src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
  	                />
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: '8%', marginTop: '3%'}}>
                        <Typography style={{fontSize: 20}}>NomUser</Typography>
                        <div style={{flexDirection: 'row', display: 'flex'}}>
                            <Typography style={{fontSize: 18, flexDirection: 'row', display: 'flex', fontWeight: 'bold', marginTop: '15%'}}>
                                39
                                <Typography style={{fontSize: 17, marginLeft: '5%', marginTop: '1%'}}>publications</Typography>
                            </Typography>
                        </div>
                        <Typography style={{fontSize: 17, marginTop: '10%'}}>NomComplet</Typography>
                    </div>
                </div>
                <div style={{marginLeft: '15%', border: '0.5px solid grey', width: '70%', height: '0.5%', marginTop: '5%'}}></div>
                <div style={{flexDirection: 'column', display: 'flex', marginLeft: '15%', marginTop: '3%'}}>
                    <div style={{flexDirection: 'row', display: 'flex'}}>
                        <div style={{width: '50%'}}>
                            <img src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' alt="Logo" style={{width: '70%', height: '100%'}}/>
                        </div>
                        <div style={{width: '50%'}}>
      		  	            <img src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' alt="Logo" style={{width: '70%', height: '100%', marginLeft: '-12%'}}/>
      		  	        </div>
                        <div style={{width: '50%'}}>
                            <img src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' alt="Logo" style={{width: '70%', height: '100%', marginLeft: '-23%'}}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
