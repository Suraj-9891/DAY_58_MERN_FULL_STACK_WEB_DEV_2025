// Function to execute text commands (bold, italic, underline, etc.)
function execCmd(command) {
    document.execCommand(command, false, null);
}

// Change font size
function changeFontSize(selectElement) {
    const size = selectElement.value;
    document.execCommand('fontSize', false, size);
}

// Change font family
function changeFontFamily(selectElement) {
    const font = selectElement.value;
    document.execCommand('fontName', false, font);
}

// Insert ordered list
function insertOrderedList() {
    document.execCommand('insertOrderedList');
}

// Insert unordered list
function insertUnorderedList() {
    document.execCommand('insertUnorderedList');
}

// Save content as a file (HTML or TXT)
function saveContent(format) {
    const content = document.getElementById("editor").innerHTML;
    let fileContent = '';
    let fileName = 'document';

    if (format === 'html') {
        fileContent = content;  // Save as HTML
        fileName += '.html';
    } else if (format === 'txt') {
        fileContent = document.getElementById("editor").innerText;  // Save as plain text
        fileName += '.txt';
    }

    const blob = new Blob([fileContent], { type: format === 'html' ? 'text/html' : 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
}

// Undo Action
function undoAction() {
    document.execCommand('undo');
}

// Redo Action
function redoAction() {
    document.execCommand('redo');
}

// Change text color
function changeTextColor() {
    const color = prompt("Enter the color (e.g., 'red', '#ff0000'): ");
    if (color) {
        document.execCommand('foreColor', false, color);
    }
}

// Set editor height based on screen size (for mobile responsiveness)
window.addEventListener('resize', () => {
    const editor = document.getElementById("editor");
    editor.style.height = window.innerHeight * 0.6 + 'px';
});

// Initialize editor size on page load
window.onload = () => {
    const editor = document.getElementById("editor");
    editor.style.height = window.innerHeight * 0.6 + 'px';
};
