function removeSpace(str) {
    var string1 = str.trim()
    console.log(string1);

    let ans = "";

    let prev = "";
    for (let ch of string1) {
        if (ch == " " &&  prev == " " ) {
            //ignore
        } else {
            ans = ans + ch
        }
        prev = ch;
    }
    console.log(ans);
}

var str = "    i am    an                                indian    ";
var str2 = " i   will      get a    job       be         dec   31  ";
removeSpace(str);
removeSpace(str2);