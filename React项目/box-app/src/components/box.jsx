import React, { Component } from 'react';


class Box extends Component {
    // state = {  
    //     x:0
    // };

    // handleClickLeft = (step) => {
    //     this.setState({
    //         x: this.state.x - step
    //     });
    // }

    // handleClickRight = (step) => {
    //     this.setState({
    //         x: this.state.x + step
    //     });
    // }

    // constructor() {
    //     super();
    //     console.log("Box - constructor");
    // }

    // componentDidMount() {
    //     console.log("Box - compomentDidMount");
    // }

    componentDidUpdate () {
        console.log("Box - Updated");
    }

    render() { 
        console.log("Box - Rendered");
        return (
            <React.Fragment>
                <div style={this.getStyles()}>{this.toString()}</div>
                <button onClick={this.props.onClickLeft} className="btn btn-primary m-2">left</button>
                <button onClick={this.props.onClickRight} className="btn btn-success m-2">right</button>
                <button onClick={() => this.props.onDelete(this.props.box.id)} className="btn btn-danger m-2">Delete</button>
            </React.Fragment>
        );
    }

    getStyles() {
        let styles = {
            width: "50px",
            height: "50px",
            backgroundColor: "lightblue",
            color: "white",
            textAlign: "center",
            lineHeight: "50px", 
            borderRadius: "5px", 
            marginLeft: this.props.box.x,
        };

        if (this.props.box.x === 0) {
            styles.backgroundColor = 'orange';
        }

        return styles;
    }

    toString() {
        const {x} = this.props.box.x;
        return `x: ${x}`;
    }
}
 
export default Box;