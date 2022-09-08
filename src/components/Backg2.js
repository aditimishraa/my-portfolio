import React, { Component } from 'react';
import './Backg2.css';

class Backg2 extends Component {
    render(){
        return (
            <div className='backg-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text} </p>
                </div>
            </div>
        );
    }
  
}

export default Backg2;