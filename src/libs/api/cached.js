import toast from "react-hot-toast";

export function cachedFetch(url, lsKey, errData, obj = {}) {

  if (!navigator.onLine) return getCachedData(lsKey, errData);

  return fetch(url, obj)
    .then((res) => res.json())
    .then((jsonData) => {
      window.localStorage.setItem(lsKey, JSON.stringify(jsonData));
      return jsonData;
    })
    .catch((err) => {
      console.error(err);
      toast.error("Error descargando datos");
      return getCachedData(lsKey, errData);
    });
}


function getCachedData(key, errData) {
  var cached = window.localStorage.getItem(key);
  if (cached === null) return errData;
  return JSON.parse(cached);
}