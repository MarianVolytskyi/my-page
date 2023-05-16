function calculateGuests(guestsInput) {
  // write code here
  let numberOfGuests;

  for (let item of guestsInput) {
    if (+item) {
      console.log(item);
      numberOfGuests = item;
    }
  
  }


console.log(numberOfGuests);

  if (numberOfGuests === 0) {
    return 'not a number';
    } else {
      return numberOfGuests;
    }

}

calculateGuests('There will be 7 or 9 guys')