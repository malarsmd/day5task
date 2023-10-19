const jsonData = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };
  console.log("Using for...in loop:");
for (const key in jsonData) {
  console.log(`${key}: ${jsonData[key]}`);
}
console.log("\nUsing for...in loop:");
for (const key in jsonData) {
  console.log(`${key}: ${jsonData[key]}`);
}
console.log("\nUsing for...of loop:");
const entries = Object.entries(jsonData);
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}

// Using forEach loop on the entries
console.log("\nUsing forEach loop:");
entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
}