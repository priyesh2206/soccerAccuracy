import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'

class Example extends Component {
  render () {
    return (
        <div className="back">
       <div><ParticlesBg color="random" num={10} type="square" bg={true} /></div>
      </div>
    );
  }
}

export default Example;