import MovieTheaterForm from './MovieTheaterForm';


export default function CreateMovieTheater() {
    return (
        <>
            <h3>Create Movie Theater</h3>
            <MovieTheaterForm model={{name: 'Sambil'}} 
            onSubmit={values => console.log(values)} />
        </>
    )
}