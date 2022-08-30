let players = ['x', 'o'];
let activePlayer;
let board = [];

function startGame() {
    board = [['','',''],['','',''],['','','']];
    //реализовал дополнительное задание, игра работает при любом размере поля(конечно если оно равносторонее))
    //board = [['','','',''],['','','',''],['','','',''],['','','','']];
    //board = [['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','','']];
    activePlayer = 0;
    renderBoard(board);
}

function click(row, col) {
    board[row][col] = players[activePlayer];
    renderBoard(board);
    let ctrRow = 0;
    let ctrCol = 0;
    let ctrDiag = 0;
    let ctrRevDiag = 0;
    const endGame = board.length;
    for (let i = 0; i < board.length; i++) {
        //Проверка по строке
        if (board[row][i] === players[activePlayer]) {
            ctrRow++;
        }
        //Проверка по столбцу
        if (board[i][col] === players[activePlayer]) {
            ctrCol++;
        }
        //Проверка по диагонали
        if (board[i][i] === players[activePlayer]) {
            ctrDiag++;
        }
        //Проверка по обратной диагонали
        if (board[i][board.length - 1 - i] === players[activePlayer]) {
            ctrRevDiag++;
        }
    }
    if (ctrDiag === endGame || ctrRevDiag === endGame || ctrRow === endGame || ctrCol === endGame ) {
        showWinner(activePlayer);
    } else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        //Добавил функцию, которая выводит модалку в случае ничьей
        let ctrDrawn = 0;
        for (let i = 0; i < board.length; i++) {
            let row = board[i].join('');
            if (row.length === board.length) {
                ctrDrawn++;
            }
        }
        if (ctrDrawn === board.length) {
            drawnGame();
        }
    }
}