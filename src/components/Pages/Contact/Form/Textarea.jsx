import React from "react";

const Textarea = React.forwardRef(({label, id, ...props}, ref) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} ref={ref} {...props} />
        </>
    );
});

export default Textarea;