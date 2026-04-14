import TextField from '@mui/material/TextField';

const CustomTextInput = ({
    label,
    name,
    value,
    onChange,
    type = "text",
    required = false,
}) => {
    return (
        <TextField
            fullWidth
            margin="dense"
            label={ label }
            name={ name }
            value={ value }
            type={ type }
            required={ required }
            onChange={ onChange }
            variant="outlined"
        />
    );
};

export default CustomTextInput;