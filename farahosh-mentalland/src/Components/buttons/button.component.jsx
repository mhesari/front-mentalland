
import "./button.styles.css";

const BUTTON_TYPE_CLASSES = {
    navigationButton: "navigation-button"
}

const Button = ({ children, buttonType, ...otherProps }) => {

    return (
        <button
            className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
            {...otherProps}
        >
            {children}
        </button>

    )
}

export default Button;