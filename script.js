document.addEventListener("DOMContentLoaded", function () {
    // --------- FORM (pagina inserisci-scarpe.html) ---------
    const form = document.querySelector(".upload-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault(); // blocca l'invio reale

            // Se mancano dati, mostra errori HTML
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            // Conferma finta d'invio
            alert("Scarpa inserita con successo!");

            // Svuota il form
            form.reset();
        });
    }

    // --------- SLIDER (pagina scarpe.html) ---------
    const slider = document.querySelector(".shoe-slider");
    const slides = document.querySelectorAll(".shoe-item");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    if (slider && slides.length > 1) {
        let currentIndex = 0;

        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function showNext() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        }

        function showPrev() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider();
        }

        nextBtn.addEventListener("click", showNext);
        prevBtn.addEventListener("click", showPrev);

        // Avanzamento automatico
        setInterval(showNext, 5000);
    }
});
