

function validateForm() {
    // Get form elements
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const occupation = document.getElementById("occupation").value.trim();
    const address = document.getElementById("address").value.trim();
    const income = document.getElementById("income").value.trim();
    const wallet = document.getElementById("wallet").value.trim();

    // Check if any field is empty
    if (name === "" || email === "" || phone === "" || occupation === "" || address === "" || income === "" || wallet === "") {
        alert("Please fill in all fields.");
        return false; // Prevents the form from proceeding
    } else {
        // Proceed to next page if all fields are filled
        window.location.href = "review.html";
    }
}



function goToNext() {
    // Validate file upload if required
    const fileInput = document.getElementById("idUpload");
    if (fileInput.files.length > 0) {
        window.location.href = "confirmation.html";
    } else {
        alert("Please upload your ID for authentication.");
    }
}

function proceedToPayment() {
    alert("ID under review. Further instructions will follow.");
    // Redirect to the next page if necessary
    // window.location.href = "finalPage.html"; // Uncomment if there's a next page
}
