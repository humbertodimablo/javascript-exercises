const getTheTitles = function(books) {
return books.map(books => books.title)
};
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

  const getTitles = getTheTitles(books)
  console.log(getTitles);
// Do not edit below this line
module.exports = getTheTitles;
