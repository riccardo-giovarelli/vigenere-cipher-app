$("#encrypt_button").click(function () {

    // Get values
    const key = $("#key").val();
    const plainText = $("#plain_text").val();

    if (key == '') {
        // No key provided
    } else if (plainText == '') {
        // No plain text provided
    } else {
        // Perform post call
        $.post("/cipher/cipher.php", { key: key, text: plainText })
            .done(function (response) {
                console.log(response)
            }).fail(function (response) {
                console.log(response);
            });
    }
});