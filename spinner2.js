let animation = ["|", "/", "-", "\\", "\n"];
let timer = 150;


for (const char in animation) {
  setTimeout(() => {
    process.stdout.write(`\r ${animation[char]}`);
  }, timer);
  timer += 400;
}