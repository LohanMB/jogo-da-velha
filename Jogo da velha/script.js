let currentPlayer = 'X';
let winner = null;
const cells = document.querySelectorAll('.cell');
const winnerDisplay = document.getElementById('winner');

function makeMove(cell) {
    if (!cell.textContent && !winner) {
        cell.textContent = currentPlayer;
        if (checkForWin()) {
            winner = currentPlayer;
            winnerDisplay.textContent = `O jogador ${winner} venceu!`;
        } else if ([...cells].every(cell => cell.textContent !== '')) {
            winnerDisplay.textContent = 'Empate!';
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkForWin() {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) {
            return true;
        }
    }

    return false;
}

function resetGame() {
    for (const cell of cells) {
        cell.textContent = '';
    }
    currentPlayer = 'X';
    winner = null;
    winnerDisplay.textContent = '';
}

resetGame();