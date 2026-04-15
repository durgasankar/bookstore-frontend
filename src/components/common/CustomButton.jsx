import Button from "@mui/material/Button";

const CustomButton = ({
    children,
    type = "button",
    fullWidth = false,
    onClick,
    disabled = false,
    size = 'small',
    className = ''
}) => {
    return (
        <Button
            className={ className }
            type={ type }
            fullWidth={ fullWidth }
            onClick={ onClick }
            disabled={ disabled }
            variant="contained"
            size={ size }
            sx={ {
                // mt: 2,
                // py: 0.5,
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 600,
                borderRadius: "8px",
                backgroundColor: "#666666",
                "&:hover": {
                    backgroundColor: "#444444",
                },
            } }
        >
            { children }
        </Button>
    );
};

export default CustomButton;