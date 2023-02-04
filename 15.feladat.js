
let perc = 15;
for (ora=8; ora<17; ora++) {
    if (ora < 10) {
        document.write('0'+ora+':'+perc+' ');
    }
    else {
        document.write(ora+':'+perc+' ');
    }
}