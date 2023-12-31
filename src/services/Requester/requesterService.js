import instance from "../api";

export const createUser = (user) => instance.post("/createUser", user);
export const updateUser = (user) => instance.put("/updateUser", user);
export const getUserById = (id) => instance.get(`/getUserById/${id}`);
export const logIn = (data) => instance.post("/logIn", data);
export const deleteUser = (id) => instance.delete(`/deleteUser/${id}`);

export const getProducts = () => instance.get("/getProducts");
export const createFavoriteProduct = (favoriteProduct) =>
  instance.post("/createFavoriteProduct", favoriteProduct);
export const getProductIdsOfFavoriteProductsByUserId = (userId) =>
  instance.get(`/getProductIdsOfFavoriteProductsByUserId/${userId}`);
export const getIdFavoriteProductByProductIdAndUserId = (productId, userId) =>
  instance.get(
    `/getIdFavoriteProductByProductIdAndUserId/${productId}/${userId}`
  );
export const deleteFavortiteProduct = (id) =>
  instance.delete(`deleteFavoriteProduct/${id}`);
