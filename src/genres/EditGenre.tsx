import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import DisplayErrors from "../utils/DisplayErrors";
import Loading from "../utils/Loading";
import { urlGenres } from "../utils/utils";
import GenreForm from './GenreForm';
import genreCreationDTO, { genreDTO } from "./genres.model";

export default function EditGenre() {
    const { id }: any = useParams();
    const [genre, setGenre] = useState<genreCreationDTO>();
    const [errors, setErrors] = useState<string[]>([]);
    const history = useHistory();

    useEffect(() => {
        axios.get(`${urlGenres}/${id}`).then((response: AxiosResponse<genreCreationDTO>) => {
            setGenre(response.data);
        })
    }, [id]);

    async function edit(genreToEdit: genreCreationDTO) {
        try {
            await axios.put(`${urlGenres}/${id}`, genreToEdit);
            history.push('/genres');
        }
        catch (error: any) {
            if (error && error.response) {
                setErrors(error.response.data)
            }
        }
    }

    return (
        <>
            <h3>Edit Genre</h3>
            <DisplayErrors errors={errors} />
            {genre ? <GenreForm model={{ name: 'Action' }}
                onSubmit={
                    async value => {
                        await edit(value);
                    }
                }
            /> : <Loading />}
        </>
    )
}