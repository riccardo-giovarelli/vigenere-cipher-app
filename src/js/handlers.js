$("#encrypt_button").click(function () {

    // Get values
    const key = $("#key").val();
    const plainText = $("#plain_text").val();

    // Handle data
    if (plainText == '') {
        msgBox('error', 'Please fill the plain text field');
    } else if (key == '') {
        msgBox('error', 'Please fill the key field');
    } else {
        $.post("/cipher/cipher.php", { key: key, text: plainText })
            .done(function (response) {
                showAnswer('success', response);
            }).fail(function (response) {
                showAnswer('error', response);
            });
    }
});