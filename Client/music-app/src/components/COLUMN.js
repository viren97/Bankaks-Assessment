import { Link } from "react-router-dom";

export const COLUMNS = [
    {
        accessor: "song",
        Header: "Song",
        Cell: ({ row }) => <Link to={{ pathname: `/songs/${row.original.song}` }}>{row.original.song}</Link>,
        width: 300,
    },
    {
        accessor: "artist",
        Header: "Artist",
        width: 200,
    },
    {
        accessor: "songReleaseDate",
        Header: "Song Release Date",
        Cell: ({ value }) => <span>{new Date(value).toDateString()}</span>,
        width: 200,
    },
    {
        accessor: "playCount",
        Header: "Play Count",
    },
    {
        accessor: "metricA",
        Header: "Metric A",
    },
    {
        accessor: "metricB",
        Header: "Metric B",
    },
    {
        accessor: "metricC",
        Header: "Metric C",
    },
    {
        accessor: "metricD",
        Header: "Metric D",
    },
    {
        accessor: "metricE",
        Header: "Metric E",
    },
    {
        accessor: "metricF",
        Header: "Metric F",
    },
    {
        accessor: "metricG",
        Header: "Metric G",
    },
    {
        accessor: "metricH",
        Header: "Metric H",
    },
    {
        accessor: "metricI",
        Header: "Metric I",
    },
    {
        accessor: "metricJ",
        Header: "Metric J",
    },
    {
        accessor: "metricK",
        Header: "Metric K",
    },
    {
        accessor: "metricL",
        Header: "Metric L",
    },
    {
        accessor: "metricM",
        Header: "Metric M",
    },
    {
        accessor: "metricN",
        Header: "Metric N",
    },
    {
        accessor: "metricO",
        Header: "Metric O",
    },
    {
        accessor: "metricP",
        Header: "Metric P",
    },
];
