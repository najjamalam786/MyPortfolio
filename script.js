
    function sendMail(){
        var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("textarea").value,
        }
        const serviceID = "service_g6v0ajw"
        const templateID = "template_vg394e9"

        emailjs
            .send(serviceID, templateID, params)
            .then(function (res) {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("textarea").value = "";
                console.log(res);
                alert("your message sent successfully")

            })
            // .catch((err) => console.log(err));
    }
