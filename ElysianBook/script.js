
/* =====================================================
   THE ELYSIAN LETTERBOOK
===================================================== */


/* =====================================================
   1. BOOK SETTINGS
===================================================== */

const pages = document.querySelectorAll(".page");

let currentPage = 0;

const totalPages = pages.length;


/* =====================================================
   2. RESPONSE SETTINGS
===================================================== */

// Has the reader already selected a response?

let responseSelected = false;


/* =====================================================
   3. DISPLAY A PAGE
===================================================== */

function showPage(pageIndex) {

    if (pageIndex < 0 || pageIndex >= totalPages) {
        return;
    }


    // Hide all pages.

    pages.forEach(function (page) {

        page.classList.remove("active");

    });


    // Display the requested page.

    pages[pageIndex].classList.add("active");


    // Update current page.

    currentPage = pageIndex;


    // Return to the top.

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =====================================================
   4. NEXT PAGE
===================================================== */

function nextPage() {

    if (currentPage < totalPages - 1) {

        showPage(currentPage + 1);

    }

}


/* =====================================================
   5. PREVIOUS PAGE
===================================================== */

function previousPage() {

    if (currentPage > 0) {

        showPage(currentPage - 1);

    }

}


/* =====================================================
   6. RESTART BOOK
===================================================== */

function restartBook() {

    clearResponse();

    showPage(0);

}


/* =====================================================
   8. HANDLE RESPONSE
===================================================== */


function chooseResponse(choice) {

    // Prevent selecting a response more than once.

    if (responseSelected) {
        return;
    }

    const responseMessage = document.getElementById(
        "response-message"
    );

    const yesButton = document.getElementById(
        "yes-button"
    );

    const noButton = document.getElementById(
        "no-button"
    );

    if (!responseMessage || !yesButton || !noButton) {
        return;
    }

    // Lock the response buttons.

    responseSelected = true;

    yesButton.disabled = true;
    noButton.disabled = true;

    // Show a different message for each choice.

    if (choice === "yes") {

        responseMessage.innerHTML = `
            <p>
                If you'd be open to it, I'd be really happy
                to hear from you.
            </p>

            <p>
                Feel free to message me on TikTok whenever
                you're comfortable. I'd love to hear your
                thoughts, talk with you, and get to know
                you a little better.
            </p>

            <p>
                No rush at all. Take your time. ♡
            </p>
        `;

        yesButton.classList.add("selected-response");

    } else if (choice === "no") {

        responseMessage.innerHTML = `
            <p>
                Thank you for taking the time to read
                my little book and for being honest
                with yourself.
            </p>

            <p>
                If there's anything you'd like to tell me
                or share about your thoughts, you're welcome
                to message me. I'd appreciate hearing from
                you, but please don't feel that you owe me
                an explanation or a reply.
            </p>

            <p>
                Whatever your answer, I'll respect it.
                I sincerely wish you well. ♡
            </p>
        `;

        noButton.classList.add("selected-response");

    }

    // Reveal the message.

    responseMessage.style.display = "block";

    responseMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}



/* =====================================================
   9. CLEAR RESPONSE
===================================================== */

function clearResponse() {


    // Reset the response lock.

    responseSelected = false;


    // Find the response elements.

    const responseMessage = document.getElementById(
        "response-message"
    );

    const yesButton = document.getElementById(
        "yes-button"
    );

    const noButton = document.getElementById(
        "no-button"
    );


    // Clear the message.

    if (responseMessage) {

        responseMessage.textContent = "";

        responseMessage.style.display = "none";

    }


    // Enable the buttons again.

    if (yesButton) {

        yesButton.disabled = false;

        yesButton.classList.remove("selected-response");

    }


    if (noButton) {

        noButton.disabled = false;

        noButton.classList.remove("selected-response");

    }

}


/* =====================================================
   10. KEYBOARD NAVIGATION
===================================================== */

document.addEventListener("keydown", function (event) {


    // Right arrow.

    if (event.key === "ArrowRight") {

        nextPage();

    }


    // Left arrow.

    if (event.key === "ArrowLeft") {

        previousPage();

    }

});


/* =====================================================
   11. INITIALIZE BOOK
===================================================== */

showPage(0);
