class Table extends TableBuilder {

  constructor(x, y, item, length, letters) {
    super(item, length, letters);
    this.x = x;
    this.y = y;
    this.item = item;
    this.length = length;

    this.frame = this.createFrame(this.x, this.y);
    this.context = this.createContext(this.x, this.y, this.length);
  }

  setSymmetry() {
    this.context.forEach((row, i) => {
      row.forEach((el, j) => {
        if (el.tagName == 'INPUT') {
          if (this.context[j][i].tagName == 'INPUT')
            el.onkeyup = () => {
              this.context[j][i].value = el.value;
            }
        }
      });
    });
  }

  addTo(parent) {
    parent.appendChild(this.frame);
    for (let i = 0; i < this.context.length; i ++) {
      for (let j = 0; j < this.context[i].length; j ++) {
        parent.appendChild(this.context[i][j]);
      }
    }
  }

  removeFrom(parent) {
    parent.removeChild(this.frame);
    for (let i = 0; i < this.context.length; i++) {
      for (let j = 0; j < this.context[i].length; j++) {
        parent.removeChild(this.context[i][j]);
      }
    }
  }



}
