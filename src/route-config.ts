import LandingPage from "./movies/LandingPage";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";

import IndexGenres from "./genres/IndexGenres";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";

import IndexActors from "./actors/IndexActors";
import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";

import IndexMovieTheaters from "./movie-theaters/IndexMovieTheaters";
import CreateMovieTheater from "./movie-theaters/CreateMovieTheater";
import EditMovieTheater from "./movie-theaters/EditMovieTheater";

import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";

const routes = [
    {path: '/genres', component: IndexGenres, exact: true},
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit/:id(\\d+)', component: EditGenre}, //:id(\\d+) = only numbers

    {path: '/actors', component: IndexActors, exact: true},
    {path: '/actors/create', component: CreateActor},
    {path: '/actors/edit/:id(\\d+)', component: EditActor},

    {path: '/movie-theaters', component: IndexMovieTheaters, exact: true},
    {path: '/movie-theaters/create', component: CreateMovieTheater},
    {path: '/movie-theaters/edit/:id(\\d+)', component: EditMovieTheater},

    {path: '/movies/create', component: CreateMovie, exact: true},
    {path: '/movies/edit/:id(\\d+)', component: EditMovie},
    {path: '/movies/filter', component: FilterMovies},
    
    {path: '/', component: LandingPage, exact: true},
    {path: '*', component: RedirectToLandingPage} //Redirect every 404 to LandingPage
];

export default routes;