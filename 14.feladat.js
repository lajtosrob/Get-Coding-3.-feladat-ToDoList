let x = 1;
let y = 2;
let z = x + y;
for (let i = 1; i < 25; i++) {
    document.write(x+' ');
    x = y;
    y = z;
    z = x+y;
}