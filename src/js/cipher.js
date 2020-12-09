/**
 * Display message in UI
 * 
 * @param {String} type     String error|success
 * @param {String} message  Message to display
 */
function msgBox(type, message) {
    $('#' + type + '_box').text(message);
    if ($('#' + type + '_box').hasClass('box-hide')) {
        $('#' + type + '_box').removeClass('box-hide');
    }
}

/**
 * Show answer in UI
 * 
 * @param {String} type     String error|success
 * @param {String} response Answer to display
 */
function showAnswer(type, response) {
    $('#cipher_text').text(response);
}