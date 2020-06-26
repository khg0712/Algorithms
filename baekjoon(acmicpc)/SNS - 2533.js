class Node {
	constructor(parent, value) {
		this.parent = parent || null;
		this.value = value;
		this.link = [];
	}
}

function createTree(edges) {
	const nodes = new Map();
	edges.forEach(([p, c]) => {
		const parentNode = nodes.has(p) ? nodes.get(p) : new Node(null, p);
		const childNode = nodes.has(c) ? ndoes.get(c) : new Node(parentNode, c);
		parentNode.link.push(childNode);
		if (!nodes.has(p)) nodes.set(p, parentNode);
		if (!nodes.has(c)) nodes.set(c, childNode);
	});
	return nodes.get(1);
}

function getTree(nodeCnt, edges) {
	return createTree(edges);
}

const input = `16
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
14 15`;
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString();
const splittedInput = input
	.split("\n")
	.filter((e) => e !== "")
	.map((line) => line.split(" "));
const formattedInput = splittedInput.map((arr) => arr.map((e) => parseInt(e)));
const [nodeCnt] = formattedInput.shift();
const tree = getTree(nodeCnt, formattedInput);
console.dir(tree);
