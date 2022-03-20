import React from "react";

const baseUrl = "https://ecom-react-task.herokuapp.com/";

export const Api = async (url, method, body) => {
  return await fetch(`${baseUrl}${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};
