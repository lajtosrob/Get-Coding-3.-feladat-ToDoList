let ora = 8;
let perc = 30;
for(let i = 1; i < 9; i++) {
    document.write(i+'. ')
    time();
    perc+=45;
    inspection();
    time(); 
    document.write('<br>');
    perc+=10;
    inspection();
}
function time() {
    if (ora < 10 && perc < 10) {
        document.write('0'+ora+':'+'0'+perc+' ');
    }
    else  if (ora < 10) {
        document.write('0'+ora+':'+perc+' ');
    }

    else if (perc < 10) {
        document.write(ora+':'+'0'+perc+' ');
    }
    else {
        document.write(ora+':'+perc+' ');
    }
}
function inspection() {
    if (perc >=60) {
        perc-=60;
        ora++;
    }
}