import MovieTheaterForm from './MovieTheaterForm';

export default function EditMovieTheater() {
    return (
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm model={{
                name: 'Chez Moi',
                latitude: -19.917307270806898,
                longitude: -43.892526626586914
            }}
                onSubmit={values => console.log(values)} />
        </>
    )
}