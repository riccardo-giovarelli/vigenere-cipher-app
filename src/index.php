<!DOCTYPE html>

<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>The Vigenère Cipher</title>
    <meta name="title" content="The Vigenère Cipher">
    <meta name="description" content="Vigenère Cipher implementation with step to step results visualization">
    <meta name="keywords" content="Vigenère,Vigenere,Cipher,PHP,JavaScript,jQuery,scss">
    <meta name="robots" content="index, follow">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="language" content="English">
    <meta name="author" content="Riccardo Giovarelli">
    <link rel="icon" href="img/favicon/favicon-32x32.png">
    <link rel="stylesheet" href="lib/semantic-ui@2.4.2/dist/semantic.min.css">
    <link rel="stylesheet" href="style/main.min.css">
</head>

<body>
    <header class="ui huge block center aligned header">The Vigenère Cipher</header>
    <main class="ui container">
        <div class="ui active dimmer box-hide" id="loader">
            <div class="ui large text loader">Loading</div>
        </div>
        <div class="ui grid form">

            <!-- Plain text-->
            <div class="row">
                <div class="sixteen wide column">
                    <textarea rows="6" id="plain_text" placeholder="Plain Text"></textarea>
                    <div class="ui pointing red basic label box-hide" id="plain_text_error"></div>
                </div>
            </div>

            <!-- Key-->
            <div class="row">
                <div class="twelve wide column">
                    <input type="text" id="key" placeholder="Key">
                    <div class="ui pointing red basic label box-hide" id="key_error"></div>
                </div>
                <div class="four wide column">
                    <div id="encrypt_button" class="ui bottom attached primary button disabled fc-encrypt-button" role="button" tabindex="0" title="Encrypt">
                        Encrypt
                    </div>
                </div>
            </div>

            <!-- Results-->
            <div class="row">
                <div class="sixteen wide column box-hide" id="encrypted_field">
                    <h4 class="ui dividing header box-hide" id="encrypted_title">
                        Encrypted Text
                    </h4>
                    <textarea rows="6" readonly id="encrypted_text" class="vc-encrypted-text"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="sixteen wide column box-hide" id="details_field">
                    <h4 class="ui dividing header box-hide" id="details_title">
                        Details
                    </h4>
                    <div class="details-container" id="details_container">
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>

<script src="lib/jquery@3.5.1/dist/jquery-3.5.1.min.js"></script>
<script src="lib/semantic-ui@2.4.2/dist/semantic.min.js"></script>
<script src="js/cipher.js"></script>
<script src="js/handlers.js"></script>

</html>