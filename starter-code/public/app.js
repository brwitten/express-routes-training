console.log('app.js connected');

$(document).ready(function(){
  console.log('DOM ready');

  event.preventDefault();
  $.ajax({
    url: '/pick-a-number',
    method: 'GET',
    data: $('#guess-number-form').serialize(),
    success: handleSuccess,
    error: handleError
  });
});

function handleSuccess(guessResponse){
  console.log(guessResponse);
  $('#high-low-correct').html(guessResponse);
}

$('#target-number-form').on('submit', function(event){
  event.preventDefault();
  $.ajax({
    url: '/pick-a-number',
    method: 'POST',
    data: $('#target-number-form').serialize(),
    success: handleChangeSuccess,
    error: handleError
  });
});

function handleChangeSuccess(targetResponse){
  console.log(targetResponse);
  $('#target-number-form')[0].reset();
}

function handleError(jqXHR, status, error){
  console.log('error:', error);
}
});
