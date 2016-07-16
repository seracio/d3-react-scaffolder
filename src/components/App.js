import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import TransitionGroup from 'react-addons-transition-group';
import * as actionTypes from '../actions/actionTypes';
import Letter from './Letter';
import {svgStyle} from '../style/style';

@connect(
    // state refers here to the state of the redux store
    // that we are injecting onto the props of the App component
    state => ({letters: state.letters})
)
class App extends Component {

    // propTypes is a way to check if
    // your props are well defined,
    // but also a good way to remember
    // what properties are given by parent component
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        letters: PropTypes.array.isRequired,
    };

    // componentDidMount is part of the lyfecycle of React's components
    // It's here that we will call for an update of our store through an action call
    componentDidMount() {
        self.setInterval(() => this.props.dispatch({
            type: actionTypes.CHANGE_LETTERS
        }), 1500);
    }

    render() {
        const {letters} = this.props;
        return (
            <svg style={svgStyle} viewBox="0 0 1000 500" preserveAspectRatio="xMinYMin meet">
                <g transform="translate(50 250)">
                    <TransitionGroup component="g">
                        {letters.map((l, i) => <Letter key={l} letter={l} i={i}/>)}
                    </TransitionGroup>
                </g>
            </svg>
        );
    }
}

export default App;