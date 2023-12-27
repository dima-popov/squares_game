function fetchPresets() {
  return fetch("https://60816d9073292b0017cdd833.mockapi.io/modes").then(
    (res) => {
      if (res.ok) {
        return res.json();
      } else {
        return null;
      }
    }
  );
}

export { fetchPresets };
