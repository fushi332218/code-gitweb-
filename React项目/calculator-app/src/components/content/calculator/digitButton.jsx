import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ACTIONS } from '../../../redux/action';

class DigitButton extends Component {
    state = {  } 
    render() { 
        return (
            <button
                onClick={() => this.props.add_digit(this.props.digit)}
            >
                {this.props.digit}
            </button>
        );
    }
}

const mapDispatchToPorps = {
    add_digit: digit => {
        return {
            type: ACTIONS.ADD_DIGIT,
            digit: digit
        }
    }
}

export default connect(null, mapDispatchToPorps)(DigitButton);