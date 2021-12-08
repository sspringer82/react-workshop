const e = new Error('Whoops 🐝');

console.log('a');
// console.log(e);

try {
  throw e;
} catch {
  console.log('alles gut!');
}

console.log('b');

try {
  setTimeout(() => {
    throw e;
  }, 10);
} catch {
  console.log('alles gut, immer noch');
}
