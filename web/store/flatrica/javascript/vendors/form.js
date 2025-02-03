document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем действие по умолчанию

    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const serviceID = 'YOUservice_#'; // Замените на ваш Service ID
    const templateID = 'template_#'; // Замените на ваш Template ID

    emailjs.send('YOUservice_#', 'template_#', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById('responseMessage').innerHTML = 
                    '<div class="alert alert-success">Сообщение успешно отправлено!</div>';
                document.getElementById('contact-form').reset();
            }, function(error) {
                console.log('FAILED...', error);
                document.getElementById('responseMessage').innerHTML = 
                    '<div class="alert alert-danger">Ошибка при отправке: ' + error.text + '</div>';
            })
    .then(() => {
        document.getElementById("responseMessage").innerText = "Сообщение отправлено!";
        document.getElementById("responseMessage").style.color = "green";
        resetForm();
    }, (error) => {
        document.getElementById("responseMessage").innerText = "Ошибка отправки сообщения!";
        document.getElementById("responseMessage").style.color = "red";
    });
});

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
