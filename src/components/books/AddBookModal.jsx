import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { addBook } from "../../reducers/booksSlice";
import CustomTextInput from "../common/CustomTextInput";
import CustomButton from "../common/CustomButton";

const AddBookModal = ({ open, onClose }) => {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        title: "",
        author: "",
        description: ""
    });

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addBook(form));
        setForm({ title: "", author: "", description: "" });
        onClose();
    };

    return (
        <Dialog open={ open } onClose={ onClose } fullWidth maxWidth="sm">
            <DialogTitle>Add New Book</DialogTitle>
            <DialogContent dividers>
                <Paper elevation={ 0 }>
                    <Box
                        component="form"
                        onSubmit={ submitHandler }
                        display="flex"
                        flexDirection="column"
                    >
                        <CustomTextInput
                            label="Title"
                            value={ form.title }
                            required
                            size="small"
                            onChange={ (e) =>
                                setForm({ ...form, title: e.target.value })
                            }
                        />
                        <CustomTextInput
                            label="Author"
                            value={ form.author }
                            required
                            size="small"
                            onChange={ (e) =>
                                setForm({ ...form, author: e.target.value })
                            }
                        />
                        <CustomTextInput
                            label="Description"
                            value={ form.description }
                            size="small"
                            onChange={ (e) =>
                                setForm({ ...form, description: e.target.value })
                            }
                        />
                    </Box>
                </Paper>
            </DialogContent>
            <DialogActions>
                <CustomButton
                    variant="outlined"
                    onClick={ onClose }
                >
                    Cancel
                </CustomButton>
                <CustomButton
                    type="submit"
                    onClick={ submitHandler }
                >
                    Add Book
                </CustomButton>
            </DialogActions>
        </Dialog>
    );
};

export default AddBookModal;