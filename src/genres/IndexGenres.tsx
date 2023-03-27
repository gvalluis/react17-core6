import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlGenres } from "../utils/utils";
import axios, { AxiosResponse } from "axios";
import { genreDTO } from "./genres.model";
import GenericList from "../utils/GenericList";
import Button from "../utils/Button";

export default function IndexGenres() {

    const [genres, setGenres] = useState<genreDTO[]>([]);

    useEffect(() => {
        axios.get(urlGenres).then(
            (response: AxiosResponse<genreDTO[]>) => {
                setGenres(response.data)
            }
        )
    }, []); // [] to execute only once

    return (
        <>
            <h3>Genres</h3>
            <Link className="btn btn-primary" to="/genres/create">Create Genre</Link>

            <GenericList list={genres}>
                <table className="table table-striped">
                    <thead>
                        <th>Name</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {genres?.map(genre =>
                            <tr key={genre.id}>
                                <td>
                                    {genre.name}
                                </td>
                                <td>
                                    <Link className="btn btn-success" to={`/genres/${genre.id}`}>Edit</Link>
                                    <Button className="btn btn-danger">Delete</Button>
                                </td>
                            </tr>

                        )}
                    </tbody>

                </table>
            </GenericList>
        </>
    )
}