import 'babel-polyfill'; // これがないと generator 関数が動かない

// Promise でくるんでやる
let sayHello = (name, delay) => {
  return new Promise((resolve, reject) => {
    console.log("See you after " + delay + " ms.");
    setTimeout(() => resolve("Hello " + name), delay)
  });
};

// async を generator の代わりに使う
(async function(){
  // yield の代わりに await
  const hello1 = await sayHello("Yamada", 5000);
  console.log(hello1);
  const hello2 = await sayHello("Tanaka", 5000);
  console.log(hello2);
})();