function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1: -1);
}

function getTotalNumberOfBorrows(account, books) {
 let totalBorrows = 0;
 books.forEach(book => {
  if (book.borrows.find(borrow => borrow.id === account.id)) {
    totalBorrows++;
  }
});
  return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksBorrowed = [];
  books.forEach(book => {
    if (book.borrows.find(borrow => borrow.id === account.id && borrow.returned === false)) {
      booksBorrowed.push(book);
    }
  })
  booksBorrowed.forEach(book => {
    let anAuthor = authors.find(author => author.id === book.authorId);
    book['author'] = anAuthor;
  });
  return booksBorrowed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
