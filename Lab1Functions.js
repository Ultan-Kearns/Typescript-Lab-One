countString("ultan ");
countStringNoSpace("Test 1");
combinedStringCount("ultan  ", true);
combinedStringCount("ultan  ", false);
function countString(x) {
    console.log("Size of string with spaces " + x.length);
}
function countStringNoSpace(x) {
    var size = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] != " ") {
            size++;
        }
    }
    console.log("Size of string with no spaces is " + size);
}
function combinedStringCount(x, y) {
    if (y == true) {
        var size = 0;
        for (var i = 0; i < x.length; i++) {
            if (x[i] != " ") {
                size++;
            }
        }
        console.log("Size of combined string with no spaces is " + size);
    }
    else {
        console.log("Size of combined string with spaces " + x.length);
    }
}
