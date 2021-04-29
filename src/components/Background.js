import React from 'react';
import './style.css';
import Overlay from './Overlay';

export default function Background(props) {
    const {data} = props;
    return (
        <div className='bg' style={{backgroundImage:`url(${data.url})`}}>                       
            <Overlay text={data.text} audio={data.audio}/>  
        </div>
    )
}
