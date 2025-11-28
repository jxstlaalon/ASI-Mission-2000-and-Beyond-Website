// 1. Array to store user information
const submissionArray = [];

// Bible Text Collection
const bibleText = [
    "Romans 8:28 - And we know that for those who love God all things work together for good, for those who are called according to His purpose.",
    "Joshua 1:9 - Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go.",
    "Proverbs 3:5-6 - Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge Him, and He will make straight your paths.",
    "Isaiah 41:13 - For I, the LORD your God, hold your right hand; it is I who say to you, 'Fear not, I am the one who helps you.'",
    "1 Peter 5:6-7 - Humble yourselves, therefore, under the mighty hand of God so that at the proper time He may exalt you, casting all your anxieties on Him, because He cares for you.",
    "Isaiah 41:10 - So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    "John 15:5 - I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.",
    "Proverbs 14:23 - All hard work brings a profit but mere talk leads to poverty."
];

// Helper function to handle Modal Visibility
const modal = document.getElementById("statusModal");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");
const modalUserData = document.getElementById("modal-user-data");
const modalHumorDiv = document.getElementById("modal-humor");
const okBtn = document.getElementById("ok-btn");

// Close modal on button click
okBtn.onclick = function () {
    modal.classList.add("hidden");
};

// Close modal if clicking outside the box
window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.add("hidden");
    }
};

function submit_ContactForm() {
    // 2. Take user information from the form
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const addressInput = document.getElementById("address");
    const phoneInput = document.getElementById("phone");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const address = addressInput.value.trim();
    const phone = phoneInput.value.trim();

    // 3. Validation Logic
    let errors = [];

    if (name === "") {
        errors.push("Name is required.");
    }

    if (address === "") {
        errors.push("Address is required.");
    }

    // Basic Email Regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        errors.push("Email is required.");
    } else if (!emailPattern.test(email)) {
        errors.push("Please enter a valid email address.");
    }

    if (message === "") {
        errors.push("Message is required.");
    }

    //Phone number validation (simple)
    const phonePattern = /^\+?[0-9\s\-()]{7,15}$/;
    if (phone === "") {
        errors.push("Tel No. is required.");
    } else if (phone.length < 7) {
        errors.push("Phone number is too short.");
    } else if (!phonePattern.test(phone)) {
        errors.push("Please enter a valid phone number.");
    }

    // Handle Validation Failures
    if (errors.length > 0) {
        modalTitle.innerText = "Please check your inputs";
        modalTitle.classList.add("text-red-600");
        modalTitle.classList.remove("text-gray-900");

        // Format errors as a list
        modalMessage.innerHTML = `<ul class="list-disc list-inside text-red-500 text-left">${errors
            .map((e) => `<li>${e}</li>`)
            .join("")}</ul>`;

        modalUserData.classList.add("hidden");
        modalHumorDiv.classList.add("hidden");
        modal.classList.remove("hidden");
        return; // Stop execution
    }

    // 4. Store Valid Data
    const userData = {
        id: Date.now(), // Simple unique ID
        name: name,
        address: address,
        phone: phone,
        email: email,
        message: message,
        timestamp: new Date().toLocaleString(),
    };

    submissionArray.push(userData);
    console.log("Current Submissions:", submissionArray);

    // 5. Success UI
    modalTitle.innerText = "Message Sent Successfully!";
    modalTitle.classList.remove("text-red-600");
    modalTitle.classList.add("text-green-700");

    modalMessage.innerHTML =
        "We've received your message and will get back to you in <strong>1-3 business days</strong>.";

    // Show user what they entered
    modalUserData.innerHTML = `
            <h4 class="font-bold text-gray-700 mb-1 border-b pb-1">You Submitted:</h4>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Tel No.:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;
    modalUserData.classList.remove("hidden");

    // 6. Bible Text
    const randomJoke =
        bibleText[Math.floor(Math.random() * bibleText.length)];
    modalHumorDiv.innerHTML = `<strong>😇 Bible Text:</strong><br>"${randomJoke}"`;
    modalHumorDiv.classList.remove("hidden");

    // Show the modal
    modal.classList.remove("hidden");

    // Clear the form fields
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
}