import { genreDTO } from '../genres/genres.model';
import MovieForm from './MovieForm';

export default function CreateMovie() {

    const nonSelectedGenres: genreDTO[] = [{ id: 1, name: 'Comedy' }, { id: 2, name: 'Drama' }];
    const nonSelectedMovieTheaters: genreDTO[] = [{ id: 1, name: 'Theater 1' }, { id: 2, name: 'Theater 2' }, { id: 3, name: 'Theater 3' }];

    return (
        <>
            <h3>Create a Movie</h3>
            <MovieForm
                model={{ title: '', inTheaters: false, trailer: '' }}
                onSubmit={values => console.log(values)}
                selectedGenres={[]}
                nonSelectedGenres={nonSelectedGenres}
                selectedMovieTheaters={[]}
                nonSelectedMovieTheaters={nonSelectedMovieTheaters} 
                selectedActors={[]} />
        </>
    )
}