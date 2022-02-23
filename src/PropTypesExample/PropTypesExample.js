import React from "react";
import PropTypes from "prop-types";

class PropTypesExample extends React.Component {
    render() {
        return (
            <div>
                <h2>This is prop types test, name: {this.props.name}, digit {this.props.age}</h2>
                <input />
            </div>
        );
    }
}

PropTypesExample.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
}
export default PropTypesExample;