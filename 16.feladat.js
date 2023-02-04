let perc = 0;
let ora = 8;
while (ora <= 12) {
    if(ora< 10) {
        document.write('0'+ora+':');
    }
    else {
        document.write(ora+':');
    }
    if (perc < 10) {
        document.write('0'+perc+' ');
    }
    else {
        document.write(perc+' ');
    }
    perc+=50;
    if (perc >=60) {
        perc-=60;
        ora++;
    }

}