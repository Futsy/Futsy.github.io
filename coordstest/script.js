
function init() {
    const container = document.getElementById('container');

    const watchID = navigator.geolocation.watchPosition((position) => {
        container.innerText += '\n' + new Date().toISOString() + ', coords latitude: ' + position.coords.latitude + ', coords longitude: ' + position.coords.longitude;
    });
};