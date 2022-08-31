

let myLibrary = [];

function Bookshelf() {

}

Bookshelf.prototype.currentbook = function () {
    myLibrary.forEach(Book => {
        console.log(this.title);
    });;
}
    

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

Book.prototype = Object.create(Bookshelf.prototype);

const animalfarm = new Book("Animal Farm", "George Orwell", 300, "read");
const fahrenheit451 = new Book("Fahrenheit 451", "Ray Bradbury", 180, "read");

myLibrary.push(animalfarm);
myLibrary.push(fahrenheit451);

    
    
/* 
function addBookToLibrary() {
    // create new book button that pops up a form
         // done via prompt?s
    // get user input from form via submit
    // store user 'record' as element in myLibrary array  making sure to increment an index
}

function displayLibrary() :
    //  using js dom manipulation methods, create a book entry for every array element 
        //  the book entry needs to have a REMOVE button
    
    /* You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array. */
    
        //  also a toggle/button for READ / UNREAD
    
        /* Add a button on each book’s display to change its read status.
To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance. */

 */











