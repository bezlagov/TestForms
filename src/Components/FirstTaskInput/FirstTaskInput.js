import React from "react";

export default class FirstTaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnValueChange = this.handleOnValueChange.bind(this);
    }

    handleOnValueChange(e) {
        this.props.handler(e);
    }
    render() {
        return (
            <div>
                <input
                    name={this.props.inputName}
                    type="text" value={this.props.inputData}
                    onChange={this.handleOnValueChange}
                />
            </div>
        );
    }

}