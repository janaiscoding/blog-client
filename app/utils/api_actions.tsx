async function fetchPost(url: string, setter: any) {
  await fetch(url)
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
  errorSetter: any,
  handleClear: any,
  refresher: boolean,
  setRefresher: any
) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      if (data.errors) {
        errorSetter(data.errors);
        console.log(data.errors)
      } else {
        setRefresher(!refresher);
        handleClear();
        errorSetter([]);
      }
    })
    .catch((error) => {
      console.log(error.message);
      //unhandled error
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
