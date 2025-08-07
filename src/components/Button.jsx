const Button = ({
    label,
    backgroundColor = null,
    textColor = null,
    borderColor = null,
    fullWidth = false,
    style = {},
}) => {
    return (
        <button
            className={`button ${style ? style : ""}
            ${
                backgroundColor
                    ? `${backgroundColor} ${textColor} ${borderColor}`
                    : "bg-coral-red text-white border-coral-red"
            } ${fullWidth && "w-full"}`}>
            {label}
        </button>
    );
};

export default Button;
