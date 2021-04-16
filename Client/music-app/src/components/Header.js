import { useStyles } from "./Styles";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { TableSortLabel } from "@material-ui/core";
import * as React from "react";

export const TableHeader = (props) => {
    const classes = useStyles();
    // @ts-ignore
    const { headerGroups } = props.tableInstance;

    return (
        <TableHead>
            {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => {
                        return (
                            <TableCell {...column.getHeaderProps()} align={"left"} padding={"default"} sortDirection={column.isSortedDesc ? "desc" : "asc"} width={column.width}>
                                {
                                    <TableSortLabel
                                        {...column.getSortByToggleProps()}
                                        active={column.isSorted}
                                        direction={column.isSortedDesc ? "desc" : "asc"}
                                        className={classes.tableSortLabel}
                                        hideSortIcon={!column.isSorted}
                                    >
                                        {column.render("Header")}
                                    </TableSortLabel>
                                }
                            </TableCell>
                        );
                    })}
                </TableRow>
            ))}
        </TableHead>
    );
};
