const copyButton = document.getElementById("copyButton");
const copiedText = document.getElementById("copiedText");

copyButton.addEventListener("click", () => {
  const textToCopy = copyText.value;

  // Check if the clipboard API is supported
  if (navigator.clipboard) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      copiedText.textContent = "Text copied successfully!";
      setTimeout(() => {
        copiedText.textContent = "";
      }, 2000);
    });
  } else {
    copiedText.textContent = "Clipboard API is not supported!";
  }
});
