document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery");
  const modal = document.getElementById("myModal");
  const modalImage = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const closeButton = document.getElementsByClassName("close")[0];
  const imageInput = document.getElementById("imageInput");
  const imageDescriptionInput = document.getElementById("imageDescription");
  const uploadForm = document.getElementById("uploadForm");

  // Array of image data (URL and description)
  const images = [
    { url: "../asset/1.jpg", description: "Sesi foto bersama di bpk. Syahroni." },
    { url: "../asset/item.jpg", description: "Deskripsi Gambar 2" },
    { url: "../asset/carousel3.jpg", description: "Deskripsi Gambar 3" },
    // Add more image URLs and descriptions as needed
  ];

  // Dynamically add existing images to the gallery
  images.forEach((imageData) => {
    addImageToGallery(imageData.url, imageData.description);
  });

  // Open modal function
  function openModal(imageUrl, imageDescription) {
    modal.style.display = "block";
    modalImage.src = imageUrl;
    modalCaption.textContent = imageDescription;
  }

  // Close modal function
  function closeModal() {
    modal.style.display = "none";
  }

  // Close modal when close button is clicked
  closeButton.addEventListener("click", closeModal);

  // Close modal when clicked outside the image
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Function to add image to gallery
  function addImageToGallery(imageUrl, imageDescription) {
    const imgElement = document.createElement("img");
    imgElement.src = imageUrl;
    imgElement.alt = "Gallery Image";
    imgElement.title = imageDescription;
    imgElement.addEventListener("click", () => openModal(imageUrl, imageDescription));
    galleryContainer.appendChild(imgElement);
  }

  // Function to upload new image
  function uploadImage() {
    const fileInput = imageInput.files[0];

    if (fileInput) {
      const imageUrl = URL.createObjectURL(fileInput);
      const imageDescription = imageDescriptionInput.value || "Deskripsi Gambar";

      addImageToGallery(imageUrl, imageDescription);
      closeModal(); // Close modal after uploading

      // Reset form fields
      imageInput.value = "";
      imageDescriptionInput.value = "";
    }
  }
});
