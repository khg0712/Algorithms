let visit = [];
let dp = [];
let list = [];

function solution(input) {
	const splittedInput = input
		.split("\n")
		.filter((e) => e !== "")
		.map((line) => line.split(" "));
	const formattedInput = splittedInput.map((arr) =>
		arr.map((e) => parseInt(e))
	);
	const [nodeCnt] = formattedInput.shift();
	init(nodeCnt, formattedInput);
	splittedInput.splice(0, splittedInput.length);
	const start = 1;
	dfs(start);
	console.log(Math.min(dp[start][0], dp[start][1]));
}

function init(nodeCnt, nodes) {
	list = new Array(nodeCnt + 1).fill().map(() => []);
	nodes.forEach(([parent, child]) => {
		list[parent].push(child);
		list[child].push(parent);
	});
	dp = new Array(nodeCnt + 1).fill().map(() => []);
}

function dfs(target) {
	visit[target] = 1;
	dp[target][0] = 0;
	dp[target][1] = 1;

	item = list[target];
	for (let next of item) {
		if (visit[next] !== 1) {
			dfs(next);
			dp[target][0] += dp[next][1];
			dp[target][1] += Math.min(dp[next][0], dp[next][1]);
		}
	}
}

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString();
// solution(input);
solution(createInput(3000));

function createInput(length) {
	const input = [length];
	for (let i = 0; i < length - 1; i++) {
		input.push(`${i} ${i + 1}`);
	}
	return input.join("\n");
}
// 결국 콜스택 사이즈 문제로 실패
