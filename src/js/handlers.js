let keyStatus = 99;
let textStatus = 99;
const keyCheckRegex = /[^A-zòàùèéì]+/i;
const textMaxChar = 4500;
const keyMaxChar = 20;
const errorPlainTextEmpty = 'Please fill the plain text field';
const errorKeyEmpty = 'Please fill the key field';
const errorAlphabeticKey = 'Only alphabetic character allowed for the key';
const errorTextTooLong = 'The plain text can\'t exceed ' + textMaxChar + ' characters.';
const errorKeyTooLong = 'The key can\'t exceed ' + keyMaxChar + ' characters.';

// Encrypt button <CLICK> \\
$("#encrypt_button").click(function () {
    if (keyStatus == 2) {
        $('#plain_text_error').text(errorKeyEmpty);
        $('#key_error').removeClass('box-hide');
    }
    if (textStatus == 2) {
        $('#plain_text_error').text(errorPlainTextEmpty);
        $('#plain_text_error').removeClass('box-hide');
    }
    if (keyStatus == 0 && textStatus == 0) {
        $('#loader').removeClass('box-hide');
        $('#result_container').empty();
        $.post("/cipher/cipher.php", {
            key: $("#key").val(),
            text: $("#plain_text").val()
        }, function (response) {
            showAnswer(response);
            $('#loader').addClass('box-hide');
        }).fail(function () {
            $('#loader').addClass('box-hide');
        });
    }
});

// Key input <CHANGE> \\
$('#key').on('input', function (key) {
    if (key.currentTarget.value.length == 0) {
        keyStatus = 2;
    } else if (keyCheckRegex.test(key.currentTarget.value)) {
        $('#key_error').text(errorAlphabeticKey);
        $('#key_error').removeClass('box-hide');
        keyStatus = 1;
    } else if (key.currentTarget.value.length > keyMaxChar) {
        $('#key_error').text(errorKeyTooLong + ' (' + key.currentTarget.value.length + ' now)');
        $('#key_error').removeClass('box-hide');
        keyStatus = 3;
    } else {
        keyStatus = 0;
    }
    showStatus(keyStatus, textStatus);
});


// Plain text <CHANGE> \\
$('#plain_text').on('input', function (text) {
    if (text.currentTarget.value.length > textMaxChar) {
        $('#plain_text_error').text(errorTextTooLong + ' (' + text.currentTarget.value.length + ' now)');
        $('#plain_text_error').removeClass('box-hide');
        textStatus = 1;
    } else if (text.currentTarget.value.length == 0) {
        textStatus = 2;
    } else {
        textStatus = 0;
    }
    showStatus(keyStatus, textStatus);
});