class TableBuilder {

  constructor(item, length, letters) {
    this.item = item;
    this.length = length;
    this.letters = letters;
  }

  createContext(x, y, n) {
    let context = new Array(n);

    for (let i = 0; i < n; i ++) {
      context[i] = new Array(n);
      for (let j = 0; j < n; j ++) {
        let type = 0;
        if (i == 0) type = j;
        if (j == 0) type = i;
        if (i == j) type = -1;
        context[i][j] = this.createTableItem(type, i * (this.item.width + 5) + x, j * (this.item.height + 5) + y, this.item.width, this.item.height);
      }
    }

    return context;
  }

  createFrame(x, y) {
    let frame = document.createElement('div');
    frame.setAttribute('class', 'frameStyle');
    frame.style.left = x + 'px';
    frame.style.top = y + 'px';
    frame.style.width = this.length * (this.item.width + 5) - 7 + 'px';
    frame.style.height = this.length * (this.item.height + 5) - 6 + 'px';
    return frame;
  }

  createTableItem(type, x, y, w, h) {
    let item;

    if (type == 0) {
      item = document.createElement('input');
      item.setAttribute('type', 'text');
      item.setAttribute('class', 'TableItem');
      item.style.left = x + 'px';
      item.style.top = y + 'px';
      item.style.width = w + 'px';
      item.style.height = h + 'px';
    } else if (type > 0 && type < 13){
      item = document.createElement('div');
      item.setAttribute('class', 'TableLetterItem');
      item.innerHTML = this.letters[type - 1];
      item.style.left = x + 'px';
      item.style.top = y + 'px';
      item.style.width = w + 'px';
      item.style.height = h + 'px';
    } else {
      item = document.createElement('div');
      item.setAttribute('class', 'TableGrayItem');
      item.style.left = x + 'px';
      item.style.top = y + 'px';
      item.style.width = w + 'px';
      item.style.height = h + 'px';
    }


    return item;

  }
}
