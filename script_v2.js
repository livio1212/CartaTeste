const envelopeWrapper = document.querySelector(".envelope-wrapper");
const letter = document.querySelector(".letter");

document.addEventListener("click", (e) => {
    if (
        e.target.matches(".envelope") ||
        e.target.matches(".flap-right") ||
        e.target.matches(".flap-left") ||
        e.target.matches(".heart")
    ) {
        envelopeWrapper.classList.toggle("open");
    } else if (e.target.matches(".envelope *")) {
        if (!letter.classList.contains("open-letter")) {
            letter.classList.add("show-letter");

            setTimeout(() => {
                letter.classList.remove("show-letter");
                letter.classList.add("open-letter");
            }, 500);

            envelopeWrapper.classList.add("disable-envelope");
        } else {
            letter.classList.add("closing-letter");
            envelopeWrapper.classList.remove("disable-envelope");

            setTimeout(() => {
                letter.classList.remove("closing-letter");
                letter.classList.remove("open-letter");
            }, 500);
        }
    }
});
