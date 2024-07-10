const images = document.querySelectorAll(".gallery__item img");
const modal = document.getElementById("myModal");
const img = document.getElementById("img01");
const captionText = document.getElementById("caption");

images.forEach((image) => {
    image.addEventListener("click", () => {
        modal.style.display = "block";
        img.src = image.src;
        captionText.innerHTML = image.alt;
    });
});
document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
});