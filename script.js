// filepath: c:\Users\HP\Documents\Protofilo\script.js
document.addEventListener('DOMContentLoaded', function() {
    const roles = ["Coder", "Designer", "Developer"];
    const typedTextSpan = document.querySelector(".typed-text");
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delayEnd = 2000;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = delayEnd;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

        setTimeout(type, typeSpeed);
    }

    type();

    // Secret button easter egg
    const secretBtn = document.getElementById('secret-btn');
    if (secretBtn) {
        secretBtn.addEventListener('click', function() {
            alert("Fuck You Nigga");
            // window.location.href = "tic-tac-toe.html"; // Uncomment to redirect
        });
    }

});