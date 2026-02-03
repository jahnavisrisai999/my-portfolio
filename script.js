  const form = document.querySelector("form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = form.querySelector('input[placeholder="Your Name"]').value;
    const email = form.querySelector('input[placeholder="Your Email"]').value;
    const message = form.querySelector('input[placeholder="Your Message"]').value;
    if(name && email && message) {
        successMessage.style.display = "block";
        successMessage.textContent = `✅ Thank you, ${name}! Your message has been received. I'll reply to ${email} soon.`;
        form.reset();
    } else {
        successMessage.style.display = "block";
        successMessage.style.color = "red";
        successMessage.textContent = "⚠️  Please fil out ll fields before sending.";
    }
    });