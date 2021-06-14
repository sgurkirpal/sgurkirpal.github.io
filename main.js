$(document).ready(function() {

    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3000);

});

function typeWriter() {
    var sam = l[i];

    if (j < sam.length && ww == 0) {
        document.getElementById("type_here").innerHTML += sam.charAt(j);
        j++;
        if (j == sam.length) {
            setTimeout(typeWriter, 600);
            return;
        }
        setTimeout(typeWriter, 100);
        return;
    }
    if (j == sam.length) {
        ww = 1;
    }
    if (ww == 1) {
        document.getElementById("type_here").innerHTML = document.getElementById("type_here").innerHTML.slice(0, -1);
        j--;
        if (j == -1) {
            ww = 0;
            i = (i + 1) % 4;
        }

        setTimeout(typeWriter, 50);
        return;
    }
}