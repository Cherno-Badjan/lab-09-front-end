import request from 'superagent';

const URL = 'https://powerful-citadel-06337.herokuapp.com/';

export async function getCharacters() {
    const { body } = await request.get(`${URL}/characters`);

    return body;
}
export async function getGenders() {
    const response = await request.get(`${URL}/genders`);

    return response.body;
}
export async function getCharacter(id) {
    const response = await request.get(`${URL}/characters/${id}`);

    return response.body;
}
export async function createCharacter() {
    const response = await request.post(`${URL}/characters`);

    return response.body;
}
export async function deleteCharacter(id) {
    const response = await request.get(`${URL}/characters/${id}`);

    return response.body;
}
export async function updateCharacter(id) {
    const response = await request.get(`${URL}/characters/${id}`);

    return response.body;
}