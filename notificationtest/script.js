function askNotificationPermission() {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support notifications.");
        return;
    }
    Notification.requestPermission().then((permission) => {
        // set the button to shown or hidden, depending on what the user answers
        console.log(permission);
        if (permission === "granted") {
            setTimeout(() => {
                // const notification = new Notification("To do list");
                registration.showNotification("Hello World", {
                    body: "My first notification on iOS",
                  });
            }, 10000);
            
        }
    });
};

function init() {
    const clickable = document.getElementById('enable');

    clickable.addEventListener("click", askNotificationPermission);
};
