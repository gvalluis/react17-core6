import './MultipleSelector.css'



export default function MultipleSelector(props: MultipleSelectorProps) {

    function select(item: multipleSelectorModel) {
        const selected = [...props.selected, item];
        const nonSelected = props.nonSelected.filter(value => value !== item);
        props.onChange(selected, nonSelected);
    }

    function deSelect(item: multipleSelectorModel) {
        const nonSelected = [...props.nonSelected, item];
        const selected = props.selected.filter(value => value !== item);
        props.onChange(selected, nonSelected);
    }

    function selectAll() {
        const selected = [...props.selected, ...props.nonSelected];
        const nonSelected: multipleSelectorModel[] = [];
        props.onChange(selected, nonSelected);
    }

    function deselectAll() {
        const nonSelected = [...props.nonSelected, ...props.selected];
        const selected: multipleSelectorModel[] = [];
        props.onChange(selected, nonSelected);
    }

    return (
        <div className="mb-3">
            <div className="multiple-selector">
                <label>{props.displayName}</label>
                <ul>
                    {
                        props.nonSelected.map(item =>
                            <li key={item.key} onClick={() => select(item)}>{item.value}</li>
                        )
                    }
                </ul>
                <div className="multiple-selector-buttons">
                    <button type="button" onClick={selectAll}>{'>>'}</button>
                    <button type="button" onClick={deselectAll}>{'<<'}</button>
                </div>
                <ul>
                    {
                        props.selected.map(item =>
                            <li key={item.key} onClick={() => deSelect(item)}>{item.value}</li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}


interface MultipleSelectorProps {
    displayName: string;
    selected: Array<multipleSelectorModel>;
    nonSelected: Array<multipleSelectorModel>;
    onChange(selected: multipleSelectorModel[], nonSelected: multipleSelectorModel[]): any;
}

export interface multipleSelectorModel {
    key: number;
    value: string;
}