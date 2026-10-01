// =========================================
// MOBILE NAVIGATION
// =========================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu when a link is clicked

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// Copy the contact email on request

const copyEmailButton = document.querySelector("[data-copy-email]");

if (copyEmailButton) {
    copyEmailButton.addEventListener("click", async function () {
        const email = copyEmailButton.dataset.copyEmail;

        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(email);
            } else {
                const temporaryInput = document.createElement("textarea");
                temporaryInput.value = email;
                temporaryInput.setAttribute("readonly", "");
                temporaryInput.style.position = "fixed";
                temporaryInput.style.opacity = "0";
                document.body.appendChild(temporaryInput);
                temporaryInput.select();
                const copied = document.execCommand("copy");
                temporaryInput.remove();

                if (!copied) {
                    throw new Error("Clipboard copy failed");
                }
            }

            copyEmailButton.textContent = "Copied!";
            copyEmailButton.setAttribute("aria-label", "Email address copied");
            window.setTimeout(function () {
                copyEmailButton.textContent = "Copy email";
                copyEmailButton.setAttribute("aria-label", "Copy email address");
            }, 2000);
        } catch (error) {
            copyEmailButton.textContent = "Select the email to copy";
            copyEmailButton.setAttribute(
                "aria-label",
                "Copy failed. Long press the email address to select and copy."
            );
        }
    });
}
