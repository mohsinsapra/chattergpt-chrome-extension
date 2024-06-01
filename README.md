# ChatterGPT Chrome Extension

ChatterGPT is a Chrome extension that integrates ChatGPT into your browser, allowing you to quickly access AI-powered assistance inline by selecting text.

## Features

- Inline text selection to interact with ChatGPT.
- Displays a tooltip with a typing area to ask questions.
- Allows saving and updating ChatGPT API key.
- Partially hides the API key for security.

## Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory where you cloned/downloaded this repository.

## Usage

1. After installing the extension, click on the ChatterGPT icon in the Chrome toolbar.
2. Enter your ChatGPT API key in the popup form and click "Save API Key".
3. Select any text on a webpage to see the ChatterGPT icon.
4. Click the icon to open the tooltip and interact with ChatGPT.

## Development

### Files

- **popup.html**: Contains the HTML structure for the extension's popup, where the user can enter their ChatGPT API key.
- **popup.js**: Contains the JavaScript to handle saving and updating the ChatGPT API key.
- **content.js**: Contains the JavaScript to handle text selection, displaying the icon, showing the tooltip, and communicating with ChatGPT.

### Key Functions

- Displaying the ChatterGPT icon when text is selected.
- Showing a tooltip with a typing area when the icon is clicked.
- Sending and receiving messages to/from ChatGPT using the saved API key.
- Allowing the user to save and update their ChatGPT API key.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact the project maintainers.

---

Enjoy using ChatterGPT Chrome Extension and make your browsing experience smarter with AI!

```

```
