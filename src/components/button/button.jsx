import React from "react";

const mostrarLabel = (label) => {
    alert(`A label desse botão é ${label}`);
}

class Button extends React.Component {
    render() {
        return (
            <button onClick={() => mostrarLabel(this.props.label)}>{this.props.label}</button>
        )
    };
};

Button.defaultProps = {
    label: "Clique aqui"
}

export default Button;