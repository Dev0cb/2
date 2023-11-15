function validationMDP() {
    var password = document.getElementById('password').value;

    // Validation de la longueur
    var alerteLongueur = document.getElementById('alerteLong');
    if (password.length < 8) {
        alerteLongueur.textContent = 'Le mot de passe doit avoir au moins 8 caractères.';
    } else {
        alerteLongueur.textContent = '';
    }

    // Validation de la présence d'une lettre minuscule
    var alerteMinuscule = document.getElementById('alerteMin');
    if (!/[a-z]/.test(password)) {
        alerteMinuscule.textContent = 'Le mot de passe doit contenir au moins une lettre minuscule.';
    } else {
        alerteMinuscule.textContent = '';
    }

    // Validation de la présence d'une lettre majuscule
    var alerteMajuscule = document.getElementById('alerteMaj');
    if (!/[A-Z]/.test(password)) {
        alerteMajuscule.textContent = 'Le mot de passe doit contenir au moins une lettre majuscule.';
    } else {
        alerteMajuscule.textContent = '';
    }

    // Validation de la présence d'un nombre
    var alerteNombre = document.getElementById('alerteNbre');
    if (!/\d/.test(password)) {
        alerteNombre.textContent = 'Le mot de passe doit contenir au moins un chiffre.';
    } else {
        alerteNombre.textContent = '';
    }
}
document.getElementById('password').addEventListener('input',validationMDP)