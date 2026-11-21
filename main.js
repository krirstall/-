


let secretNumber = 7;

while (true) {
    let userNumber = Number(prompt("Угадай число от 1 до 10:"));

    if (userNumber === secretNumber) {
        console.log("Правильно! Ты угадал!");
        alert("Правильно! Ты угадал!");
        break;
    } else if (userNumber < secretNumber) {
        console.log("Загаданное число больше!");
    } else {
        console.log("Загаданное число меньше!");
    }
}
