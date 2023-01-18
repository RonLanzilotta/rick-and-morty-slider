import api from "./apiConfig.js";

// get all characters from API (individual characters are handled by the state called index in the Slider.jsx file)

export const getCharacters = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// create a new character and post it to the API

export const createCharacter = async (characterData) => {
    try {
        const response = await api.post("/characters", characterData)
        return response.data
    } catch (error) {
        throw error;
    }
};

// updates a character and adds the updated info to the API

export const updateCharacter = async (id, characterData) => {
    try {
        const response = await api.put(`/characters/${id}`, characterData)
        return response.data
    } catch (error) {
        throw error;
    }
};

// deletes a character from the db
export const deleteCharacter = async (id) => {
    try {
        const response = await api.delete(`/characters/${id}`)
        return response.data
    } catch (error) {
        throw error;
    }
};