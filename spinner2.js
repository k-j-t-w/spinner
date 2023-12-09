const cycle = "|/-\\|/-\\|\n";
let delay = 300;
for (let char of cycle) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 200;
}
