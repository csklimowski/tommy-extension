function tommify(node) {
    var paragraphs = node.getElementsByTagName("p");
    for (var i = 0; i < paragraphs.length; i++) {
        var matches = paragraphs[i].innerHTML.match(/\b\w+(?:\.|\!|\?)*\s*$/);
        if (matches) {
            let element = document.createElement('small');
            if (Math.random() > 0.9) {
                element.style.fontSize = '0.8em';
                element.innerText = ' ...' +  matches[0];
            }
            paragraphs[i].appendChild(element);
        }
    }
}

tommify(document);

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        tommify(mutation.target);
    });
});

observer.observe(document, {
    childList: true, subtree: true
});