import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { addBook } from "../../reducers/booksSlice";
import CustomTextInput from "../common/CustomTextInput";
import CustomButton from "../common/CustomButton";

const AddBook = () => {
    const dispatch = useDispatch();

    const [form, setForm] = useState({
        title: "",
        author: "",
        description: ""
    });

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(form)
        dispatch(addBook(form));
        setForm({ title: "", author: "", description: "" });
    };

    return (
        <Paper elevation={ 3 } sx={ { p: 2, maxWidth: 420 } }>
            <Box
                component="form"
                onSubmit={ submitHandler }
                display="flex"
                flexDirection="column"
            >
                <CustomTextInput
                    label="Title"
                    name="title"
                    value={ form.title }
                    size="small"
                    required
                    onChange={ (e) =>
                        setForm({ ...form, title: e.target.value })
                    }
                />

                <CustomTextInput
                    label="Author"
                    name="author"
                    value={ form.author }
                    required
                    size='small'
                    onChange={ (e) =>
                        setForm({ ...form, author: e.target.value })
                    }
                />

                <CustomTextInput
                    label="Description"
                    name="description"
                    size='small'
                    value={ form.description }
                    onChange={ (e) =>
                        setForm({ ...form, description: e.target.value })
                    }
                />

                <CustomButton
                    type="submit"
                    fullWidth
                    size='small'
                    sx={ { mt: 1 } }
                >
                    Add Book
                </CustomButton>
            </Box>
        </Paper>
    );
};

export default AddBook;