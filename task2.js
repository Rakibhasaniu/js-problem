//2.Task: Object Manipulation

// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  ];
function getBookTitles(books) {
    const titles = books.map(book => book.title);
    // console.log(titles)
  
    return titles;
  }
  

  
  const bookTitles = getBookTitles(books);
  
  console.log(bookTitles);
  