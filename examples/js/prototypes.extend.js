String.prototype.firstUppercase = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

Array.prototype.justNumbers = function() {
  for(let value of this){
    if(typeof value !== 'number') {
      this.splice(this.indexOf(value),1);
    }
  }
};

let arr = [ 'asd', 25, 'asdsdf' , 65.23 ];

console.log('javascript'.firstUppercase());
console.log(arr);
arr.justNumbers();
console.log(arr);