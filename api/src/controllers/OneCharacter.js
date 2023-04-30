const axios = require("axios");
require("dotenv").config();
const { URL_BASE, KEY } = process.env;


const OneCharacter = async (req, res) => {
    const { id } = req.params;

    try {

        const AllData = await axios.get(`${URL_BASE}/character/${id}?key=${KEY}`);
        
        const CleanCharacter = {
            id: AllData.data.id,
            name: AllData.data.name,
            status: AllData.data.status,
            species: AllData.data.species,
            gender: AllData.data.gender,
            origin: AllData.data.origin.name,
            image: AllData.data.image,
        }

        res.status(200).json(CleanCharacter);

    } catch (error) {
        res.status(400).json({ error: error.messege });
    }
}


module.exports = OneCharacter;