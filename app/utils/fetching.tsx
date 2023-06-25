import { redirect } from "next/dist/server/api-utils";
import { getJwtToken } from "./authentication";

async function fetchRequest(url: string, opts: {}, type: string, setter: any) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      console.log("data by default:", data);
      console.log("data with the set type", data[type]);
      setter(data[type]);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

const opts_method_get = {
  method: "GET",
};

const opts_method_post = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getJwtToken()}`,
  },
  body: "",
  //This needs to be set with variables inside making a new post request to JSON.stringify the user inputs :3
};
const opts_method_put = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getJwtToken()}`,
  },
  body: "",
  //This needs to be set with variables inside making a new post request to JSON.stringify the user inputs :3
};

export { fetchRequest, opts_method_get, opts_method_post, opts_method_put };
