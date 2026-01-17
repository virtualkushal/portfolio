function sendMail(event){
    event.preventDefault(); 

    
       const params = {
        title:document.getElementById("email").value, 
    name: document.getElementById("name").value,   
    message: document.getElementById("message").value, 
    email: document.getElementById("email").value,  
                
};


    emailjs.send("service_hhpgnuo", "template_zyucwx8", params)
        .then(function(response){
            alert("Email has been sent successfully!");
            document.getElementById("contactForm").reset(); // Clear form
        }, function(error){
            alert("Oops! Something went wrong. Please try again.");
            console.error("EmailJS Error:", error);
        });
}
