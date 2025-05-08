window.onload = function () {
  setTimeout(() => {
    document.getElementById('popup').style.display = 'flex';
  }, 1500);
};

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = document.getElementById('boostForm');
  const processing = document.getElementById('processing');

  form.querySelector('button').disabled = true;
  form.style.display = "none";

  // Show the processing section
  processing.classList.remove('hidden');

  setTimeout(() => {
    processing.innerHTML = `
      <h3 style="color:green;">✅ Request Successful!</h3>
      <p>Likes and followers are being added. This may take a few minutes.</p>
    `;
  }, 3000);
});