import 'babel-polyfill'; // これがないと generator 関数が動かない

// Promise でくるんでやる
let sayHello = (name, delay) => {
  return new Promise((resolve, reject) => {
    
    function log() {
      resolve("Hello " + name);
    }
    
    console.log("See you after " + delay + " ms.");
    setTimeout(log, delay)
  });
};

// async を generator の代わりに使う
(async function(){
  // yield の代わりに await
  const hello = await sayHello("Yamada", 5000);
  console.log(hello);
})();