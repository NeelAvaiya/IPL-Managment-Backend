import fs from 'node:fs';

//1 WRITE

fs.writeFileSync("test.txt","Hello from sync fs!")

//2 READ

// const data = fs.readFileSync("test.txt", "utf-8");
// console.log(data)

// fs.appendFileSync("test.txt", "\nHello from append")

// fs.mkdirSync("myFolder/innerFolder", {recursive: true});

// fs.unlinkSync("test.txt")