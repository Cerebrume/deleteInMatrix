var matrix = [
	['♠', '♠', '♣', '♣', '♣', '♣',],
	['♠', '♠', '♣', '♣', '♢', '♢'],
	['♠', '♣', '♣', '♠', '♢', '♢'],
	['♠', '♣', '♣', '♣', '♣', '♢'],
	['♡', '♣', '♣', '♣', '♡', '♡'],
	['♡', '♡', '♡', '♠', '♠', '♣']
];

function delete_near(x, y) {
	if (x < 0 || y < 0) return;
	var curX = parseInt(x);
	var curY = parseInt(y);
	var elem = matrix[curY][curX];

	if ((curY + 1) < matrix.length) {
		if (matrix[curY + 1][curX] === elem) {
			matrix[curY][curX] = '_';
			delete_near(curX, curY + 1);
		}
		else matrix[curY][curX] = '_';
	}
	if ((curY - 1) >= 0) {
		if (matrix[curY - 1][curX] === elem) {
			matrix[curY][curX] = '_';
			delete_near(curX, curY - 1);
		}
		else matrix[curY][curX] = '_';
	}
	if ((curX + 1) < matrix[curY].length) {
		if (matrix[curY][curX + 1] === elem) {
			matrix[curY][curX] = '_';
			delete_near(curX + 1, curY);
		}
		else matrix[curY][curX] = '_';
	}
	if ((curX - 1) >= 0) {
		if (matrix[curY][curX - 1] === elem) {
			matrix[curY][curX] = '_';
			delete_near(curX - 1, curY);
		}
		else matrix[curY][curX] = '_';
	}
}

console.log('Before:');
console.log(matrix);
delete_near(1, 4);
console.log('After:');
console.log(matrix);