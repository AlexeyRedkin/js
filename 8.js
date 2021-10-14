let anything = new Map([

  ["Kazakhstan", "Astana"],

  ["Work", "sadly"],

  ["Alexey",    "Red"]

]);

console.log(anything);

for (let key of anything.keys()) {
  console.log('Ключ — ' + key + ', значение — ' + anything.get(key));


}