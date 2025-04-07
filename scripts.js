// DOM Elements
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const responseMessage = document.getElementById("response-message");
const resetFormBtn = document.getElementById("reset-form-btn");

// Event Listeners
contactForm.addEventListener("submit", handleSubmit);
resetFormBtn.addEventListener("click", resetForm);

// Validate Form
function validateForm() {
    let isValid = true;

    // Name Validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email";
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Message Validation
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Message is required";
        messageError.style.display = "block";
        isValid = false;
    } else {
        messageError.style.display = "none";
    }

    return isValid;
}

// Handle Form Submission
function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
        // Simulate form submission (in a real app, use fetch/axios)
        contactForm.style.display = "none";
        responseMessage.classList.remove("hidden");
    }
}

// Reset Form
function resetForm() {
    contactForm.reset();
    contactForm.style.display = "block";
    responseMessage.classList.add("hidden");
}
// DOM Elements
const changeColorBtn = document.getElementById("change-color-btn");
const addItemBtn = document.getElementById("add-item-btn");
const dynamicList = document.getElementById("dynamic-list");

// Event Listeners
changeColorBtn.addEventListener("click", changeBackgroundColor);
addItemBtn.addEventListener("click", addNewItem);

// Change Background Color
function changeBackgroundColor() {
    const colors = ["#f4f4f4", "#e6f7ff", "#fff2e6", "#f0fff0"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Add New Item to List
function addNewItem() {
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${dynamicList.children.length + 1}`;
    dynamicList.appendChild(newItem);
}