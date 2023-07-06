# Matrix transpose
The transpose of a matrix is an operator which flips a matrix over its diagonal; that is, it switches the row and column indices of the matrix to produce another matrix.
E.g. Given a matrix:
     _     _
    | a b c |
    | d e f |
     -     -
the transpose of that matrix would be:
     _   _
    | a d |
    | b e |
    | c f |
     -   -

Write a function, transpose(), that accepts a 2-dimensional array representing a matix as a parameter and returns a 2-dimensional array that is the transpose of the input parameter.