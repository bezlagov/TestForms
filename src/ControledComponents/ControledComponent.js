import React from "react";
class ControledComponent extends React.Component {

    state = {
        value: '',
        textArea: '',
        selectValue:'tomato',
    }

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
       // this.handleTAChange = this.handleTAChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleChange(e) {
        const {value, name} = e.target;

        this.setState({
            [name]: value,
        });

        console.log(this.state);
    }
/*
    handleTAChange(e) {
        this.setState({
            value: e.target.textArea,
        });

        console.log(this.state);
    }
*/

handleSelectChange(e){
this.setState({
    selectValue:e.target.value,
});
console.log(this.state);

}
    render() {
        return (
            <div>
                <h1>Form tests</h1>
                <form>
                    <p>
                        <input name="value" type="text" value={this.state.value} onChange={this.handleChange} />
                    </p>
                    <p>
                        <textarea name="textArea" value={this.state.textArea} onChange={this.handleChange}></textarea>
                    </p>
                    <p>
                        <select value={this.state.selectValue} onChange={this.handleSelectChange}>
                            <option value="orange">Orange</option>
                            <option value="apple">Apple</option>
                            <option value="tomato">Tomato</option>
                            <option value="banana">Banana</option>
                        </select>
                    </p>
                </form>
            </div>
        );
    }
}

export default ControledComponent;