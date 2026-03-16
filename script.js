

const images = document.querySelectorAll(".image-container")
const modal = document.getElementById("modal")
const modalMedia = document.getElementById("modal-media")

const closeBtn = document.querySelector(".close")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

let galleryImages = []
let currentIndex = 0

function showMedia(index) {

    const file = galleryImages[index]

    modalMedia.innerHTML = ""

    if (file.endsWith(".mp4")) {

        const video = document.createElement("video")
        video.src = file
        video.controls = true
        video.autoplay = true
        video.style.maxWidth = "80vw"
        video.style.maxHeight = "80vh"
        video.style.borderRadius = "10px"
        video.loop = true
        video.muted = true



        modalMedia.appendChild(video)

    } else {

        const img = document.createElement("img")
        img.src = file

        modalMedia.appendChild(img)

    }

}

images.forEach((container) => {

    container.addEventListener("click", () => {

        const img = container.querySelector(".product-img")

        galleryImages = img.dataset.images.split(",")

        currentIndex = 0

        modal.style.display = "flex"

        showMedia(currentIndex)

    })

})



prevBtn.onclick = () => {

    currentIndex--

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1
    }

    showMedia(currentIndex)

}

nextBtn.onclick = () => {

    currentIndex++

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0
    }

    showMedia(currentIndex)

}

closeBtn.onclick = () => modal.style.display = "none"


