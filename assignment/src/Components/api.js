import axios from 'axios';
export const getData = () => {
  const config = {
    url: ' https://json-pract.herokuapp.com/content',
    method: 'get',
  };
  return axios(config);
};
export const addData = ({ payload }) => {
  const config = {
    url: `https://json-pract.herokuapp.com/content`,
    method: 'post',
    data: payload,
  };
  return axios(config);
};

export const getCondition = (id) => {
  const config = {
    url: `https://json-pract.herokuapp.com/conditions`,
    method: 'get',
  };
  return axios(config);
};
export const getAction = (id) => {
  const config = {
    url: `https://json-pract.herokuapp.com/action`,
    method: 'get',
  };
  return axios(config);
};

export const createCondition = ({ id, value, contains, data }) => {
  const payload = {
    id,
    value,
    contains,
    data,
  };
  const config = {
    url: `https://json-pract.herokuapp.com/conditions`,
    method: 'post',
    data: payload,
  };
  return axios(config);
};

export const createAction = (value, id) => {
  const payload = {
    id,
    value,
  };
  const config = {
    url: `https://json-pract.herokuapp.com/actions`,
    method: 'post',
    data: payload,
  };
  return axios(config);
};

export const patchCondition = ({ id, value, contains, data }) => {
  const payload = {
    id,
    value,
    contains,
    data,
  };
  const config = {
    url: `https://json-pract.herokuapp.com/conditions/${id}`,
    method: 'patch',
    data: payload,
  };
  return axios(config);
};
export const patchAction = (value, id) => {
  const payload = {
    id,
    value,
  };
  const config = {
    url: `https://json-pract.herokuapp.com/actions/${id}`,
    method: 'patch',
    data: payload,
  };
  return axios(config);
};
