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
	if (subTree.length === 0) {
		return isParentEarly ? 0 : 1;
	}
	if (isParentEarly) {
		const result = Math.min(
			1 + subTree.reduce((prev, cur) => prev + bfs(tree, tree[cur], true), 0),
			subTree.reduce((prev, cur) => prev + bfs(tree, tree[cur], false), 0)
		);
		return result;
	}
	return (
		1 + subTree.reduce((prev, cur) => prev + bfs(tree, tree[cur], true), 0)
	);
}

solution(`16
1 2
1 3
3 4
4 5
2 6
2 7
6 8
8 9
8 10
8 11
8 12
10 13
13 14
14 16
14 15`);

// 난 잘 풀었는데 왜 실패인것인가
// dp로 해결할 거야!
