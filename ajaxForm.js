$(function() {
   $('#submit').click(function(e) {
       e.preventDefault();
        $.ajax({
            url: "https://formspree.io/wuprc@i.ua", 
            method: "POST",
            data: {
                name:         $('#name').val(),
                email   :     $('#email').val(),
                phoneNumber:  $('#phoneNumber').val(),
                comment:      $('#comment').val()
            },
            dataType: "json"
        }).done(function() {
            $('#contactForm').html('<div id="message"><h1>Thank you for cooperation!</h1><p>We will contact you as soon as possible.</p></div>')
        });
       
   }); 
});