async function fetchPost(url: string, opts: {}, setter: any, refresher:any, setterRefresh: any) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      setter(data.post);
      setterRefresh(!refresher)
      console.log(refresher,'...')
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
  setter: any,
  errorSetter: any,
  handleClear: any
) {
  await fetch(url, opts)
    .then((response) => response.json())
    .then((data) => {
      if (data.errors) {
        errorSetter(data.errors);
        console.log("....Errors");
        setter(!refresher);
      } else {
        handleClear();
        errorSetter([]);
        setter(!refresher);
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
