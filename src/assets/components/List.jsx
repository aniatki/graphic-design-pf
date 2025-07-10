import { listContent } from '@/assets/projects/costcutter/listContent'

export default function List() {
    return (
        <ol>
            {listContent.map((elem, index) => (
                <li key={index}>{elem}</li>
            ))}
        </ol>
    )
}