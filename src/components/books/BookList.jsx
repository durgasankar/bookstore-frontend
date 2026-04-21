import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import BookItem from "./BookItem";

const BookList = () => {
    const { books, filter, search } = useSelector(state => state.books);

    const searchText = search.toLowerCase();

    const filteredBooks = books
        .filter(book =>
            book.title.toLowerCase().includes(searchText) ||
            book.author.toLowerCase().includes(searchText)
        )
        .filter(book =>
            filter === "all"
                ? true
                : filter === "read"
                    ? book.read
                    : !book.read
        );

    if (filteredBooks.length === 0) {
        return <Typography>No books found</Typography>;
    }

    return (
        <Grid container spacing={ 2 } mt={ 1 }>
            { filteredBooks.map(book => (
                <Grid item xs={ 12 } sm={ 6 } md={ 4 } key={ book.id }>
                    <BookItem book={ book } />
                </Grid>
            )) }
        </Grid>
    );
};

export default BookList;