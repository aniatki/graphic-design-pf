import { listContent } from '../projects/costcutter/listContent.js'

export default function List() {
    return (
        <ol>
            {listContent.map((elem, index) => (
                <li key={index}>{elem}</li>
            ))}
        </ol>
    )
}