import React from "react";
export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            {this.props.input * this.props.modificator}
        </div>);
    }
}