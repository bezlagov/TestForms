import React from "react";
export default class FirstTaskSubmitButton extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }
    onSubmitForm(e) {
        this.props.onSubmitForm(e);
    }
    render() {
        return (
            <div>
                <input type="submit" value="DisplayData" onSubmit={this.onSubmitForm} />
            </div>
        );
    }
}