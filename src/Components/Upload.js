import React, {Component} from 'react';
import HeaderBar from './HeaderBar';

export default class Upload extends Component {
    render() {
        return (    
            <div style={{backgroundColor: '#FAFAFA', width: '100%', height: '100%'}}>
                <HeaderBar/>
                <h1>Upload</h1>
            </div>
        );
    }
};
