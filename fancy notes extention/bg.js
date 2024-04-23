chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.task === "saveFile") {
        var filename = request.filename;
        var data = request.data;
        var blob = new Blob([data], { type: 'text/plain' });
        var url = URL.createObjectURL(blob);
        chrome.downloads.download({
            url: url,
            filename: filename,
            saveAs: true
        });
    }
});

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({ selections: [] });
});
