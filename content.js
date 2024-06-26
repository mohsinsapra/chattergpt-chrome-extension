const iconCode ="data:image/png;base64,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"
let chatHistory = []; // Variable to store conversation history

// Event listener for mouseup event
document.addEventListener("mouseup", function(event) {
  removeIconOnSelectionChange();

  const selectedText = window.getSelection().toString().trim();
  const chatContainer = document.getElementById("chatContainer");
  
  if (chatContainer && chatContainer.contains(window.getSelection().anchorNode)) {
    return;
  }

  if (selectedText.length > 0) {
    showSelectIcon(event.pageX, event.pageY, selectedText);
  }
});

// Function to display icon when text is selected
function showSelectIcon(x, y, text) {
  let icon = document.createElement("img");
  icon.id = "selectIconasdf";
  icon.className = "chattergpt-icon";
  icon.src = iconCode;
  icon.alt = 'img'; // Use your extension's icon
  icon.style.position = "absolute";
  icon.style.width = "20px";
  icon.style.height = "20px";
  icon.style.cursor = "pointer";
  icon.style.zIndex = "10000";
  icon.style.top = `${y}px`;
  icon.style.left = `${x}px`;
  icon.style.transform = "translate(-50%, -50%)";
  icon.style.boxShadow = "0 2px 5px rgba(0,0,0,0.3)";
  icon.style.borderRadius = "50%";
  icon.style.backgroundColor = "white";

  document.body.appendChild(icon);

  icon.addEventListener("click", function() {
    showTooltip(x, y, text);
    // icon.remove();
  });

  // Add event listener to hide tooltip when clicking outside
  document.addEventListener("click", hideTooltipOnClickOutside, true);
}

// Function to display tooltip with a typing indicator
function showTooltip(x, y, text) {
  const existingTooltip = document.getElementById("tooltipContainer");
  if (existingTooltip) {
    existingTooltip.remove();
  }

  let tooltip = document.createElement("div");
  tooltip.id = "tooltipContainer";
  tooltip.style.position = "absolute";
  tooltip.style.background = "white";
  tooltip.style.border = "1px solid #ddd";
  tooltip.style.borderRadius = "8px";
  tooltip.style.padding = "10px";
  tooltip.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
  tooltip.style.zIndex = "1000";
  tooltip.style.maxWidth = "400px";
  tooltip.style.fontFamily = "Arial, sans-serif";

  tooltip.innerHTML = `
    <div id="chatContainer" style="max-height: 250px; overflow-y: auto; background: #f9f9f9; padding: 10px; border-radius: 8px; display: none;"></div>
    <div id="typingIndicator" style="margin-top: 10px; color: #666; font-style: italic;">Ask me something</div>
    <div style="display: flex; flex-direction: column; margin-top: 10px;">
      <div style="display: flex; margin-bottom: 10px;">
        <button id="replyButton" style="flex: 1; margin-right: 5px; padding: 8px; border: none; background-color: #0078D7; color: white; border-radius: 4px; cursor: pointer;">Reply this</button>
        <button id="shortButton" style="flex: 1; margin-right: 5px; padding: 8px; border: none; background-color: #0078D7; color: white; border-radius: 4px; cursor: pointer;">Make it short</button>
        <button id="goodButton" style="flex: 1; padding: 8px; border: none; background-color: #0078D7; color: white; border-radius: 4px; cursor: pointer;">Make it good</button>
      </div>
      <textarea id="tooltipInput" placeholder="Type your message" style="flex: 1; box-sizing: border-box; padding: 2px; border: 1px solid #ddd; border-radius: 2px;">${text}</textarea>
      <button id="sendButton" style="margin-top: 10px; padding: 8px 12px; border: none; background-color: #0078D7; color: white; border-radius: 4px; cursor: pointer;">Send</button>
    </div>
  `;

  document.body.appendChild(tooltip);

  const tooltipHeight = tooltip.offsetHeight;
  const tooltipWidth = tooltip.offsetWidth;
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  // Determine whether to show tooltip above or below the selection
  if (y + tooltipHeight > windowHeight) {
    tooltip.style.top = (y - tooltipHeight) + "px";
  } else {
    tooltip.style.top = y + "px";
  }

  // Determine whether to adjust tooltip horizontally to fit within the viewport
  if (x + tooltipWidth > windowWidth) {
    tooltip.style.left = (x - tooltipWidth) + "px";
  } else {
    tooltip.style.left = x + "px";
  }

  const input = document.getElementById("tooltipInput");
  const sendButton = document.getElementById("sendButton");
  const replyButton = document.getElementById("replyButton");
  const shortButton = document.getElementById("shortButton");
  const goodButton = document.getElementById("goodButton");

  input.focus();

  // Move the cursor to the end of the input value
  input.setSelectionRange(input.value.length, input.value.length);

  // Function to update button states based on input value
  const updateButtonStates = () => {
    const isEmpty = input.value.trim() === "";
    replyButton.disabled = isEmpty;
    shortButton.disabled = isEmpty;
    goodButton.disabled = isEmpty;
    sendButton.disabled = isEmpty;

    // Apply dull background when buttons are disabled
    const buttons = [replyButton, shortButton, goodButton, sendButton];
    buttons.forEach(button => {
      if (button.disabled) {
        button.style.backgroundColor = "#aaa";
        button.style.cursor = "not-allowed";
      } else {
        button.style.backgroundColor = "#0078D7";
        button.style.cursor = "pointer";
      }
    });
  };

  updateButtonStates();

  input.addEventListener("input", updateButtonStates);

  replyButton.addEventListener("click", async function() {
    input.value += " reply this";
    await sendMessage();
  });

  shortButton.addEventListener("click", async function() {
    input.value += " make it short";
    await sendMessage();
  });

  goodButton.addEventListener("click", async function() {
    input.value += " make it good";
    await sendMessage();
  });

  const sendMessage = async () => {
    if (input.value.trim() !== "") {
      const userMessage = input.value.trim();
      input.value = "";

      // Add user message to chat history
      chatHistory.push({ role: "user", content: userMessage });

      // Add user message to chat interface
      addChatMessage(userMessage, "right");

      // Show chat container
      document.getElementById("chatContainer").style.display = "block";

      // Show typing indicator
      document.getElementById("typingIndicator").textContent = "Thinking...";

      // Call ChatGPT API with context
      const responseMessage = await getChatGPTResponse();

      // Remove typing indicator
      document.getElementById("typingIndicator").textContent = "";

      // Add response message to chat history
      chatHistory.push({ role: "assistant", content: responseMessage });

      // Add response message to chat interface
      addChatMessage(responseMessage, "left");
    }
    updateButtonStates(); // Ensure buttons are disabled after sending
  };

  input.addEventListener("keydown", async function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      await sendMessage();
    }
  });

  sendButton.addEventListener("click", sendMessage);
}

// Function to send request to ChatGPT API with context
async function getChatGPTResponse() {
  const apiKey = await getChatGPTApiKey();

  // Check if API key is available
  if (!apiKey) {
    return "ChatGPT API key not found in Chrome Storage.";
  }
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: chatHistory, // Pass conversation history as context
      max_tokens: 150
    })
  });

  const data = await response.json();
  
  if ('error' in data) {
    return data.error.message.trim();
  }
  return data.choices[0].message.content.trim();
}

function getChatGPTApiKey() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(['chatGPTApiKey'], function(result) {
      const apiKey = result.chatGPTApiKey;
      resolve(apiKey);
    });
  });
}

// Function to hide tooltip when clicking outside
function hideTooltipOnClickOutside(event) {
  const tooltip = document.getElementById("tooltipContainer");
  
  const icons = document.getElementsByClassName("chattergpt-icon");
  if (tooltip && !tooltip.contains(event.target) && !Array.from(icons).some(icon => icon.contains(event.target))) {
    tooltip.remove();
    Array.from(icons).slice(0, -1).forEach(icon => icon.remove());

    document.removeEventListener("click", hideTooltipOnClickOutside, true);
  }
  
  if (icons.length > 1 && !Array.from(icons).some(icon => icon.contains(event.target))) {
    Array.from(icons).slice(0, -1).forEach(icon => icon.remove());
  }
}

// Function to remove icon when selection changes
function removeIconOnSelectionChange() {
  const selectedText = window.getSelection().toString().trim();
  const icon = document.getElementById("selectIconasdf");

  if (selectedText.length === 0 && icon) {
    icon.remove();
    const icons = document.getElementsByClassName("chattergpt-icon");
    Array.from(icons).forEach(icon => icon.remove());
  }
}

// Function to add chat messages to the chat interface
function addChatMessage(message, side) {
  const chatContainer = document.getElementById("chatContainer");
  const messageDiv = document.createElement("div");
  messageDiv.style.textAlign = side;
  messageDiv.innerHTML = `
    <div style="display: inline-block; background: ${side === "right" ? "#e0f7fa" : "#fce4ec"}; padding: 5px; border-radius: 5px; margin: 5px 0;">
      ${message}
    </div>
  `;
  chatContainer.appendChild(messageDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;

  // Show chat container when a message is added
  chatContainer.style.display = "block";
}
