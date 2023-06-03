document.getElementById("generateButton").addEventListener("click", function() {
    fetch("https://api.scryfall.com/cards/random")
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.image_uris.normal;
            const image = document.createElement("img");
            image.src = imageUrl;
            document.getElementById("imageContainer").appendChild(image);
        })
        .catch(error => console.error(error));
});
