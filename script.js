function zad1(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function zad2(a, b) {
    let i = Math.max(a, b);
    while (true) {
        if (i % a === 0 && i % b === 0) return i;
        i++;
    }
}

function zad3(n) {
    let suma = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) suma += i;
    }
    return suma === n;
}

function zad4(a, b) {
    for (let i = a; i <= b; i++) {
        if (zad1(i)) console.log(i);
    }
}

function zad5(n) {
    console.log(n.toString(2)); 
    console.log(n.toString(8));  
    console.log(n.toString(16)); 
}

function zad6(n) {
    let wynik = 1;
    for (let i = 2; i <= n; i++) wynik *= i;
    return wynik;
}

function zad7(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) [a, b] = [b, a + b];
    return a;
}

function zad8(a, b, c) {
    let d = b * b - 4 * a * c;
    if (d < 0) return "brak";
    if (d === 0) return -b / (2 * a);
    let x1 = (-b - Math.sqrt(d)) / (2 * a);
    let x2 = (-b + Math.sqrt(d)) / (2 * a);
    return [x1, x2];
}

function zad9(a, r, n) {
    let suma = 0;
    for (let i = 0; i < n; i++) suma += a * r ** i;
    return suma;
}

function zad10(n) {
    let s = n.toString();
    let suma = 0;
    for (let i = 0; i < s.length; i++) {
        suma += Math.pow(+s[i], s.length);
    }
    return suma === n;
}

console.log(zad1(7));     
console.log(zad2(4, 6));  
console.log(zad3(496));    
zad4(10, 40);             
zad5(102);               
console.log(zad6(10));    
console.log(zad7(10));    
console.log(zad8(1, 5, 10)); 
console.log(zad9(2, 3, 4));  
console.log(zad10(9474));     
