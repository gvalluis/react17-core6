import ActorForm from "./ActorForm";

export default function EditActor() {
    return (
        <>
            <h3>Edit Actor</h3>
            <ActorForm model={{name: 'Tom Holland', 
                dateOfBirth: new Date('1993-04-08T00:00:00'),
                biography: `# Something
                            This person was born in **Brèsil**`,
                pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Arnold_Schwarzenegger_-_2019_%2833730956438%29_%28cropped%29.jpg/200px-Arnold_Schwarzenegger_-_2019_%2833730956438%29_%28cropped%29.jpg'
             }}
             onSubmit={values => console.log(values)}
                />    
        </>
    )
}