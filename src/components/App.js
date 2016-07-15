import React, {Component} from 'react';
import {connect} from 'react-redux';
import TransitionGroup from 'react-addons-transition-group';

@connect(
    state => ({
        letters: state.letters,
    })
)
class App extends Component {

    state = {};

    render() {
        return <div>{this.props.letters}</div>;
    }
}

export default App;