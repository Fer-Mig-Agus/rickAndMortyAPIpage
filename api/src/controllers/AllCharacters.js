const axios = require("axios");
require("dotenv").config();
const { URL_BASE, KEY } = process.env;




const AllCharacters = async (req, res) => {
    try {


        const { data } = await axios.get(`${URL_BASE}/character?key=${KEY}`)
        console.log(data)
        // res.status(200).json(data);
        // let charactersList = [];
        // let totalPages;


        const CleanCharacter = data.info.results.map((char) => {
            return {
                id: char.id,
                name: char.name,
                status: char.status,
                species: char.species,
                gender: char.gender,
                origin: char.origin.name,
                image: char.image,
            }
        })

        res.status(200).json(CleanCharacter);


    } catch (error) {
        res.status(400).json({ error: error.messege });
    }


}


module.exports = AllCharacters;


//axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)


//important: Esto es para probar si puedo traer todo de una sola vez

        // // Primero, obtenemos la información de la primera página para
        // // determinar el número total de páginas disponibles
        // const { data: firstPageData } = await axios.get('https://rickandmortyapi.com/api/character/');

        // totalPages = Math.ceil(quantity / firstPageData.info.results.length);

        // // Luego, recorremos todas las páginas disponibles y agregamos cada personaje al array
        // for (let i = 1; i <= totalPages; i++) {
        //     const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`);
        //     data.results.slice(0, quantity - charactersList.length).map((char) => charactersList.push(char));
        //     if (charactersList.length >= quantity) break;
        // }
