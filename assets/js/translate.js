function translate(language) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var translations = JSON.parse(xhr.responseText);
                var elements = document.querySelectorAll('[translate]');
                elements.forEach(function(element) {
                    var key = element.getAttribute('translate');
                    if (translations[key]) {
                        element.innerText = translations[key];
                    }
                });
            } else {
                console.error('Error loading translations:', xhr.status);
            }
        }
    };
    xhr.open('GET', 'translations/' + language + '.json', true);
    xhr.send();
}
