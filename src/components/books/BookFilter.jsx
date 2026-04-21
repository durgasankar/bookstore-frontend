import { memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonGroup, Chip, Stack } from "@mui/material";
import { setFilter } from "../../reducers/booksSlice";
import CustomButton from "../common/CustomButton";

const BookFilter = () => {
    const dispatch = useDispatch();
    const { books, filter } = useSelector(state => state.books);

    const { totalCount, filteredCount } = useMemo(() => {
        const total = books.length;
        const filtered =
            filter === "all"
                ? total
                : books.filter(book =>
                    filter === "read" ? book.read : !book.read
                ).length;
        return {
            totalCount: total,
            filteredCount: filtered
        };
    }, [books, filter]);

    return (
        <div style={ { display: "flex", alignItems: 'center', gap: 12 } } >
            <Chip
                label={ `Showing ${filteredCount} of ${totalCount}` }
                color="primary"
                variant="outlined"
                size="small"
                id='rect-border'
            />
            <ButtonGroup size="small">
                <CustomButton
                    variant={ filter === "all" ? "contained" : "outlined" }
                    onClick={ () => dispatch(setFilter("all")) }
                >
                    All
                </CustomButton>
                <CustomButton
                    variant={ filter === "read" ? "contained" : "outlined" }
                    onClick={ () => dispatch(setFilter("read")) }
                >
                    Read
                </CustomButton>
                <CustomButton
                    variant={ filter === "unread" ? "contained" : "outlined" }
                    onClick={ () => dispatch(setFilter("unread")) }
                >
                    Unread
                </CustomButton>
            </ButtonGroup>
        </div>
    );
};

export default memo(BookFilter);