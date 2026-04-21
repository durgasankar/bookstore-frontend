import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import BookItem from "./BookItem";
import { useMemo } from "react";

const BookList = () => {
    const { books, filter, search } = useSelector(state => state.books);

    const searchText = search?.toLowerCase();

    const filteredBooks = useMemo(() => books
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
        ), [books, filter, searchText]);

    if (filteredBooks.length === 0) {
        return <Typography variant="body2" color="text.secondary">No books found</Typography>;
    }

    return (
        <Grid container spacing={ 2 } mt={ 1 }>
            { filteredBooks.map(book => (
                <Grid key={ book.id }>
                    <BookItem book={ book } />
                </Grid>
            )) }
        </Grid>
    );
};

export default BookList;