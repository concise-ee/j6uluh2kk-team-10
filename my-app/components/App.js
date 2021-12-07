import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Christmas} from './Christmas'
import {getChristmas} from '../services/ChristmasService'
import Snowfall from 'react-snowfall'

class App extends Component {

  state = {
    christmas: {}
  }

  async componentDidMount() {
    let christmas = await getChristmas()
    console.log(christmas);
    this.setState({christmas: christmas})
  }

  render() {

    return (
      <div className="App">
        <div className="row">
          <Snowfall />
          <Christmas christmas={this.state.christmas} />
        </div>
      </div>
    );
  }
}

export default App;
