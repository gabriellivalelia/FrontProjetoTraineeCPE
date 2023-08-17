import instance from "../api";

export const createUser = (user) => instance.post('/createUser', user);