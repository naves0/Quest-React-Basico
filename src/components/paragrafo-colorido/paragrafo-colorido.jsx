import React from "react";

const Paragrafo = ({children, cor}) => {
    return (
        <p style={{color: cor, textTransform: "uppercase"}}>{children}</p>
    );
};

Paragrafo.defaultProps = {cor: "red"};

export default Paragrafo;