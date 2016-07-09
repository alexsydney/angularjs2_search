import {Pipe} from "@angular/core";

// Filter Array of Objects
@Pipe({
  name: "bookItemsSortBy"
})

export class ArrayOfBookItemsPipe {

  /**
   * Sort by property passed in. Ensure convert each string 
   * value to lowercase otherwise Capitalised are shown first.
   */
  sortByProperty(property) {
    return function (a, b) {
      let sortStatus = 0,
        aProp = a[property].toLowerCase(),
        bProp = b[property].toLowerCase();
      if (aProp < bProp) {
        sortStatus = -1;
      } else if (aProp > bProp) {
        sortStatus = 1;
      }

      return sortStatus;
    };
  }

  // Pass data through filters using args to return filtered set of data
  transform(booksArray, args) {

    let sortedArray = booksArray.sort(this.sortByProperty(args.toLowerCase()));

    return sortedArray;
  }
}