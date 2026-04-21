import { useDispatch } from "react-redux";
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Chip,
    Stack
} from "@mui/material";
import { deleteBook, toggleReadStatus } from "../../reducers/booksSlice";

const BookItem = ({ book }) => {
    const dispatch = useDispatch();

    return (
        <Card
            variant="outlined"
            sx={ {
                height: "100%",
                borderLeft: book.read ? "4px solid #22c55e" : "4px solid #3b82f6"
            } }
        >
            <CardContent>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={ 1 }
                >
                    <Typography variant="h6">
                        { book.title }
                    </Typography>

                    <Chip
                        label={ book.read ? "Read" : "Unread" }
                        size="small"
                        color={ book.read ? "success" : "primary" }
                    />
                </Stack>

                <Typography
                    variant="subtitle2"
                    color="text.secondary"
                >
                    by { book.author }
                </Typography>

                <Typography
                    variant="body2"
                    mt={ 1 }
                >
                    { book.description }
                </Typography>
            </CardContent>

            <CardActions sx={ { justifyContent: "space-between", px: 2 } }>
                <Button
                    size="small"
                    variant="outlined"
                    onClick={ () => dispatch(toggleReadStatus(book.id)) }
                >
                    Toggle Read
                </Button>
                <Button
                    size="small"
                    color="error"
                    onClick={ () => dispatch(deleteBook(book.id)) }
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default BookItem;