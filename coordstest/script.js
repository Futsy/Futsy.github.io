
function init() {
    const container = document.getElementById('container');

    setInterval(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            container.innerText += '\n getCurrentPosition()' + new Date().toISOString() + ', coords latitude: ' + position.coords.latitude + ', coords longitude: ' + position.coords.longitude;
        });
    }, 5000);
    

    const watchID = navigator.geolocation.watchPosition((position) => {
        container.innerText += '\n' + new Date().toISOString() + ', coords latitude: ' + position.coords.latitude + ', coords longitude: ' + position.coords.longitude;
    });
};