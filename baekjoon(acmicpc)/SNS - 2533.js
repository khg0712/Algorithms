function solution(input) {
	const splittedInput = input.split("\n").map((line) => line.split(" "));
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
		console.log(isParentEarly ? 0 : 1);
		return isParentEarly ? 0 : 1;
	}
	if (isParentEarly)
		return subTree.reduce(
			(prev, cur) =>
				prev +
				Math.min(1 + bfs(tree, tree[cur], true), bfs(tree, tree[cur], false)),
			0
		);
	return bfs(tree, subTree, true);
}

solution(`8
1 2
1 3
1 4
2 5
2 6
4 7
4 8`);
