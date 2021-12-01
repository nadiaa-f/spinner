let animation = ["|", "/", "-", "\\", "\n"];
timer = 150
index = 0

for (const char in animation) {
setTimeout(() => {
  process.stdout.write(`\r ${animation[char]}`);
}, timer)
timer += 400
};