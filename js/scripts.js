document.getElementById("openLink").addEventListener("click", function (event) {
    event.preventDefault();
    window.open(
        "https://drive.google.com/drive/folders/100LCbejqbgbXmTQa1h5Wu5vyV_kS1Bpw?usp=drive_link",
        "_blank",
        "noopener,noreferrer",
    );
});

const audio = document.querySelector("audio");

audio.volume = 0.1;
