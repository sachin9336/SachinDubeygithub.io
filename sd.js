<script>
document.getElementById("myForm").addEventListener"submit", function(event) {
    event.preventDefault() // Prevent form submission
}
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Do something with the form data (e.g., send it to a server)
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
    
    // Reset form
    document.getElementById("myForm").reset();
;
</script>