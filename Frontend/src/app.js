const inputImagen = document.getElementById("inputImagen");
const preview = document.getElementById("preview");

inputImagen.addEventListener("change", () => {
  const file = inputImagen.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    preview.src = url;
  } else {
    preview.src = "";
  }
});
