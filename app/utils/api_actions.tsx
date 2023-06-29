async function fetchPost(url: string, opts: {}, setter: any) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      setter(data.post);
    })
    .catch((error) => {
      console.log(error.message);
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

async function createComment(
  url: string,
  opts: {},
  refresher: boolean,
  setter: any
) {
  await fetch(url, opts)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      setter(!refresher);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

const opts_get = {
  method: "GET",
};

const opts_post_comment = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: "",
};

export {
  fetchPost,
  fetchPublished,
  createComment,
  opts_get,
  opts_post_comment,
};
