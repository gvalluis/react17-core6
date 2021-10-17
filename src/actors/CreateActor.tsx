import ActorForm from '../actors/ActorForm';

export default function CreateActor() {
    return (
        <>
            <h3>Create Actor</h3>
            <ActorForm model={{name: 'Tom Holland', dateOfBirth: new Date('1993-04-08T00:00:00')}}
             onSubmit={(values) => console.log(values)}/>
        </>
    )
}