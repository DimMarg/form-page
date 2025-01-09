import React from "react";

const Input = React.forwardRef(({label, id, ...props}, ref) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} ref={ref} {...props} />
        </>
    );
});

export default Input;