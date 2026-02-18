/**
 *  SOURCE_CODE_VERSION: 1.0.0
 *  PROGRAMMER/DEVELOPER: NELSON CHIDI (NELMATRIX)
 *  DATE_TIME: FEB 18, 2026; 08:20AM
 *  REPOSITORY: https://github.com/NelMatrix743/movie_watchlist_api.git
 */

import express from "express";


const movieRoutes = express();


movieRoutes.get('/', (req, res) => {
    res.json({message: "Movie Endpoint"});
});


export default movieRoutes;