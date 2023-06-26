import { getJwtToken } from "./authentication";
import { PostWithComments } from "./types";

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
  tokenSetter: any,
  loggedSetter: any
) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      if (data.token !== undefined) {
        tokenSetter(data.token);
        loggedSetter(true);
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
async function fetchAllPosts(url: string, opts: {}, setter: any) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      setter(data.posts);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

async function fetchPublished(url: string, opts: {}, setter: any) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      const published = data.posts.filter(
        (post: { published: boolean }) => post.published === true
      );
      setter(published);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

async function createPost(
  url: string,
  opts: {},
  refresher: boolean,
  setter: any
) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      setter(!refresher);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

async function updatePost(url: string, opts: {}, setter: any) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      console.log("redirecting....");
      setter(true);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
async function deletePost(
  url: string,
  opts: {},
  refresher: boolean,
  setter: any
) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "post was deleted");
      setter(!refresher);
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
};
const opts_put = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getJwtToken()}`,
  },
  body: "",
};
const opts_delete = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getJwtToken()}`,
  },
};

export {
  fetchRequest,
  loginRequest,
  fetchAllPosts,
  fetchPublished,
  createPost,
  updatePost,
  deletePost,
  opts_get,
  opts_post,
  opts_put,
  opts_delete,
};
