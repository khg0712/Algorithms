function solution(input) {
	const splittedInput = input.split("\n").map((line) => line.split(" "));
	const formattedInput = splittedInput.map((arr) =>
		arr.map((e) => parseInt(e))
	);
	console.log(formattedInput);
	const [nodeCnt] = formattedInput.shift();
}

solution(`8
1 2
1 3
1 4
2 5
2 6
4 7
4 8`);
