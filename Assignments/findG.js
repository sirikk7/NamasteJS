function removeSpace(str) {
    var string1 = str.trim()
    console.log(string1);

    let found = false;
    for (let ch of string1) {
        if (ch == "g") {
            found = true;
            break;
        }
    }
    if (found) {

        console.log("Found");

    } else {
        console.log("NotFound");

    }


}

var str = "    i am    an   indian    ";

var str2 = " i   will      get a    job   be    dec   31  ";
removeSpace(str);
removeSpace(str2);