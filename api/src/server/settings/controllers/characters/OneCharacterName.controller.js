const axios = require("axios");
require("dotenv").config();
const { URL_BASE } = process.env;


const OneCharacterName = async (req, res) => {

    const { name } = req.query;
    try {


        let url = URL_BASE;
        let allCharacters = []

        while (url) {
            let response = await axios.get(url);
            allCharacters = allCharacters.concat(
                response.data.results.map((char) => {
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
            );

            url = response.data.info.next;
            if (allCharacters.length >= 100 || !url) {
                break;
            }
        }

        const AllNames = allCharacters.filter((char) => char.name.toLowerCase().includes(name.toLowerCase()));
        res.status(200).json(AllNames);

    } catch (error) {
        res.status(400).json({ error: error.messege });
    }

}

module.exports = OneCharacterName;