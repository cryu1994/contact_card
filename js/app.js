$(document).ready(function () {
    $('form').submit(function () {
        var first = $('#first_name').val();
        var last = $('#last_name').val();
        var descrip = $('#description').val();
            $('#row').append('<div class="cards"><h3 class="firstname" class="">'+first+" "+'</h3><h3 class="lastname" class="">'+ last +'</h3><h3 class="hidden des">'+ descrip +'</h3></div>');
        return false;
    });
    $(document).on('click', '.cards', function () {
        $(this).children().toggleClass('hidden');
        // $('.lastname').toggleClass('hidden');
        // $('.des').toggleClass('hidden');
    });
});