function validateForm() {
    const email = document.getElementById("email").value;
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

