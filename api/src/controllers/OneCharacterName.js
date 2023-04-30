const axios = require("axios");
require("dotenv").config();
const { URL_BASE, KEY } = process.env;


const OneCharacterName = async (req, res) => {

    const { name } = req.query;
    try {

        const { data } = await axios.get(`${URL_BASE}/character?key=${KEY}`);
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

        const AllNames = CleanCharacter.filter((char) => char.name.toLowerCase().includes(name.toLowerCase()));
        res.status(200).json(AllNames);

    } catch (error) {
        res.status(400).json({ error: error.messege });
    }

}

module.exports = OneCharacterName;