function submit() {
  const artist = document.getElementById("artist").value;
  const song = document.getElementById("song").value;

  if (!artist || !song) {
    alert("Lütfen her iki alanı da doldurun.");
    return;
  }

  const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

  fetch(url)
    .then((res) => {
      if (!res.ok) alert("bir hata meydana geldi");
      return res.json();
    })
    .then((data) => {
      document.getElementById("lyrics").textContent =
        data.lyrics || "Söz bulunamadı.";
    })
    .catch((err) => {
      document.getElementById("lyrics").textContent = err.message;
    });
}
