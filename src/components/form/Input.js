import React from "react";

export default function Input(props) {

    return (
        <div>
            <input 
            id = {props.id}
            onChange = {props.onChange}
            onBlur = {props.onBlur}
            onMouseEnter = {props.onMouseEnter}
            onMouseLeave = {props.onMouseLeave}
            type = {props.type}
            placeholder = {props.placeholder}
            size = {props.size} />
        </div>
    );
}