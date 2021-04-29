import React, { Component } from 'react';
import Arrow from './components/Arrow';
import Song from './components/song.mp3';

export default class App extends Component {
  state = {
    data:[{
      url:'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
      text:'Slide 1',
      audio:Song
     },
     {
      url:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80',
      text:'Slide 2',
      audio:''
     },
     {
      url:'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1140&q=80',
      text:'Slide 3',
      audio:Song
     },
     {
      url:'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      text:'Slide 4',
      audio:''
     },
     {
      url:'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
      text:'Slide 5',
      audio:Song
     }
    ]
  };

  render() {
    return (
      <div style={{width:'100%', height:'100vh' }}>
        <Arrow SlideData={this.state.data}/>   
      </div>
    )
  }
}
