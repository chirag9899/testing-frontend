const { loadEnvConfig } = require("@next/env");

const projectDir = process.cwd();
loadEnvConfig(projectDir);


console.log('publixkey', process.env.PUBLIC_KEY === "checking2")
console.log('publixkey', process.env.PRIVATE_KEY === "checking")
console.log('publixkey', process.env.NEXT_CHECK === "WORKING")
console.log('publixkey', process.env.NEXT_CHECK === "checking")