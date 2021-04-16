import { useState, useEffect } from "react";
import { getData } from "./HttpService";
import React from "react";
import { Theme, createStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        details: {
            display: "flex",
            flexDirection: "column",
        },
        content: {
            flex: "1 0 auto",
        },
        cover: {
            width: 151,
        },
        controls: {
            display: "flex",
            alignItems: "center",
            paddingLeft: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        playIcon: {
            height: 38,
            width: 38,
        },
    })
);

const SongDetails = (props) => {
    const [song, setSong] = useState({});
    const classes = useStyles();
    const theme = useTheme();

    useEffect(() => {
        const isDev = process.env.NODE_ENV === "development";
        const url = isDev ? `http://localhost:5000/api/songs/${props.match.params.name}` : `/api/songs/${props.match.params.name}`;
        console.log(url);
        getData(url)
            .then((res) => setSong(res))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="m-5">
            <Card className={classes.root} xs={4}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {song?.song}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {song?.artist}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {song.playCount} +
                        </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                        <IconButton aria-label="previous">{theme.direction === "rtl" ? <SkipNextIcon /> : <SkipPreviousIcon />}</IconButton>
                        <IconButton aria-label="play/pause">
                            <PlayArrowIcon className={classes.playIcon} />
                        </IconButton>
                        <IconButton aria-label="next">{theme.direction === "rtl" ? <SkipPreviousIcon /> : <SkipNextIcon />}</IconButton>
                    </div>
                </div>
                <CardMedia className={classes.cover} />
            </Card>
        </div>
    );
};

export default SongDetails;
