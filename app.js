const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// สุ่มคำตอบ 4 หลัก
const answer = [];
for (let i = 0; i < 4; i++) {
  const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  answer.push(randomChar);
}
console.log('Answer:', answer.join(''));

// เริ่มต้นรับคำตอบจากผู้ใช้
let count = 0;
rl.setPrompt('Guess the 4-letter word (A-Z): ');
rl.prompt();

rl.on('line', (input) => {
  count++;
  // ตรวจสอบคำตอบที่ผู้ใช้กรอก
  const guess = input.trim().toUpperCase();
  let correctCount = 0;
  let correctPosition = 0;
  for (let i = 0; i < 4; i++) {
    if (guess.charAt(i) === answer[i]) {
      correctPosition++;
    }
    if (answer.includes(guess.charAt(i))) {
      correctCount++;
    }
  }
  // แสดงผลลัพธ์
  if (correctPosition === 4) {
    console.log(`Congratulations! You guessed correctly in ${count} attempts!`);
    rl.close();
  } else {
    console.log(`Correct letters: ${correctCount}, Correct positions: ${correctPosition}`);
    rl.prompt();
  }
}).on('close', () => {
  process.exit(0);
});
