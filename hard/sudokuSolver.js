const board = [
	["5", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"]
]


const board_finished = [
	["5", "3", "4", "6", "7", "8", "9", "1", "2"],
	["6", "7", "2", "1", "9", "5", "3", "4", "8"],
	["1", "9", "8", "3", "4", "2", "5", "6", "7"],
	["8", "5", "9", "7", "6", "1", "4", "2", "3"],
	["4", "2", "6", "8", "5", "3", "7", "9", "1"],
	["7", "1", "3", "9", "2", "4", "8", "5", "6"],
	["9", "6", "1", "5", "3", "7", "2", "8", "4"],
	["2", "8", "7", "4", "1", "9", "6", "3", "5"],
	["3", "4", "5", "2", "8", "6", "1", "7", "9"]
]


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
	recurSolver(board, 0, 0)
	return board
};

function recurSolver(board, r, c) {
	const n = board.length
	while (r < n && board[r][c] !== '.') {
		c++;
		if (c === n) {
			c = 0;
			r++;
		}
	}

	if (r === n) {
		return true
	}

	for (let guess = 1; guess <= 9; guess++) {
		if (isValidEntry(board, r, c, guess.toString())) {
			board[r][c] = guess.toString()
			if (recurSolver(board, r, c)) {
				return true
			}
			board[r][c] = "."
		}
	}

	board[r][c] = "."
	return false
}

function isValidEntry(board, rowNumber, colNumber, guess) {
	const validEntry = isValidCol(board, colNumber, guess) && isValidGrid(board, rowNumber, colNumber, guess) && isValidRow(board, rowNumber, guess)
	return validEntry
}

function isValidRow(board, rowNumber, guess) {
	const r = board[rowNumber]
	return r.filter(v => v !== ".").reduce((a, v) => a && v !== guess, true)
}

function isValidCol(board, colNumber, guess) {

	return board.filter(r => r[colNumber] !== ".").reduce((a, r) => {
		const v = r[colNumber]
		return a && v !== guess
	}, true)
}

function isValidGrid(board, rowNumber, colNumber, guess) {
	const gridValues = getGridValues()
	return gridValues.filter(v => v !== ".").reduce((a, v) => a && v !== guess, true)

	function getGridValues() {
		let r0 = 0, c0 = 0
		if (rowNumber > 5) r0 = 6
		if (2 < rowNumber && rowNumber <= 5) r0 = 3
		if (colNumber > 5) c0 = 6
		if (2 < colNumber && colNumber <= 5) c0 = 3

		const gridValues = []
		for (let i = r0; i < r0 + 3; i++) {
			for (let j = c0; j < c0 + 3; j++) {
				gridValues.push(board[i][j])
			}
		}

		return gridValues
	}
}

function areBoardsEqual(board1, board2) {
	return JSON.stringify(board1) === JSON.stringify(board2)
}

function printBoard(board) {
	board.forEach((r, i) => {
		const row = r.reduce((ac, v) => {
			return ac + v + " "
		}, "")
		console.log(row)
	})
}

solveSudoku(board)
printBoard(board)
