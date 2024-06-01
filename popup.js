document.addEventListener('DOMContentLoaded', function () {
  const apiForm = document.getElementById('apiForm');
  const apiKeyInput = document.getElementById('apiKey');
  const currentKeyContainer = document.getElementById('currentKeyContainer');
  const apiKeyDisplay = document.getElementById('apiKeyDisplay');
  const editKey = document.getElementById('editKey');

  // Function to partially hide API key
  function maskApiKey(key) {
    if (key.length > 4) {
      return key.slice(0, 4) + '...' + key.slice(-4);
    }
    return key;
  }

  // Check if API key exists in Chrome storage
  chrome.storage.sync.get(['chatGPTApiKey'], function (result) {
    const apiKey = result.chatGPTApiKey;
    if (apiKey) {
      apiKeyDisplay.textContent = maskApiKey(apiKey);
      currentKeyContainer.style.display = 'block';
    } else {
      apiForm.style.display = 'block';
    }
  });

  // Handle form submission
  apiForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const apiKey = apiKeyInput.value.trim();
    if (apiKey) {
      chrome.storage.sync.set({ chatGPTApiKey: apiKey }, function () {
        apiKeyDisplay.textContent = maskApiKey(apiKey);
        apiForm.style.display = 'none';
        currentKeyContainer.style.display = 'block';
      });
    }
  });

  // Handle edit key click
  editKey.addEventListener('click', function () {
    apiForm.style.display = 'block';
    currentKeyContainer.style.display = 'none';
    apiKeyInput.focus();
  });
});
