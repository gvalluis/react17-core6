import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import TextField from '../forms/TextField';
import * as Yup from 'yup';
import movieTheaterCreationDTO from "./movieTheater.model";
import Button from '../utils/Button';
import { Link } from "react-router-dom";

export default function MovieTheaterForm(props: movieTheaterForm) {
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required('This field is required').firstLetterUppercase()
            })}>
            {(formikProps) => (
                <Form>
                    <TextField displayName="Name" field="name" />

                    <Button disabled={formikProps.isSubmitting} type="submit">Save Changes</Button>
                    <Link className="btn btn-secondary" to="/movietheaters">Cancel</Link>
                </Form>
            )}
        </Formik>

    )
}

interface movieTheaterForm {
    model: movieTheaterCreationDTO;
    onSubmit(values: movieTheaterCreationDTO, actions: FormikHelpers<movieTheaterCreationDTO>): void;
}