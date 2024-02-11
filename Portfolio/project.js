document.addEventListener('DOMContentLoaded', function() {
    const Middlescroll = document.getElementById('middle');

    Middlescroll.addEventListener('click', function(event) {
        event.preventDefault();

        window.scrollTo({
            top: document.body.scrollHeight / 2,
            behavior: 'smooth'
        });
    });
});


