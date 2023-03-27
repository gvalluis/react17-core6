





export default function DisplayErrors(props: DisplayErrorsProps) {
    const style = { color: 'red' }
    console.log(props);
    return (
        <>
            {
                props.errors?.length ? <ul style={style}>
                    {props.errors.map((error, index) => <li key={index}>{error}</li>)}
                </ul> : null
            }
        </>
    )
}


interface DisplayErrorsProps {
    errors?: string[];
}