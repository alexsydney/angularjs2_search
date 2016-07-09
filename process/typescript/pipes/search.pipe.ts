import {Pipe} from "@angular/core";

@Pipe({
  name: "find"
})

export class SearchPipe {

  // Create transformation
  transform(pipeData, [pipeModifier]) {

    // Pass data through filters to return filtered set of data
    return pipeData.filter((eachItem => {

      // Check not undefined to prevent error
      if (typeof eachItem["name"] !== undefined &&
          typeof eachItem["author"] !== undefined) {

        return eachItem["name"].toLowerCase()
                .includes(pipeModifier.toLowerCase()) ||
               eachItem["author"].toLowerCase()
                .includes(pipeModifier.toLowerCase())
        ;
      }
    }));
  }
}