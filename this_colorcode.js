/* console.log(this);
 */

function talk() {
  return `I am ${this.name}`;
}
const me = {
    name: 'Carri',
    talk
}

const you = {
  name: "Fred",
  talk
};

console.log(me.talk()) // I am carri
console.log(you.talk()) // I am fred

console.log(talk.bind(you)())
console.log(talk.call(me))
