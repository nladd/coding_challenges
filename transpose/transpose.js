Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});

Object.defineProperty(String.prototype, 'padStart', {
    value: function(maxLength, fillString) {
        let stringLength = this.length;
        let fillStr = fillString === undefined ? ' ' : fillString;
        let stringFiller = '';
        if (maxLength <= stringLength || fillStr == '') return this;
        let fillLen = maxLength - stringLength;
        for(let n = 0; n < fillLen; n++) {
            stringFiller += fillStr;
        }
        return stringFiller + this;
    }
});

function printMatrix(matrix) {
    let maxValLen = Math.max(...matrix.flat()).toString().length
    matrix.forEach((b) => {
        let str = '';
        b.forEach((n) => {
            str = str.concat(n.toString().padStart(maxValLen + 1, ' '));
        });
        console.log(str.trim());
    });
}

function transpose(matrix) {

    t = [];
    matrix[0].forEach((_row) => {
      t.push([]);
    });
  
    matrix.forEach((row, i) => {
        t.push([])
        row.forEach((val, j) => {
            t[j][i] = val;
        });
    });
  
    return t;
  }


let a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let b = [[1, 2, 3], [4, 5, 6]];
let c = [[1,  2,  3,  4], [5,  6,  7,  8], [9, 10, 11, 12]];

console.log("########### A #############");
printMatrix(a);
console.log();
printMatrix(transpose(a))
console.log("########### B #############");
printMatrix(b)
console.log();
printMatrix(transpose(b))
console.log("########### C #############");
printMatrix(c)
console.log();
printMatrix(transpose(c))

