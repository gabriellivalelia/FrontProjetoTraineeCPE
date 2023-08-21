import instance from "../api";

export const createUser = (user) => instance.post("/createUser", user);
export const updateUser = (user) => instance.put("/updateUser", user);
export const getUserById = (id) => instance.get(`/getUserById/${id}`);
