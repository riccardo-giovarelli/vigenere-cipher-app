function showStatus(keyStatus, textStatus) {
    if (keyStatus == 0 && textStatus == 0) {
        $('#encrypt_button').removeClass('disabled');
    } else {
        $('#encrypt_button').addClass('disabled');
    }
    if (keyStatus == 0) {
        $('#key_error').addClass('box-hide');
    }
    if (textStatus == 0) {
        $('#plain_text_error').addClass('box-hide');
    }
}

/**
 * Show answer in UI
 * 
 * @param {String} response Answer to display
 */
function showAnswer(response) {

    $('#encrypted_field').removeClass('box-hide');
    $('#details_field').removeClass('box-hide');
    $('#details_title').removeClass('box-hide');
    $('#encrypted_title').removeClass('box-hide');
    $('#encrypted_text').val(response.textEncrypted);
    $('#details_container').empty();

    response.textInfo.forEach((element, index) => {
        const table =
            '<table class="ui celled table vc-shadow wc-item-table">' +
            '<thead >' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td data-label="Step label" class="vc-plain-color vc-bolder">STEP NUMBER</td>' +
            '<td data-label="Step" class="vc-center vc-bold vc-plain-color vc-bolder">' + index + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td data-label="Plain text label" class="vc-underline">Plain text</td>' +
            '<td data-label="Plain text" class="vc-center">' + element.plain + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td data-label="Key letter label" >Key</td>' +
            '<td data-label="Key letter" class="vc-center">' + element.key + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td data-label="Shift label" >Shift</td>' +
            '<td data-label="Shift" class="vc-center">' + element.shift + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td data-label="Encrypted text label" class="vc-underline">Encrypted text</td>' +
            '<td data-label="Encrypted" class="vc-center">' + element.encrypted + '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table >';

        const content = '<div class="vc-content-box">' +
            '<div class="vc-table-column">' + table + '</div>' +
            '<div class="vc-icon-column">' +
            '<img class="ui image vc-icon-image" src="img/icon/arrow-right-s-line.svg" />' +
            '</div>' +
            '</div>'
        $('#details_container').append(content);
    });
}