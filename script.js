document.getElementById("generateButton").addEventListener("click", function() {
    // Make a request to the Scryfall API
    fetch("https://api.scryfall.com/cards/random")
        .then(response => response.json())
        .then(data => {
            // Get the image URL from the API response
            const imageUrl = data.image_uris.normal;
            
            // Create an image element
            const image = document.createElement("img");
            image.src = imageUrl;
            
            // Append the image to the image container
            document.getElementById("imageContainer").appendChild(image);
        })
        .catch(error => console.error(error));
});
