export const consultarBDD = async (ruta) => {
    const libros = await fetch(ruta)
    const datos = await libros.json()
    return datos
}