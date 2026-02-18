/**
 *  SOURCE_CODE_VERSION: 1.0.0
 *  PROGRAMMER/DEVELOPER: NELSON CHIDI (NELMATRIX)
 *  DATE_TIME: FEB 12, 2026; 11:38AM
 *  REPOSITORY: https://github.com/NelMatrix743/movie_watchlist_api.git
 */

import { print } from "./utils.js";
import express from "express";
import movieRoutes from "./routes/movieRoutes.js";

const app = express();
const PORT = 7000;

// --- API Routes ---
app.use("/movies", movieRoutes);


app.listen(PORT, () => {
    print(`Server started!\nSystem running on PORT: ${PORT}`);
});

// eosc