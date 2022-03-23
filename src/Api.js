import React from "react";

const baseUrl = "https://ecom-react-task.herokuapp.com/";

const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      Authorization: "Bearer " + token,
    };
  }
};

export const Api = async (url, method, body) => {
  return await fetch(`${baseUrl}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...getToken(),
    },
    body: body ? JSON.stringify(body) : null,
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
