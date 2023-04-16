import React from "react";
import {CircularProgress} from '@mui/material';

function Loading() {

    return (
        <>
            <img className="App-logo" src="logo.png" alt="sad" />
            <CircularProgress color="success" />
        </>
    )
}

export default Loading;