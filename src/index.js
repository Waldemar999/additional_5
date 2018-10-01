module.exports = function check(str, bracketacketsConfig) {
  var stack = [];
    for (let bracket of str) {
        const couple = bracketacketsConfig.find(b => b.includes(bracket));
        if(bracket === couple[1] && couple[0] === stack[stack.length - 1]) {
          stack.pop()
          } 
        else { 
          stack.push(bracket);
        }
    }
    return !stack.length; 
} 