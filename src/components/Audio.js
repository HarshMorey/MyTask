import React from "react";

class Music extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
      url : this.props.audio
    }
  
    this.audio = new Audio(this.state.url);
    this.audio.play();
    
    console.log("ddd",this.props);
  }

  play = () => {
  this.setState({ play: true, pause: false })
    this.audio.play();
  }
  
  pause = () => {
  this.setState({ play: false, pause: true })
    this.audio.pause();
  }
  
  render() {
    
  return (
    <div style={{paddingLeft:'100px'}}>
      <div className="button" onClick={this.play} >Play</div>
      <div className="button" onClick={this.pause}>Pause</div>
    </div>
    );
  }
}
export default Music;