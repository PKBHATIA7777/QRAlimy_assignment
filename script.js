$(document).ready(function () {

    // Toggle extra info section
    $('#toggleExtra').on('click', function () {
      $('#extraInfo').slideToggle();
      $(this).text(function(i, text){
        return text === "Show More" ? "Show Less" : "Show More";
      });
    });
  
    // Smooth scroll to features
    $('#learnMoreBtn').on('click', function () {
      $('html, body').animate({
        scrollTop: $('#features').offset().top - 60
      }, 1000);
    });
  
    // AJAX form submission
    $('#parkingForm').on('submit', function (e) {
      e.preventDefault();
  
      $.post($(this).attr('action'), $(this).serialize(), function (data) {
        $('#responseMessage').html(data);
      }).fail(function () {
        $('#responseMessage').html('<span style="color:red;">Error submitting data. Please try again later.</span>');
      });
    });
  });