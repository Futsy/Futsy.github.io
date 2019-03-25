
function init() {
    // Fruits
    generatePineapple();
    generateOrange();
    generateApple();
    generatePear();

    // Animations
    generatePlank();
}

/**
 * Orange
 */
function generateOrange() {
    var htmlIdentifier = 'orange-html';
    var cssIdentifier = 'orange-css';

    elem(htmlIdentifier).appendChild(createOrangeHTML());
    elem(cssIdentifier).appendChild(createOrangeCSS());
}

function createOrangeHTML() {
    var html = document.createElement('div');

    var content = [
        { c: '<div class=\"orange">', i: 0 },
        { c: '<div class=\"top-twig\"></div>', i: 1 },
        { c: '<div class=\"left-twig\"></div>', i: 1 },
        { c: '<div class=\"right-twig\"></div>', i: 1 },
        { c: '</div>', i: 0 },
    ];
    
    for (var i = 0; i < content.length; i++) {
        html.appendChild(generateLine(content[i].c, content[i].i));
    }

    return html;
}

function createOrangeCSS() {
    var css = document.createElement('div');

    var content = [
        { c: '.orange {', i: 0 },
        { c: 'position: relative;', i: 1 },
        { c: 'top: calc(50% - 76px);', i: 1 },
        { c: '', i: 0 },
        { c: 'height: 56px;', i: 1 },
        { c: 'width: 56px;', i: 1 },
        { c: '', i: 0 },
        { c: '-webkit-border-radius: 50%;', i: 1 },
        { c: '-moz-border-radius: 50%;', i: 1 },
        { c: 'border-radius: 50%;', i: 1 },
        { c: '', i: 0 },
        { c: 'background: orange;', i: 1 },
        { c: 'margin: 20px auto 0 auto;', i: 1 },
        { c: '}', i: 0 },
        { c: '', i: 0 },
        { c: '.orange > .top-twig {', i: 0 },
        { c: 'position: absolute;', i: 1 },
        { c: 'left: calc(50% - 2px);', i: 1 },
        { c: '', i: 0 },
        { c: 'width: 4px;', i: 1 },
        { c: 'height: 8px;', i: 1 },
        { c: '', i: 0 },
        { c: 'background: darkgreen;', i: 1 },
        { c: 'top: -7px;', i: 1 },
        { c: 'border-bottom: 1px solid rgb(177, 86, 1);', i: 1 },
        { c: '}', i: 0 },
        { c: '', i: 0 },
        { c: '.orange > .left-twig {', i: 0 },
        { c: 'position: absolute;', i: 1 },
        { c: 'left: calc(50% - 10px);', i: 1 },
        { c: '', i: 0 },
        { c: 'width: 10px;', i: 1 },
        { c: 'height: 6px;', i: 1 },
        { c: '', i: 0 },
        { c: '-webkit-border-radius: 50%;', i: 1 },
        { c: '-moz-border-radius: 50%;', i: 1 },
        { c: 'border-radius: 50%;', i: 1 },
        { c: '', i: 0 },
        { c: 'background: rgb(0, 119, 0);', i: 1 },
        { c: 'top: -9px;', i: 1 },
        { c: '}', i: 0 },
        { c: '', i: 0 },
        { c: '.orange > .right-twig {', i: 0 },
        { c: 'position: absolute;', i: 1 },
        { c: 'left: calc(50%);', i: 1 },
        { c: '', i: 0 },
        { c: 'width: 10px;', i: 1 },
        { c: 'height: 6px;', i: 1 },
        { c: '', i: 0 },
        { c: '-webkit-border-radius: 50%;', i: 1 },
        { c: '-moz-border-radius: 50%;', i: 1 },
        { c: 'border-radius: 50%;', i: 1 },
        { c: '', i: 0 },
        { c: 'background: rgb(0, 139, 0);', i: 1 },
        { c: 'top: -9px;', i: 1 },
        { c: '}', i: 0 }
    ];
    
    for (var i = 0; i < content.length; i++) {
        css.appendChild(generateLine(content[i].c, content[i].i));
    }

    return css;
}

/**
 * Pineapple
 */

function generatePineapple() {
    var htmlIdentifier = 'pineapple-html';
    var cssIdenfitier = 'pineapple-css';

    elem(htmlIdentifier).appendChild(createPineappleHTML());
    elem(cssIdenfitier).appendChild(createPineappleCSS());
}

function createPineappleHTML() {
    var html = document.createElement('div');

    var content = [
        { c: '<div class=\"pineapple\">', i: 0 },
        { c: '<div class=\"left-leaf leaf\"></div>', i: 1 },
        { c: '<div class=\"middle-leaf leaf\"></div>', i: 1 },
        { c: '<div class=\"right-leaf leaf\"></div>', i: 1 },
        { c: '</div>', i: 0 }
    ];

    for (var i = 0; i < content.length; i++) {
        html.appendChild(generateLine(content[i].c, content[i].i));
    }

    return html;
}

function createPineappleCSS() {
    var css = document.createElement('div');

    var content = [
        { c: '.pineapple {', i: 0 },
        { c: 'position: relative;', i: 1 },
        { c: '', i: 0 },
        { c: 'height: 76px;', i: 1 },
        { c: 'width: 56px;', i: 1 },
        { c: '', i: 0 },
        { c: '-webkit-border-radius: 42%;', i: 1 },
        { c: '-moz-border-radius: 42%;', i: 1 },
        { c: 'border-radius: 42%;', i: 1 },
        { c: '', i: 0 },
        { c: 'background: orange;', i: 1 },
        { c: 'background: linear-gradient(115deg, transparent 75%, rgba(255, 185, 0, .75) 75%) 0 0,', i: 1 },
        { c: 'linear-gradient(245deg, transparent 75%, rgba(255, 185, 0, .75) 75%) 0 0,', i: 2 },
        { c: 'linear-gradient(115deg, transparent 75%, rgba(255, 185, 0, .75) 75%) 7px -15px,', i: 2 },
        { c: 'linear-gradient(245deg, transparent 75%, rgba(255, 185, 0, .75) 75%) 7px -15px, orange;', i: 2 },
        { c: 'background-size: 15px 30px;', i: 1 },
        { c: '}', i: 0 },
        { c: '', i: 0 },
        { c: '.leaf {', i: 0 },
        { c: 'position: absolute;', i: 1 },
        { c: '', i: 0 },
        { c: 'width: 10px;', i: 1 },
        { c: 'height: 20px;', i: 1 },
        { c: '', i: 0 },
        { c: 'background: darkgreen;', i: 1 },
        { c: 'top: -19px;', i: 1 },
        { c: 'border-bottom: 1px solid rgb(177, 86, 1);', i: 1 },
        { c: '}', i: 0 },
        { c: '', i: 0 },
        { c: '.left-leaf {', i: 0 },
        { c: 'transform: rotate(-20deg);', i: 1 },
        { c: 'left: calc(50% - 10px);', i: 1 },
        { c: '', i: 0 },
        { c: 'border-bottom-left-radius: 50%;', i: 1 },
        { c: 'border-top-right-radius: 50%;', i: 1 },
        { c: 'border-top-left-radius: 10%;', i: 1 },
        { c: '}', i: 0 },
        { c: '', i: 0 },
        { c: '.middle-leaf {', i: 0 },
        { c: 'top: -22px;', i: 1 },
        { c: 'left: calc(50% - 5px);', i: 1 },
        { c: 'height: 20px;', i: 1 },
        { c: 'background: rgb(0, 115, 0);', i: 1 },
        { c: '', i: 0 },
        { c: 'border-radius: 50%;', i: 1 },
        { c: '}', i: 0 },
        { c: '', i: 0 },
        { c: '.right-leaf {', i: 0 },
        { c: 'transform: rotate(20deg);', i: 1 },
        { c: 'left: 50%;', i: 1 },
        { c: 'background: rgb(0, 110, 0);', i: 1 },
        { c: '', i: 0 },
        { c: 'border-bottom-right-radius: 50%;', i: 1 },
        { c: 'border-top-left-radius: 50%;', i: 1 },
        { c: 'border-top-right-radius: 10%;', i: 1 },
        { c: '}', i: 0 }
    ];

    for (var i = 0; i < content.length; i++) {
        css.appendChild(generateLine(content[i].c, content[i].i));
    }

    return css;
}

/**
 * Apple
 */
function generateApple() {
    var htmlIdentifier = 'apple-html';
    var cssIdenfitier = 'apple-css';

    elem(htmlIdentifier).appendChild(createAppleHTML());
    elem(cssIdenfitier).appendChild(createAppleCSS());
}

function createAppleHTML() {
    var html = document.createElement('div');

    var content = [
        { c: '<div class=\"apple\">', i: 0 },
        { c: '<div class=\"left-slice\"></div>', i: 1 },
        { c: '<div class=\"right-slice\"></div>', i: 1 },
        { c: '<div class=\"twig\"></div>', i: 1 },
        { c: '</div>', i: 0 }
    ];
    
    for (var i = 0; i < content.length; i++) {
        html.appendChild(generateLine(content[i].c, content[i].i));
    }

    return html;
}

function createAppleCSS() {
    var css = document.createElement('div');

    var content = [
        { c: '.apple {', i: 0 },
        { c: 'position: relative;', i: 1 },
        { c: 'top: calc(50% - 76px);', i: 1 },
        { c: '', i: 0 },
        { c: 'height: 54px;', i: 1 },
        { c: 'width: 84px;', i: 1 },
        { c: '', i: 0 },
        { c: '-webkit-border-radius: 50%;', i: 1 },
        { c: '-moz-border-radius: 50%;', i: 1 },
        { c: 'border-radius: 50%;', i: 1 },
        { c: '', i: 0 },
        { c: 'background: transparent;', i: 1 },
        { c: 'margin: 20px auto 0 auto;', i: 1 },
        { c: '}', i: 0 },
        { c: '', i: 0 },
        { c: '.apple > .left-slice {', i: 0 },
        { c: 'position: absolute;', i: 1 },
        { c: 'left: calc(50% - 10px);', i: 1 },
        { c: '', i: 0 },
        { c: 'width: 50%;', i: 1 },
        { c: 'height: 100%;', i: 1 },
        { c: '', i: 0 },
        { c: '-webkit-border-radius: 50%;', i: 1 },
        { c: '-moz-border-radius: 50%;', i: 1 },
        { c: 'border-radius: 50%;', i: 1 },
        { c: '-webkit-border-bottom-right-radius: 10px;', i: 1 },
        { c: '-moz-border-bottom-right-radius: 10px;', i: 1 },
        { c: 'border-bottom-right-radius: 10px;', i: 1 },
        { c: '', i: 0 },
        { c: 'background: rgb(122, 185, 38);', i: 1 },
        { c: '}', i: 0 },
        { c: '', i: 0 },
        { c: '.apple > .twig {', i: 0 },
        { c: 'position: absolute;', i: 1 },
        { c: 'left: calc(50% + 7px);', i: 1 },
        { c: 'top: -11px;', i: 1 },
        { c: '', i: 0 },
        { c: 'width: 12px;', i: 1 },
        { c: 'height: 15px;', i: 1 },
        { c: '', i: 0 },
        { c: 'background: brown;', i: 1 },
        { c: 'border-bottom: 1px solid darkgreen;', i: 1 },
        { c: '', i: 0 },
        { c: '-webkit-clip-path: polygon(72% 100%, 68% 77%,', i: 1 },
        { c: ' 62% 65%, 56% 58%, 43% 52%, 28% 48%, 21% 45%, ', i: 2 },
        { c: '32% 21%, 38% 25%, 43% 28%, 53% 33%, 62% 37%, ', i: 2 },
        { c: '70% 45%, 75% 56%, 81% 67%, 85% 79%, 84% 89%, ', i: 2 },
        { c: '86% 98%, 86% 100%);', i: 2 },
        { c: 'clip-path: polygon(72% 100%, 68% 77%,', i: 1 },
        { c: ' 62% 65%, 56% 58%, 43% 52%, 28% 48%, 21% 45%, ', i: 2 },
        { c: '32% 21%, 38% 25%, 43% 28%, 53% 33%, 62% 37%, ', i: 2 },
        { c: '70% 45%, 75% 56%, 81% 67%, 85% 79%, 84% 89%, ', i: 2 },
        { c: '86% 98%, 86% 100%);', i: 2 },
        { c: '}', i: 0 },
        { c: '', i: 0 },
        { c: '.apple > .right-slice {', i: 0 },
        { c: 'position: absolute;', i: 1 },
        { c: 'left: calc(50%);', i: 1 },
        { c: '', i: 0 },
        { c: 'width: 50%;', i: 1 },
        { c: 'height: 100%;', i: 1 },
        { c: '', i: 0 },
        { c: '-webkit-border-radius: 50%;', i: 1 },
        { c: '-moz-border-radius: 50%;', i: 1 },
        { c: 'border-radius: 50%;', i: 1 },
        { c: '-webkit-border-bottom-left-radius: 10px;', i: 1 },
        { c: '-moz-border-bottom-left-radius: 10px;', i: 1 },
        { c: 'border-bottom-left-radius: 10px;', i: 1 },
        { c: '', i: 0 },
        { c: 'background: rgb(122, 185, 38);', i: 1 },
        { c: '}', i: 0 },
    ];

    for (var i = 0; i < content.length; i++) {
        css.appendChild(generateLine(content[i].c, content[i].i));
    }

    return css;
}

/**
 * 
 */
function generatePear() {
    var htmlIdentifier = 'pear-html';
    var cssIdenfitier = 'pear-css';

    elem(htmlIdentifier).appendChild(createPearHTML());
    elem(cssIdenfitier).appendChild(createPearCSS());
}

function createPearHTML() {
    var html = document.createElement('div');

    var content = [
        { c: '<div class=\"pear-neck\"></div>', i: 0 },
        { c: '<div class=\"inverted-pear-neck-left\"></div>', i: 0 },
        { c: '<div class=\"inverted-pear-neck-right\"></div>', i: 0 },
        { c: '<div class=\"pear\">', i: 0 },
        { c: '<div class=\"twig\"></div>', i: 1 },
        { c: '</div>', i: 0 }
    ];
    
    for (var i = 0; i < content.length; i++) {
        html.appendChild(generateLine(content[i].c, content[i].i));
    }

    return html;
}

function createPearCSS() {
    var css = document.createElement('div');
    
    var content = [
        { c: '.pear {', i: 0 },
        { c: 'position: relative;', i: 1 },
        { c: 'top: calc(50% - 76px);', i: 1 },
        { c: '', i: 0 },
        { c: 'height: 54px;', i: 1 },
        { c: 'width: 54px;', i: 1 },
        { c: '', i: 0 },
        { c: '-webkit-border-radius: 50%;', i: 1 },
        { c: '-moz-border-radius: 50%;', i: 1 },
        { c: 'border-radius: 50%;', i: 1 },
        { c: '', i: 0 },
        { c: 'background: rgb(0, 139, 0);', i: 1 },
        { c: 'margin: 20px auto 0 auto;', i: 1 },
        { c: '}', i: 0 },
        { c: '', i: 0 },
        { c: '.pear > .twig {', i: 0 },
        { c: 'position: absolute;', i: 1 },
        { c: 'left: 18px;', i: 1 },
        { c: 'top: -32px;', i: 1 },
        { c: '', i: 0 },
        { c: 'width: 12px;', i: 1 },
        { c: 'height: 15px;', i: 1 },
        { c: '', i: 0 },
        { c: 'background: brown;', i: 1 },
        { c: 'border-bottom: 1px solid darkgreen;', i: 1 },
        { c: '', i: 0 },
        { c: '-webkit-clip-path: polygon(72% 100%, 68% 77%,', i: 1 },
        { c: ' 62% 65%, 56% 58%, 43% 52%, 28% 48%, 21% 45%, ', i: 2 },
        { c: '32% 21%, 38% 25%, 43% 28%, 53% 33%, 62% 37%, ', i: 2 },
        { c: '70% 45%, 75% 56%, 81% 67%, 85% 79%, 84% 89%, ', i: 2 },
        { c: '86% 98%, 86% 100%);', i: 2 },
        { c: 'clip-path: polygon(72% 100%, 68% 77%,', i: 1 },
        { c: ' 62% 65%, 56% 58%, 43% 52%, 28% 48%, 21% 45%, ', i: 2 },
        { c: '32% 21%, 38% 25%, 43% 28%, 53% 33%, 62% 37%, ', i: 2 },
        { c: '70% 45%, 75% 56%, 81% 67%, 85% 79%, 84% 89%, ', i: 2 },
        { c: '86% 98%, 86% 100%);', i: 2 },
        { c: '}', i: 0 },
        { c: '', i: 0 },
        { c: '.pear > .pear-neck {', i: 0 },
        { c: 'position: relative;', i: 1 },
        { c: 'top: calc(50% - 47px);', i: 1 },
        { c: 'height: 60px;', i: 1 },
        { c: 'width: 16px;', i: 1 },
        { c: '', i: 0 },
        { c: '-webkit-border-radius: 50px 50px 0% 0%;', i: 1 },
        { c: '-moz-border-radius: 50% 50% 0% 0%;', i: 1 },
        { c: 'border-radius: 10px 10px 0% 0%;', i: 1 },
        { c: '', i: 0 },
        { c: 'background: rgb(0, 139, 0);', i: 1 },
        { c: 'margin: 20px auto 0 auto;', i: 1 },
        { c: '}', i: 0 },
        { c: '', i: 0 },
        { c: '.pear > .inverted-pear-neck-left {', i: 0 },
        { c: 'position: absolute;', i: 1 },
        { c: 'top: calc(50% - 56px);', i: 1 },
        { c: 'left: calc(50% - 27px);', i: 1 },
        { c: 'width: 50px;', i: 1 },
        { c: 'height: 27px;', i: 1 },
        { c: 'width: 0;', i: 1 },
        { c: 'height: 0;', i: 1 },
        { c: 'border-top-right-radius: 95%;', i: 1 },
        { c: 'border-style: solid;', i: 1 },
        { c: 'border-width: 0 0 50px 27px;', i: 1 },
        { c: 'border-color: transparent transparent rgb(0, 139, 0) transparent;', i: 1 },
        { c: '}', i: 0 },
        { c: '', i: 0 },
        { c: '.pear > .inverted-pear-neck-right {', i: 0 },
        { c: 'position: absolute;', i: 1 },
        { c: 'top: calc(50% - 56px);', i: 1 },
        { c: 'left: 50%;', i: 1 },
        { c: 'width: 50px;', i: 1 },
        { c: 'height: 27px;', i: 1 },
        { c: 'width: 0;', i: 1 },
        { c: 'height: 0;', i: 1 },
        { c: 'border-top-left-radius: 95%;', i: 1 },
        { c: 'border-style: solid;', i: 1 },
        { c: 'border-width: 50px 0 0 27px;', i: 1 },
        { c: 'border-color: transparent transparent transparent rgb(0, 139, 0);', i: 1 },
        { c: '}', i: 0 },
        { c: '', i: 0 }
    ];

    for (var i = 0; i < content.length; i++) {
        css.appendChild(generateLine(content[i].c, content[i].i));
    }

    return css;
}

/**
 * Plank
 */
function generatePlank() {
    var htmlIdentifier = 'plank-html';
    var cssIdentifier = 'plank-css';

    elem(htmlIdentifier).appendChild(createPlankHTML());
    elem(cssIdentifier).appendChild(createPlankCSS());
}

function createPlankHTML() {
    var html = document.createElement('div');

    var content = [
        { c: '<div class=\"plank\">', i: 0 },
        { c: '<div>Om nom</div>', i: 1 },
        { c: '</div>', i: 0 }
    ];
    
    for (var i = 0; i < content.length; i++) {
        html.appendChild(generateLine(content[i].c, content[i].i));
    }

    return html;
}

function createPlankCSS() {
    var css = document.createElement('div');

    var content = [
        { c: '.plank {', i: 0 },
        { c: 'position: relative;', i: 1 },
        { c: 'top: calc(50% - 76px);', i: 1 },
        { c: '', i: 0 },
        { c: 'height: 20px;', i: 1 },
        { c: 'width: 0px;', i: 1 },
        { c: '', i: 0 },
        { c: 'padding-left: 80px;', i: 1 },
        { c: 'opacity: 0;', i: 1 },
        { c: '', i: 0 },
        { c: '-o-animation: expandPlank 5s linear 0s infinite;', i: 1 },
        { c: '-webkit-animation: expandPlank 5s linear 0s infinite;', i: 1 },
        { c: '-moz-animation: expandPlank 5s linear 0s infinite;', i: 1 },
        { c: 'animation: expandPlank 5s linear 0s infinite;', i: 1 },
        { c: '', i: 0 },
        { c: '-o-border-radius: 0 0 3px 3px;', i: 1 },
        { c: '-webkit-border-radius: 0 0 3px 3px;', i: 1 },
        { c: '-moz-border-radius: 0 0 3px 3px;', i: 1 },
        { c: 'border-radius: 0 0 3px 3px;', i: 1 },
        { c: '', i: 0 },
        { c: 'border-top: 2px solid rgb(146, 84, 62);', i: 1 },
        { c: 'background: rgb(121, 58, 33);', i: 1 },
        { c: 'margin: 20px auto 0 auto;', i: 1 },
        { c: '', i: 0 },
        { c: 'overflow: hidden;', i: 1 },
        { c: 'color: rgb(101, 28, 3);', i: 1 },
        { c: 'text-shadow: 0 1px 0 rgb(141, 68, 43);', i: 1 },
        { c: 'text-transform: uppercase;', i: 1 },
        { c: 'line-height: 20px;', i: 1 },
        { c: 'text-align: right;', i: 1 },
        { c: 'font-size: 9px;', i: 1 },
        { c: 'padding-right: 6px;', i: 1 },
        { c: '', i: 0 },
        { c: '-o-box-shadow: inset 0px 0px 15px 2.5px rgba(101, 28, 3, 0.7);', i: 1 },
        { c: '-webkit-box-shadow: inset 0px 0px 15px 2.5px rgba(101, 28, 3, 0.7);', i: 1 },
        { c: '-moz-box-shadow: inset 0px 0px 15px 2.5px rgba(101, 28, 3, 0.7);', i: 1 },
        { c: 'box-shadow: inset 0px 0px 15px 2.5px rgba(101, 28, 3, 0.7);', i: 1 },
        { c: '', i: 0 },
        { c: '-o-background-image: repeating-linear-gradient(45deg,', i: 1 },
        { c: 'rgb(141, 68, 43), rgb(141, 68, 43) 1em,', i: 2 },
        { c: 'rgb(136, 63, 38) 1em, rgb(136, 63, 38) 80%);', i: 2 },
        { c: '-webkit-background-image: repeating-linear-gradient(45deg,', i: 1 },
        { c: 'rgb(141, 68, 43), rgb(141, 68, 43) 1em,', i: 2 },
        { c: 'rgb(136, 63, 38) 1em, rgb(136, 63, 38) 80%);', i: 2 },
        { c: '-moz-background-image: repeating-linear-gradient(45deg,', i: 1 },
        { c: 'rgb(141, 68, 43), rgb(141, 68, 43) 1em,', i: 2 },
        { c: 'rgb(136, 63, 38) 1em, rgb(136, 63, 38) 80%);', i: 2 },
        { c: 'background-image: repeating-linear-gradient(45deg,', i: 1 },
        { c: 'rgb(141, 68, 43), rgb(141, 68, 43) 1em,', i: 2 },
        { c: 'rgb(136, 63, 38) 1em, rgb(136, 63, 38) 80%);', i: 2 },
        { c: '', i: 0 },
        { c: '-o-background-size: 2em 2em;', i: 1 },
        { c: '-webkit-background-size: 2em 2em;', i: 1 },
        { c: '-moz-background-size: 2em 2em;', i: 1 },
        { c: 'background-size: 2em 2em;', i: 1 },
        { c: '}', i: 0 },
        { c: '', i: 0 },
        { c: '@keyframes expandPlank {', i: 0 },
        { c: '0% { width: 0px; padding-left: 80px; opacity: 0; }', i: 1 },
        { c: '10% { width: 160px; padding-left: 0px; opacity: 1; }', i: 1 },
        { c: '100% { width: 160px; padding-left: 0px; opacity: 1; }', i: 1 },
        { c: '}', i: 0 }
    ];

    for (var i = 0; i < content.length; i++) {
        css.appendChild(generateLine(content[i].c, content[i].i));
    }

    return css;
}

/**
 * Utility
 */

function generateLine(content, indent = 0) {
    var div = document.createElement('div');
    var t = document.createTextNode(content);
    for (var i = 0; i < indent; i++) {
        div.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;" + div.textContent;
    }
    if (content.length === 0 && indent === 0) {
        div.innerHTML = "<div>&nbsp;</div>";
    }
    div.appendChild(t);
    return div;
}

function elem(identifier) {
    var x = document.getElementById(identifier);
    if (!x) {
        throw Error('Could not get identifier ' + identifier);
    }
    return x;
}