document.addEventListener("DOMContentLoaded", function() {
    const uploadButton = document.getElementById("uploadButton");
    const uploadBanner = document.getElementById("uploadBanner");
    const closeBanner = document.getElementById("closeBanner");

    // Show the upload banner when clicking the upload button
    uploadButton.addEventListener("click", function() {
        uploadBanner.classList.add("active");
    });

    // Close the upload banner
    closeBanner.addEventListener("click", function() {
        uploadBanner.classList.remove("active");
    });
});
