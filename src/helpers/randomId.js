const randomCharacter = (longitud) => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = '';

    for (let i = 0; i < longitud; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres.charAt(indice);
    }

    return resultado;
}

export const RANDOM_ID = randomCharacter(5)