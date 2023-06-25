export default async function fetchRequest(
  url: string,
  type: string,
  setter: any
) {
  await fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      setter(data[type]);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
