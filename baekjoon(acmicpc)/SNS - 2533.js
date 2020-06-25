function solution(input) {
	const splittedInput = input
		.split("\n")
		.filter((e) => e !== "")
		.map((line) => line.split(" "));
	const formattedInput = splittedInput.map((arr) =>
		arr.map((e) => parseInt(e))
	);
	const [nodeCnt] = formattedInput.shift();
	const tree = createTree(nodeCnt, formattedInput);
	// console.log(tree);
	console.log(bfs(tree, tree[1], true));
}

function createTree(nodeCnt, nodes) {
	const tree = new Array(nodeCnt + 1).fill().map(() => []);
	nodes.forEach(([parent, child]) => {
		tree[parent].push(child);
	});
	return tree;
}

function bfs(tree, subTree, isParentEarly) {
	/*
        실패 원인:
        1열로 연결된 트리는 무조건 1이 나오게 됨;
    */
	if (subTree.length === 0) {
		return isParentEarly ? 0 : 1;
	}
	if (isParentEarly) {
		const result = Math.min(
			1 + subTree.reduce((prev, cur) => prev + bfs(tree, tree[cur], true), 0),
			subTree.reduce((prev, cur) => prev + bfs(tree, tree[cur], false), 0)
		);
		// console.log(result);
		return result;
	}
	return bfs(tree, subTree, true);
}

// solution(`3
// 1 2
// 2 3`);

// console.log(
// 	"100\n" +
// 		new Array(100)
// 			.fill()
// 			.map((e, i) => `${i} ${i + 1}\n`)
// 			.join("")
// );
const num = 30;
solution(
	`${num}\n` +
		new Array(num - 1)
			.fill()
			.map((e, i) => `${i + 1} ${i + 2}\n`)
			.join("")
);

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString();
// solution(input);
