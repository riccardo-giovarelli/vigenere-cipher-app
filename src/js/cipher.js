/**
 * Show answer in UI
 * 
 * @param {String} response Answer to display
 */
function showAnswer(response) {

    response.textInfo.forEach(element => {
        const table =
            '<table class="ui celled table vc-shadow">' +
            '<thead ></thead>' +
            '<tbody>' +
            '<tr>' +
            '<td data-label="Plain text label" >Plain text</td>' +
            '<td data-label="Plain text" class="vc-plain-color vc-center vc-bold">' + element.plain + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td data-label="Key letter label" >Key letter</td>' +
            '<td data-label="Key letter" class="vc-info-color vc-center">' + element.key + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td data-label="Shift label" >Shift</td>' +
            '<td data-label="Shift" class="vc-info-color vc-center">' + element.shift + '</td>' +
            '</tr>' +
            '<tr>' +
            '<td data-label="Encrypted text label" >Encrypted text</td>' +
            '<td data-label="Encrypted" class="vc-encrypted-color vc-center vc-bold">' + element.encrypted + '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table >';

        $('#result_container').append('<div class="four wide column">' + table + '</div>');
    });
}