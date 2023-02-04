 let writtenString;
 for(let i=1; i<=10;i++) {
    writtenString = i+' * 8 = '+(i*8);
    if (writtenString.length == 9)
    {
        writtenString = ' '+i+' * 8 =  '+(i*8);
    }
    else if(writtenString.length == 10) {
        writtenString = ' '+writtenString;
    }
    document.write(writtenString);
    document.write('<br>');
 }