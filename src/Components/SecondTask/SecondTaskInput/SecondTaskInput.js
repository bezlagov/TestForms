import React from "react";
import PropTypes from "prop-types";

export default class SecondTaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.onValueChange = this.onValueChange.bind(this);
    }
    onValueChange(e) {
        this.props.handler(e);
    }
    render() {
        return (<div>
            <input type="number"
                name={this.props.name}
                value={Number(this.props.value)}
                onChange={this.onValueChange} />
        </div>);
    }
}

SecondTaskInput.propTypes = {
    value: PropTypes.number
}