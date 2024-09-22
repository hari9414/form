document.getElementById("userForm").addEventListener("submit", function(event){
    event.preventDefault();  // Prevent form submission for demonstration
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if(name === "" || email === "") {
        alert("Please fill in all the required fields");
    } else {
        alert("Form submitted successfully!");
    }
});
