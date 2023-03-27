import { actorMovieDTO } from '../actors/actors.model';
import { Typeahead } from 'react-bootstrap-typeahead';
import { ReactElement, useState } from 'react';



export default function TypeAheadActors(props: TypeAheadActorsProps) {

    const actors: actorMovieDTO[] = [{
        id: 1, name: 'Felipe', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tom_Holland_MTV_2018_%2801%29.jpg/220px-Tom_Holland_MTV_2018_%2801%29.jpg'
    },
    {
        id: 2, name: 'Gabriel', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg/220px-Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg'
    },
    {
        id: 3, name: 'Lucas', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg/220px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg'
    },];

    const selected: actorMovieDTO[] = [];

    const [draggedElement, setDraggedElement] = useState<actorMovieDTO | undefined>(undefined);

    function handleDragStart(actor: actorMovieDTO) {
        setDraggedElement(actor)
    }

    function handleDragOver(actor: actorMovieDTO) {
        if (!draggedElement) {
            return
        }

        if (actor.id !== draggedElement.id) {
            const draggedElementIndex = props.actors.findIndex(x => x.id === draggedElement.id);
            const actorIndex = props.actors.findIndex(x => x.id === actor.id);

            const actors = [...props.actors];
            actors[actorIndex] = draggedElement;
            actors[draggedElementIndex] = actor;
            props.onAdd(actors);
        }
    }

    return (
        <div className="mb-3">
            <label>{props.displayName}</label>
            <Typeahead
                id={"typeahead"}
                onChange={actors => {
                    if (props.actors.findIndex(x => x.id === actors[0].id) === -1)
                        props.onAdd([...props.actors, actors[0]])
                    console.log(actors)
                }}
                options={actors}
                labelKey="name"
                filterBy={['name']}
                placeholder="Write the name of the actor..."
                minLength={1}
                flip={true}
                selected={selected}
                renderMenuItemChildren={
                    actor => (
                        <>
                            {actor.name}
                        </>
                    )
                }
            />
            <ul className='list-group'>
                {props.actors.map(actor => <li key={actor.id}
                    draggable={true}
                    onDragStart={() => handleDragStart(actor)}
                    onDragOver={() => handleDragOver(actor)}
                    className="list-group-item list-group-item-action"
                >
                    {props.listUI(actor)}
                    <span className='badge badge-primary badge-pill pointer text-dark'
                        style={{ marginLeft: '0.5rem' }}
                        onClick={() => props.onRemove(actor)}
                    >X</span>
                </li>)}
            </ul>
        </div>
    )
}

interface TypeAheadActorsProps {
    displayName: string;
    actors: actorMovieDTO[];
    onAdd(actors: actorMovieDTO[]): void;
    onRemove(actor: actorMovieDTO): void;
    listUI(actor: actorMovieDTO): ReactElement;
}