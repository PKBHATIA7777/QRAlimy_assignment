$(document).ready(function() {
    // Mobile menu toggle
    $('.mobile-menu-btn').click(function() {
        $('nav ul').toggleClass('show');
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        $('nav ul').removeClass('show');
        
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 800);
        }
    });

    // Toggle QR code info
    $('#show-qr-info').click(function() {
        $('#qr-info').toggleClass('active');
        $(this).text(function(i, text) {
            return text === "More About QR Codes" ? "Hide Info" : "More About QR Codes";
        });
    });

    // Form submission
    $('#parking-form').submit(function(e) {
        e.preventDefault();
        
        // Simulate form processing
        const formData = $(this).serialize();
        
        // Show loading state
        $(this).find('button[type="submit"]').html('<i class="fas fa-spinner fa-spin"></i> Processing...');
        
        // AJAX submission to PHP backend
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: formData,
            success: function(response) {
                // Hide form and show success message
                $('#parking-form').hide();
                $('#form-success').removeClass('hidden');
                
                // For demo purposes, log the response
                console.log('Form submitted successfully:', response);
            },
            error: function(xhr, status, error) {
                alert('There was an error submitting your form. Please try again.');
                console.error('Form submission error:', error);
                $('#parking-form').find('button[type="submit"]').text('Generate My QR Code');
            }
        });
    });

    // Sticky header on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
});
