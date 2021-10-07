const API_URL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3001";

export const articlesEndpoints = {
  get: API_URL + "/posts",
};

export const teamsEndpoints = {
  get: API_URL + "/teams",
};

export const documentsEndpoints = {
  get: API_URL + "/document",
};

export const galleryEndpoints = {
  get: API_URL + "/gallery",
};

export const contactEndpoints = {
  get: API_URL + "/contact",
};

export const infoModalEndpoints = {
  get: API_URL + "/infoModal",
};
