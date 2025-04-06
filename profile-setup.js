// Handle profile picture upload and preview
document.getElementById("profile-picture").addEventListener("change", function () {
  const file = this.files[0];
  const previewText = document.getElementById("picture-preview-text");
  const previewImage = document.getElementById("profile-picture-preview");

  if (file) {
    previewText.textContent = file.name;
    const reader = new FileReader();

    reader.onload = function () {
      previewImage.src = reader.result;
      previewImage.classList.remove("hidden");
    };

    reader.readAsDataURL(file);
  } else {
    previewText.textContent = "No image selected";
    previewImage.classList.add("hidden");
  }
});

// Step 1: Continue button event handler
document.getElementById("continue-step-1").addEventListener("click", function () {
  const profilePicture = document.getElementById("profile-picture").files[0];

  if (!profilePicture) {
    document.getElementById("error-message").textContent = "Please upload a profile picture.";
    return;
  }

  // Hide Step 1 and show Step 2
  document.getElementById("step-1").classList.add("hidden");
  document.getElementById("step-2").classList.remove("hidden");
});

// Step 2: Continue button event handler
document.getElementById("continue-step-2").addEventListener("click", function () {
  const twitter = document.getElementById("twitter").value;
  const instagram = document.getElementById("instagram").value;
  const youtube = document.getElementById("youtube").value;

  // Optionally, validate the URLs (you can make them more sophisticated with regex)
  if (twitter && !isValidUrl(twitter)) {
    document.getElementById("error-message").textContent = "Please enter a valid Twitter URL.";
    return;
  }
  if (instagram && !isValidUrl(instagram)) {
    document.getElementById("error-message").textContent = "Please enter a valid Instagram URL.";
    return;
  }
  if (youtube && !isValidUrl(youtube)) {
    document.getElementById("error-message").textContent = "Please enter a valid YouTube URL.";
    return;
  }

  // Hide Step 2 and show Step 3
  document.getElementById("step-2").classList.add("hidden");
  document.getElementById("step-3").classList.remove("hidden");
});

// Step 3: Final submit (bio)
document.getElementById("bio-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const bio = document.getElementById("bio").value;

  if (!bio.trim()) {
    document.getElementById("error-message").textContent = "Please write a bio.";
    return;
  }

  // If everything is valid, submit the data (you can integrate with Firebase or your backend)
  alert("Profile set up successfully!");
  // Redirect to the next page (e.g., dashboard)
  window.location.href = "dashboard.html";
});

// URL validation function (simple)
function isValidUrl(url) {
  const pattern = new RegExp("^(https?:\/\/)?([a-z0-9]+[.])+[a-z]{2,6}([\/?].*)?$");
  return pattern.test(url);
}
