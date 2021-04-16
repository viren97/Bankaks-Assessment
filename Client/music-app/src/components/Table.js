import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./Styles";
import { TableHeader } from "./Header";
import Pagination from "@material-ui/lab/Pagination";

export const CustomTable = ({ tableInstance }) => {
    // @ts-ignore
    const { getTableProps, getTableBodyProps, prepareRow, page, gotoPage, state, pageCount } = tableInstance;
    const { pageIndex } = state;
    // @ts-ignore
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={`row my-3 ${classes.root}`}>
                {page && page.length > 0 ? (
                    <Paper className={classes.paper}>
                        <TableContainer className={classes.container}>
                            <Table {...getTableProps()} className={classes.table} aria-labelledby="tableTitle" size={"medium"} aria-label="enhanced table" stickyHeader>
                                <TableHeader tableInstance={tableInstance} />
                                <TableBody {...getTableBodyProps()}>
                                    {page.map((row) => {
                                        prepareRow(row);
                                        return (
                                            <TableRow {...row.getRowProps()} hover role="checkbox" tabIndex={-1}>
                                                {row.cells.map((cell) => (
                                                    <TableCell component="th" {...cell.getCellProps()} scope="row" padding="default" align="left">
                                                        {cell.render("Cell")}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Pagination count={pageCount} variant="outlined" shape="rounded" onChange={(event, value) => gotoPage(value - 1)} page={pageIndex + 1} />
                        </Grid>
                    </Paper>
                ) : (
                    <div className="font-size-14">No songs available.</div>
                )}
            </div>
        </React.Fragment>
    );
};
