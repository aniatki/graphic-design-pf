import { typographyList } from '@/assets/projects/costcutter/typographyList'

export default function TypographyList() {
    return (
        <div className="typography-list">
            {typographyList.map((typeface, index) => (
                <p
                    key={index}
                    style={{
                        opacity: typeface.opacity,
                        fontWeight: typeface.weight,
                        filter: `blur(${typeface.blur}px)`,
                        fontStyle: `${typeface.fontStyle}`,
                        marginBlock: "-1rem",
                    }}
                >
                    {typeface.typeface}
                </p>
            ))}
        </div>
    )
}