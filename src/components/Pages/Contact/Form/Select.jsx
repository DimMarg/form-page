import React from "react";

const Select = React.forwardRef(({ label, name, options = [], ...props }, ref) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} ref={ref} {...props}>
                <option value="" disabled>
                    -Λόγος Επικοινωνίας-
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
});

export default Select;
