// Función para cargar las traducciones
function loadTranslations(language, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var translations = JSON.parse(xhr.responseText);
                callback(null, translations);
            } else {
                callback('Error loading translations: ' + xhr.status, null);
            }
        }
    };
    xhr.open('GET', language + '.json', true); // Cargar el archivo JSON del idioma correspondiente
    xhr.send();
}

// Función para traducir los elementos con el atributo 'translate'
function translateElements(translations) {
    var elements = document.querySelectorAll('[translate]');
    elements.forEach(function(element) {
        var key = element.getAttribute('translate');
        if (translations[key]) {
            element.innerText = translations[key];
        }
    });
}

// Función para actualizar el ícono del botón de acuerdo al idioma actual
function updateLanguageButton() {
    var buttonIcon = document.getElementById('translate-button-icon');
    var iconPath = currentLanguage === 'en' ? 'assets/images/spain.svg' : 'assets/images/english.svg';
    buttonIcon.setAttribute('src', iconPath);
}

// Función para cambiar entre idiomas y traducir los elementos usando un switch
function toggleLanguage() {
    switch (currentLanguage) {
        case 'en':
            currentLanguage = 'es';
            break;
        case 'es':
            currentLanguage = 'en';
            break;
        default:
            currentLanguage = 'en';
    }
    loadTranslations(currentLanguage, function(error, translations) {
        if (error) {
            console.error(error);
            return;
        }
        translateElements(translations);
        updateLanguageButton();
    });
}

// Asignar evento al botón de clic
document.getElementById('translate-button-icon').addEventListener('click', toggleLanguage);

var currentLanguage = 'en'; // Idioma inicial
loadTranslations(currentLanguage, function(error, translations) {
    if (error) {
        console.error(error);
        return;
    }
    translateElements(translations);
    updateLanguageButton();
});
