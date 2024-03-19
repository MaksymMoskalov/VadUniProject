import axios from 'axios';

export const instance = axios.create({
  baseURL: `https://65f907e2df15145246105050.mockapi.io/students/`,
});

export const requestAllStatements = async () => {
  const { data } = await instance.get(`appeal`);
  return data;
};

export const addStatement = async statement => {
  const { data } = await instance.post(`appeal`, statement);
  return data;
};

export const deleteStatement = async statementId => {
  const { data } = await instance.delete(`appeal/${statementId}`);
  return data;
};
