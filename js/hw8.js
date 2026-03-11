const friends = ["Mango", "Poly", "Kiwi", "Ajax"]
let string = ""

for (const elem of friends) {
    string += elem + ","
}
console.log(string);


const array = friends.join(",")
console.log(array);

const cards = [
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5",
]

const cardToRemove = cards.indexOf("Карточка-3")
cards.splice(cardToRemove, 1)
console.log();

const cardToInsert = "Карточка-6"
cards.push(cardToInsert)
console.log(cards);

const cardToUpdate = "Карточка-update";
cards.splice(3, 1, cardToUpdate);
console.log(cards);

