// Ajoutez ici vos fonctionnalités JavaScript
console.log("Fichier JavaScript chargé");

// Exemple : Ajouter un événement au bouton de contact
document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    alert("Merci pour votre message !");
});
