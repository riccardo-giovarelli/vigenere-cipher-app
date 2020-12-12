<?php

// The valid char
$alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function encrypChar($textCharEncoded, $keyCharEncoded, $alphabet)
{
    $position = ($textCharEncoded + $keyCharEncoded - 1) % count($alphabet);
    return $alphabet[$position];
}

/**
 * Convert chars to integer
 * 
 * @param   string  Char to convert
 * @return  int     Integer matching char 
 */
function encodeChar($char)
{
    switch (strtolower($char)) {
        case 'a':
        case 'à':
            return 1;
        case 'b':
            return 2;
        case 'c':
            return 3;
        case 'd':
            return 4;
        case 'e':
        case 'è':
        case 'é':
            return 5;
        case 'f':
            return 6;
        case 'g':
            return 7;
        case 'h':
            return 8;
        case 'i':
        case 'ì':
            return 9;
        case 'j':
            return 10;
        case 'k':
            return 11;
        case 'l':
            return 12;
        case 'm':
            return 13;
        case 'n':
            return 14;
        case 'o':
        case 'ò':
            return 15;
        case 'p':
            return 16;
        case 'q':
            return 17;
        case 'r':
            return 18;
        case 's':
            return 19;
        case 't':
            return 20;
        case 'u':
        case 'ù':
            return 21;
        case 'v':
            return 22;
        case 'w':
            return 23;
        case 'x':
            return 24;
        case 'y':
            return 25;
        case 'z':
            return 26;
        default:
            return 0;
    }
}
