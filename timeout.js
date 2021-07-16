function timeOutClosures() {
    for (var i = 1; i <= 5; i++) {
        function printIWithTimer(i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);

        }
        printIWithTimer(i);
    }
    console.log("Namaste Javascript");

}
timeOutClosures();
