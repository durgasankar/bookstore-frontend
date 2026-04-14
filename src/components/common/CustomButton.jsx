import Button from "@mui/material/Button";

const CustomButton = ({
    children,
    type = "button",
    fullWidth = false,
    onClick,
    disabled = false,
}) => {
    return (
        <Button
            type={ type }
            fullWidth={ fullWidth }
            onClick={ onClick }
            disabled={ disabled }
            variant="contained"
            // style={ {
            //     fontSize: '1rem',
            //     fontWeight: '600',
            //     borderRadius: '4px',
            //     backgroundColor: '#555555'
            // } }
            sx={ {
                mt: 2,
                py: 1.2,
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