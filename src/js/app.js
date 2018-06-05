import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

import placeholderImage from '../assets/placeholder.png';

export default class Test extends Component {
  render() {
    return (
      <div>
        <p>Hello from react</p>
       <img src={ placeholderImage } alt='Placeholder image' />
      </div>
    );
  }
}

render(<Test />, document.getElementById('app'));
