const envelopeWrapper = document.querySelector(".envelope-wrapper");
const letter = document.querySelector(".letter");
const music = document.getElementById("love-song");

document.addEventListener("click", (e) => {
    if (
        e.target.matches(".envelope") ||
        e.target.matches(".flap-right") ||
        e.target.matches(".flap-left") ||
        e.target.matches(".heart")
    ) {
        envelopeWrapper.classList.toggle("open");
        envelopeWrapper.classList.add("disable-envelope");

        if (music.paused) {
            music.play();
            volume = 0.5; 
        }

        if (!letter.classList.contains("open-letter")) {
            setTimeout(() => {
                letter.classList.add("show-letter");

                setTimeout(() => {
                    letter.classList.remove("show-letter");
                    letter.classList.add("open-letter");
                }, 500);
            }, 1000);
        }
    } else if (e.target.matches(".envelope-wrapper *")) {
        envelopeWrapper.classList.remove("open");
        envelopeWrapper.classList.remove("disable-envelope");
        if (letter.classList.contains("open-letter")) {
            letter.classList.add("closing-letter");

            setTimeout(() => {
                letter.classList.remove("closing-letter");
                letter.classList.remove("open-letter");
            }, 500);
        }
    }
});
