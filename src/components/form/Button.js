import React from "react";

export default function Button(props) {

    return (
        <div>
            <button
            id={props.id}
            type={props.type}
            disabled={props.disabled}>
            {props.text}
            </button>
        </div>
    );
}