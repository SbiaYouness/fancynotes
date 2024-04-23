// Créer un bouton "Add" pour ajouter la sélection
var addButton = document.createElement('button');
addButton.textContent = 'Add';
addButton.style.position = 'fixed';
addButton.style.top = '10px';
addButton.style.left = '10px';
addButton.style.zIndex = '9999';
addButton.addEventListener('click', function() {
    var selectedText = window.getSelection().toString();
    chrome.runtime.sendMessage({ task: 'addToFile', selected: selectedText });
});

// Ajouter le bouton "Add" à la page
document.body.appendChild(addButton);

// Créer un bouton "New File" pour créer un nouveau fichier avec les sélections précédemment ajoutées
var newFileButton = document.createElement('button');
newFileButton.textContent = 'New File';
newFileButton.style.position = 'fixed';
newFileButton.style.top = '50px';
newFileButton.style.left = '10px';
newFileButton.style.zIndex = '9999';
newFileButton.addEventListener('click', function() {
    chrome.runtime.sendMessage({ task: 'createNewFile' });
});

// Ajouter le bouton "New File" à la page
document.body.appendChild(newFileButton);

// Créer un bouton "View Files" pour accéder à tous les fichiers créés
var viewFilesButton = document.createElement('button');
viewFilesButton.textContent = 'View Files';
viewFilesButton.style.position = 'fixed';
viewFilesButton.style.top = '90px';
viewFilesButton.style.left = '10px';
viewFilesButton.style.zIndex = '9999';
viewFilesButton.addEventListener('click', function() {
    // Ouvrir une nouvelle page ou un nouvel onglet avec la liste des fichiers
    chrome.tabs.create({ url: chrome.runtime.getURL('liste-des-fichiers.html') });
});

// Ajouter le bouton "View Files" à la page
document.body.appendChild(viewFilesButton);
