import { useDispatch } from "react-redux";
import Stack from "@mui/material/Stack";
import { setFilter } from "../../reducers/booksSlice";
import CustomButton from "../common/CustomButton";

const BookFilter = () => {
    const dispatch = useDispatch();

    return (
        <Stack direction="row" spacing={ 1 }>
            <CustomButton variant='outlined' onClick={ () => dispatch(setFilter("all")) }>
                All
            </CustomButton>
            <CustomButton variant='outlined' onClick={ () => dispatch(setFilter("read")) }>
                Read
            </CustomButton>
            <CustomButton variant='text' onClick={ () => dispatch(setFilter("unread")) }>
                Unread
            </CustomButton>
        </Stack>
    );
};

export default BookFilter;