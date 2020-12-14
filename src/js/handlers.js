const keyCheckRegex = /[^A-zòàùèéì]+/gi;
const errorAlphabeticKey = 'Only alphabetic character allowed for the key';
const errorPlainTextEmpty = 'Please fill the plain text field';
const errorKeyEmpty = 'Please fill the key field';
let keyIsGood = false;

// Encrypt button <CLICK> \\
$("#encrypt_button").click(function () {
    // Get values
    const key = $("#key").val();
    const plainText = $("#plain_text").val();
    // Check if plain text is filled
    if (plainText == '') {
        $('#plain_text_error').text(errorPlainTextEmpty);
        if ($('#plain_text_error').hasClass('box-hide')) {
            $('#plain_text_error').removeClass('box-hide');
        }
    }
    // Check if key is filled
    if (key == '') {
        $('#key_error').text(errorKeyEmpty);
        if ($('#key_error').hasClass('box-hide')) {
            $('#key_error').removeClass('box-hide');
        }
    }

    // Handle data
    if (plainText != '' && key != '' && keyIsGood) {
        $.post("/cipher/cipher.php", { key: key, text: plainText })
            .done(function (response) {
                showAnswer(response);
            }).fail(function (response) {
                showAnswer(response);
            });
    }
});

// Key input <CHANGE> \\
$('#key').on('input', function (key) {
    if (keyCheckRegex.test(key.currentTarget.value)) {
        keyIsGood = false;
        $('#key_error').text(errorAlphabeticKey);
        if ($('#key_error').hasClass('box-hide')) {
            $('#key_error').removeClass('box-hide');
        }
    } else {
        keyIsGood = true;
        if (!$('#key_error').hasClass('box-hide')) {
            $('#key_error').addClass('box-hide');
        }
    }
});

// Plain text <CHANGE> \\
$('#plain_text').on('input', function (key) {
    if (!$('#plain_text_error').hasClass('box-hide')) {
        $('#plain_text_error').addClass('box-hide');
    }
});