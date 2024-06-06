let a = Number(prompt("Son kiriting"));

if (a % 3 === 0 && a % 5 === 0) {
    console.log(`${son} - fizzbuzz`)
} else if (a % 3 === 0) {
    console.log("Bu fizz")
} else if (a % 5 === 0) {
    console.log("Bu buzz")
} else {
    alert(son);
}
