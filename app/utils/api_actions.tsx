import { redirect } from "next/navigation";
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

async function loginRequest(
  url: string,
  opts: {},
  validErrSetter: any,
  dbErrSetter: any,
  tokenSetter: any
) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      if (data.token !== undefined) {
        tokenSetter(data.token);
      }
      if (data.errors) {
        validErrSetter(data.errors);
        // this will be the express-validator errors
      }
      dbErrSetter(data.message);
      //db error can only be 1: either not found email or wrong password - never both
    })
    .catch((err) => {
      console.log(err.message);
      //other surprising errors
    });
}
async function updatePost(url: string, opts: {}, setter:any) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      console.log('redirecting....')
      setter(true);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
const opts_get = {
  method: "GET",
};

const opts_post = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getJwtToken()}`,
  },
  body: "",
  //This needs to be set with variables inside making a new post request to JSON.stringify the user inputs :3
};
const opts_put = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getJwtToken()}`,
  },
  body: "",
  //This needs to be set with variables inside making a new put request to JSON.stringify the user inputs :3
};
const opts_delete = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getJwtToken()}`,
  },
  body: "",
  //This needs to be set with variables inside making a new put request to JSON.stringify the user inputs :3
};

export {
  fetchRequest,
  loginRequest,
  updatePost,
  opts_get,
  opts_post,
  opts_put,
  opts_delete,
};
