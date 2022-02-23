import React from "react";
import FirstTaskDisplayer from "../FirstTaskDisplayer/FirstTaskDisplayer";
import FirstTaskInput from "../FirstTaskInput/FirstTaskInput";
import FirstTaskSubmitButton from "../FirstTaskSubmitButton/FirstTaskSubmitButton";

export default class FormHolder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input1: "",
            input2: "",
            input3: "",
            displayValue: "",
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    handleInputChange(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value,
        });
    }

    onSubmitForm(e) {
        e.preventDefault();
        this.setState({
            displayValue: JSON.stringify({
                input1: this.state.input1,
                input2: this.state.input2,
                input3: this.state.input3,
            })
        });
        console.log(this.state.displayValue);
    }

    render() {

        return (<div>
            <form onSubmit={this.onSubmitForm}>
                <FirstTaskInput
                    inputData={this.state.input1}
                    inputName="input1"
                    handler={this.handleInputChange}
                />
                <FirstTaskInput
                    inputData={this.state.input2}
                    inputName="input2"
                    handler={this.handleInputChange}
                />
                <FirstTaskInput
                    inputData={this.state.input3}
                    inputName="input3"
                    handler={this.handleInputChange}
                />
                <FirstTaskSubmitButton onSubmitForm={this.onSubmitForm}/>
                <FirstTaskDisplayer displayData={this.state.displayValue} />
            </form>
        </div>);
    }
}