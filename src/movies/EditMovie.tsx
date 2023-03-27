import { actorMovieDTO } from "../actors/actors.model";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movie-theaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function EditMovie() {

    const nonSelectedGenres: genreDTO[] = [{ id: 2, name: 'Drama' }]
    const selectedGenres: genreDTO[] = [{ id: 1, name: 'Comedy' }]
    const nonSelectedMovieTheaters: movieTheaterDTO[] = [{ id: 2, name: 'Theater 1' }]
    const selectedMovieTheaters: movieTheaterDTO[] = [{ id: 1, name: 'Theater 2' }]

    const selectedActors: actorMovieDTO[] = [{
        id: 1, name: 'Felipe', character: 'Geralt', picture: 'https://www.aquipl.com.br/wp-content/uploads/2021/10/www.aquipl.com.br-com-raizes-em-dr-lund-luiza-e-uma-das-poderosas-do-agro-brasileiro-luiza-dantas-santiago-768x423.jpg'
    }]

    return (
        <>
            <h3>Edit Movie</h3>
            <MovieForm model={{
                title: 'Toy Story',
                inTheaters: true,
                trailer: 'url',
                releaseDate: new Date('2022-02-03T00:00:00'),
            }}
                onSubmit={values => console.log(values)}
                selectedGenres={selectedGenres}
                nonSelectedGenres={nonSelectedGenres}
                selectedMovieTheaters={selectedMovieTheaters}
                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedActors={selectedActors} />
        </>
    )
}