export default function List({ listContent }) {
    return (
        <ol>
            {listContent.map((elem, index) => (
                <li key={index}>{elem}</li>
            ))}
        </ol>
    )
}