import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

const CustomRadioButton = ({
    label,
    name,
    value,
    onChange,
    options = [],
}) => {
    return (
        <FormControl margin="normal">
            <FormLabel>{ label }</FormLabel>
            <RadioGroup
                row
                name={ name }
                value={ value }
                onChange={ onChange }
            >
                { options.map((option) => (
                    <FormControlLabel
                        key={ option.value }
                        value={ option.value }
                        control={ <Radio /> }
                        label={ option.label }
                    />
                )) }
            </RadioGroup>
        </FormControl>
    );
};

export default CustomRadioButton;