import React from "react";
import Calculator from "../Calculator/Calculator";
import SecondTaskInput from "../SecondTaskInput/SecondTaskInput";

export default class SecondTaskController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input1: 0,
            input2: 0,
        }

        this.onInputChange = this.onInputChange.bind(this);

    }

    onInputChange(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: Number(value),
        });
        console.log(this.state);

    }

    render() {
        return (
            <div>
                <SecondTaskInput
                    name="input1"
                    value={this.state.input1}
                    handler={this.onInputChange} />
                <SecondTaskInput
                    name="input2"
                    value={this.state.input2}
                    handler={this.onInputChange} />
                <Calculator
                    input={this.state.input1}
                    modificator={this.props.modificator1} />
                <Calculator
                    input={this.state.input2}
                    modificator={this.props.modificator2} />
            </div>
        );
    }
}