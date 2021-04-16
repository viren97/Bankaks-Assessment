import { useMemo } from "react";
import { COLUMNS } from "./COLUMN.js";
import { usePagination, useSortBy, useTable } from "react-table";
import { CustomTable } from "./Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Songs = ({ songs }) => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => songs, [songs]);
    const tableInstance = useTable({ columns, data }, useSortBy, usePagination);

    return (
        <div className="px-5 pt-4">
            <CustomTable tableInstance={tableInstance} />
        </div>
    );
};

export default Songs;
