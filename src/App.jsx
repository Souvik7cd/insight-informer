import './App.css'

import { Component } from 'react'

export default class App extends Component {

  c = 'John';

  render() {
    return (
      <div>
        Hello {this.c}
      </div>
    )
  }
}
