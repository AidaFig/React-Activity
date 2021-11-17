import bands from "../data/database" ;

export const CardBands = () => {
    return (
        <>
        {bands.map(band =>
            <div key={band.id}>
                <h2>{band.nome}</h2>
                <p>{band.descrição}</p>
                <img src={band.imagem} alt={band.nome}/>
            </div>
        )}
        </>
    )
}