//import superagent
import request from 'superagent';

const URL = 'https://powerful-citadel-06337.herokuapp.com';

export async function getCharacters() {
    const response = await request.get(`${URL}/characters`);

    return response.body;
}
// destructured format 
export async function getGenders() {
    const { body } = await request.get(`${URL}/genders`);

    return body;
}
export async function getCharacter(id) {
    const { body } = await request.get(`${URL}/characters/${id}`);

    return body;
}
export async function createCharacter(characterBits) {
    const { body } = await request.post(`${URL}/characters/`).send(characterBits);

    return body;
}
export async function deleteCharacter(id) {
    const { body } = await request.delete(`${URL}/characters/${id}`);

    return body;
}
export async function updateCharacter(id, characterBits) {
    const { body } = await request.put(`${URL}/characters/${id}`).send(characterBits);

    return body;
}