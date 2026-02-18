/**
 *  SOURCE_CODE_VERSION: 1.0.0
 *  PROGRAMMER/DEVELOPER: NELSON CHIDI (NELMATRIX)
 *  DATE_TIME: FEB 12, 2026; 11:38AM
 *  REPOSITORY: https://github.com/NelMatrix743/movie_watchlist_api.git
 */

const express = require("express");
const { print } = require("./utils");


// --- API Endpoints ---



const app = express();
const PORT = 7000;

app.listen(PORT, () => {
    print(`Server started!\nSystem running on PORT: ${PORT}`);
});

// eosc