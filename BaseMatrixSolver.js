class BaseMatrixSolver {

  constructor(letters) {
    this.letters = letters;
    this.minDist = -1;
  }

  reset(matrix, aim) {
    this.matrix = matrix;
    this.minDist = -1;
    this.aim = aim;
  }

  equalToSomeParent(i, parents) {
    for (let k = 0; k < parents.length; k++) {
      if (parents[k] == i)
        return true;
    }

    return false;
  }

  containsVal(parents, val) {
    for (let i = 0; i < parents.length; i++) {
      if (parents[i] == val) {
        return true;
      }
    }

    return false;
  }

  pushRec(index, n, parents) {
    if (!this.containsVal(parents, index))
      parents.push(index);

    for (let i = 0; i < this.matrix.length; i++) {
      let item = this.matrix[i][index];
      if (item == undefined || item == "")
        continue;

      if (!this.equalToSomeParent(i, parents)) {
        if (i == this.aim) {
          let dist = n + item;
          console.log(dist, ' ', this.letters[i - 1]);
          if (dist < this.minDist || this.minDist == -1) {
            this.minDist = dist;
          }
        } else
          this.pushRec(i, n + item, parents);
      }
    }

  }
}
