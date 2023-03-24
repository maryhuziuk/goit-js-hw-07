import { galleryItems } from "./gallery-items.js";
// Change code below this line

const basicLightbox = window.basicLightbox;

console.log(galleryItems);

const galleryListRef = document.querySelector(".gallery");
const imageList = createImageList(galleryItems);
galleryListRef.insertAdjacentHTML("beforeend", imageList);
galleryListRef.addEventListener("click", onImageClick);

function createImageList(images) {
  const markup = images
    .map((image) => {
      return `
    <li class="gallery__item">
  <a class="gallery__link" href= ${image.original}>
    <img
      class="gallery__image"
      src=${image.preview}
      data-source=${image.original}
      alt=${image.description}
    />
  </a>
</li>
    `;
    })
    .join("");
  return markup;
}

function onImageClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );
  instance.show();

  const closeElModal = document.querySelector(".basicLightbox");
  closeElModal.addEventListener("click", onImageClick);
}
