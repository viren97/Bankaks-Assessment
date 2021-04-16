import { CircularProgress } from "@material-ui/core";
import { useState, useEffect } from "react";
import { getData } from "./HttpService";
import Songs from "./Songs";

const Layout = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const isDev = process.env.NODE_ENV === "development";
        const url = isDev ? `http://localhost:5000/api/songs` : "/api/songs";
        setLoading(true);
        getData(url)
            .then((res) => {
                res = res?.map((r) => {
                    return {
                        ...r,
                        songReleaseDate: new Date(r.songReleaseDate).toISOString(),
                    };
                });
                setData(res);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.error(err);
            });
    }, []);

    return !loading ? <Songs songs={data} /> : <CircularProgress />;
};

export default Layout;
