import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { urlGenres } from '../utils/utils';
import GenreForm from './GenreForm';
import genreCreationDTO from './genres.model';

export default function CreateGenre() {

    async function create(genre: genreCreationDTO) {
        const history = useHistory();
        try {
            await axios.post(urlGenres, genre);
            history.push('/genres')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h3>Create Genre</h3>
            <GenreForm model={{ name: '' }}
                onSubmit={
                    async value => {
                        await create(value)
                    }
                }
            />
        </>
    )
}
