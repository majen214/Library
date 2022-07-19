function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
//   let total = 0;
 //find borrowed books by looping via .forEach
return books.reduce((previousValue, currentBook) => {
  return previousValue + currentBook.borrows.filter(borrow => borrow.returned === false).length
}, 0);
//  books.forEach(book => total+= book.borrows.filter(borrow => borrow.returned === false).length )
    //add borrowed books to total
//   return total; 

}

function getMostCommonGenres(books) {
  const result = [];
  const genres = books.map((book) => book.genre);
  genres.forEach((genre) => {
    const existGenre = result.find((r) => r.name === genre);
    if (existGenre) {
      existGenre.count++; 
    } else {
      result.push({name: genre, count: 1});
    }
    
  });
  result.sort((a, b) => b.count - a.count);
  return result.slice(0, 5);
}


function getMostPopularBooks(books) {
  const booksWithBorrowCount = books.map((book) => {
    return {name: book.title, count: book.borrows.length}
  });
  booksWithBorrowCount.sort((a, b) => b.count - a.count);
  return booksWithBorrowCount.slice(0, 5);
}

function getAuthorWithBorrowCount(books, authors) {
  return books.map(book => {
    const author = authors.find(author => author.id === book.authorId);
    return {
      name: `${author.name.first} ${author.name.last}`,
      count: book.borrows.length
    }
  });
}
//with helper function
function getMostPopularAuthors(books, authors) {
  const authorsWithBorrowCount = getAuthorWithBorrowCount(books, authors);
 
  const result = [];
  authorsWithBorrowCount.forEach(obj => {
    const existAuthorBook = result.find((r) => r.name === obj.name);
    if (existAuthorBook) {
      existAuthorBook.count += obj.count;
    } else {
      result.push(obj);
    }
  });
  result.sort((a, b) => b.count - a.count);
  return result.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
