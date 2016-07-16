import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import {letterStyle} from '../style/style';
import {select} from 'd3-selection';
import {transition} from 'd3-transition';

class Letter extends Component {

    static t = transition().duration(1000);

    // propTypes is a way to check if
    // your props are well defined,
    // but also a good way to remember
    // what properties are given by parent component
    static propTypes = {
        letter: PropTypes.string.isRequired,
        i: PropTypes.number.isRequired,
    };

    // Internal state of the component
    // As we can't mutate props, we will
    // use this internal state in order to achieve transitions
    // thanks to d3.
    // So this state will basically represents
    // the initial state of our component
    state = {
        fill: 'green',
        x: 0,
        y: -100,
        fillOpacity: .1,
    };

    // Animation on enter:
    // called at the same time as componentDidMount,
    // it means your element is already on the dom
    componentWillEnter(callback) {
        this.setState({
            x: this.props.i*32
        });
        select(findDOMNode(this))
            .transition(Letter.t)
            .attr('y', 0)
            .style('fill-opacity', 1)
            .on('end', () => {
                this.setState({
                    y: 0,
                    fillOpacity: 1
                });
                callback();
            });
    }

    // Animation on update
    // This method is not called for the initial render
    componentWillReceiveProps(nextProps) {
        if(nextProps.i !== this.props.i){
            select(findDOMNode(this))
                .transition(Letter.t)
                .attr('x', nextProps.i*32)
                .style('fill','blue')
                .on('end', () => {
                    this.setState({
                        x: nextProps.i*32,
                        fill: 'blue'
                    });
                });
        }
    }

    // Animation on exit
    componentWillLeave(callback) {
        this.setState({
            fill: 'red'
        });

        select(findDOMNode(this))
            .transition(Letter.t)
            .attr('y', 100)
            .style('fill-opacity', 0)
            .style('fill', 'red')
            .on('end', () => {
                this.setState({
                    y: 100,
                    fillOpacity: .1,
                });
                callback();
            });
    }

    render() {
        const {letter} = this.props;
        const {y, x, fillOpacity, fill} = this.state;
        return (
            <text
                style={{...letterStyle, fillOpacity, fill}}
                x={x}
                y={y}
            >
                {letter}
            </text>
        );
    }
}

export default Letter;
