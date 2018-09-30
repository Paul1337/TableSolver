const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
const TableItemWidth = 50;
const TableItemHeight = 40;

const init = () => {

  let helpText = createHelpText('Введите количество столбцов в таблице и нажмите "enter"');
  add(helpText, document.body);

  let tableSizeChooser = createTableSizeChooser();
  add(tableSizeChooser, document.body);

  let solvBtn = createSolvButton();

  let table;
  tableSizeChooser.onkeydown = (e) => {
    if (e.keyCode == 13) {
      if (table !== undefined) {
        table.removeFrom(document.body);
        table = undefined;
      } else {
        add(solvBtn, document.body);
      }

      table = new Table(7, 90, {
        width: TableItemWidth,
        height: TableItemHeight
      }, parseInt(tableSizeChooser.value) + 1, letters);
      table.setSymmetry();
      table.addTo(document.body);
    }
  }

  let solver = new Solver(letters);
  solvBtn.onclick = () => {
    solver.solvTableContext(table.context);
  }

}

const createSolvButton = () => {
  let btn = document.createElement('input');
  btn.setAttribute('type', 'button');
  btn.setAttribute('value', 'решить');
  btn.setAttribute('class', 'btnStyles');

  return btn;
}

const createHelpText = (text) => {
  let el = document.createElement('h3');
  el.innerHTML = text;
  return el;
}

const createTableSizeChooser = () => {
  let chooser = document.createElement('input');
  chooser.setAttribute('type', 'text');
  chooser.setAttribute('value', '5');
  chooser.setAttribute('class', 'Choosers');

  return chooser;
}

const add = (el, parent) => {
  parent.appendChild(el);
}

init();
