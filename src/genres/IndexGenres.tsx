import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlGenres } from "../utils/utils";
import axios, { AxiosResponse } from "axios";
import { genreDTO } from "./genres.model";
import GenericList from "../utils/GenericList";
import Button from "../utils/Button";
import Pagination from "../utils/Pagination";
import RecordsPerPageSelect from "../utils/RecordsPerPageSelect";

export default function IndexGenres() {

    const [genres, setGenres] = useState<genreDTO[]>([]);
    const [totalAmoutOfPages, setTotalAmountOfPages] = useState<number>(0);
    const [recordsPerPage, setRecordsPerPage] = useState<number>(5);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        axios.get(urlGenres, {
            params: { page, recordsPerPage }
        }).then(
            (response: AxiosResponse<genreDTO[]>) => {
                const totalAmountOfRecords = parseInt(response.headers['totalamountofrecords'], 10);
                setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));
                setGenres(response.data)
            }
        )
    }, [page, recordsPerPage]); // [] to execute only once

    return (
        <>
            <h3>Genres</h3>
            <Link className="btn btn-primary" to="/genres/create">Create Genre</Link>
            <Pagination currentPage={page} totalAmoutOfPages={totalAmoutOfPages} onChange={newPage => setPage(newPage)} />
            <RecordsPerPageSelect onChange={amountOfRecords => {
                setPage(1);
                setRecordsPerPage(amountOfRecords);
            }} />
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
                                    <Link className="btn btn-success" to={`/genres/edit/${genre.id}`}>Edit</Link>
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