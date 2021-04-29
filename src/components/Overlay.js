import React from 'react';
import './style.css';
import Music from './Audio';

export default function Overlay(props) {
    const {text,audio} = props;
    return (
        <div className='overlay'>  
            <div className='textArea'>
              <p className='text'>{props.text}</p>
            </div>            
            <Music audio={audio}/>      
        </div>
    )
}
