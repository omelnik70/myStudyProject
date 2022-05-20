import React from "react";

const Button = (props) => {

    return (
        <div>
            <button {...props}>
                {props.text}
            </button>
        </div>
    );
}

export default Button;