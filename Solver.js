class Solver extends BaseMatrixSolver {


  constructor(letters) {
    super(letters);
    this.matrix = [];
  }

  defineMatrixByContext(context) {
    for (let i = 0; i < context.length; i ++) {
      this.matrix[i] = new Array(context[i].length);
      for (let j = 0; j < context[i].length; j ++) {
        if (context[i][j].value == undefined || context[i][j].value == "")
          this.matrix[i][j] = context[i][j].value;
        else
          this.matrix[i][j] = parseInt(context[i][j].value);
      }
    }
    console.log(this.matrix);
  }

  solvTableContext(context) {
    this.defineMatrixByContext(context);
    this.reset(this.matrix, this.matrix.length - 1);
    this.pushRec(1, 0, []);
    console.log('минимальное расстояние: ', this.minDist);
  }
}
