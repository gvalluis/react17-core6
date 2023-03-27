import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from 'yup';
import TextField from '../forms/TextField'
import genreCreationDTO from './genres.model'

export default function GenreForm(props: genreFromProps) {
    return (
        <>
            <Formik initialValues={props.model}
                onSubmit={props.onSubmit}
                validationSchema={Yup.object({
                    name: Yup.string().required('This field is required')
                    .max(50, 'Max lenght is 50 characters')
                    .firstLetterUppercase()
                })}
            >
                {(formikProps) => (
                    <Form>
                        <TextField field="name" displayName="Name" />
                        <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
                        <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                    </Form>
                )}

            </Formik>
        </>
    )
}

interface genreFromProps{
    model: genreCreationDTO;
    onSubmit(values: genreCreationDTO, action: FormikHelpers<genreCreationDTO>): void;
}