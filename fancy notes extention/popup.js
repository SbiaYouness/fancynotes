document.getElementById('newFileButton').addEventListener('click', function() {
    chrome.runtime.sendMessage({ task: 'createNewFile' });
});
