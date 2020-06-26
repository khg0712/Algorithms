function compare(str1, str2) {
	let diff = 0;
	for (let i in str1) {
		if (str1[i] !== str2[i]) diff++;
	}
	return diff === 1;
}

function getTree(words) {
	const tree = {};
	words.forEach((word, i) => {
		words.forEach((node) => {
			if (!tree[word]) tree[word] = [];
			if (compare(word, node)) tree[word].push(node);
		});
	});
	return tree;
}

function solution(begin, target, words) {
	const tree = getTree([begin, ...words]);
	if (!words.includes(target)) return 0; // 분명히 이 코드 없이도 통과해야 하는데 왜 이게 없으면 실패인 것인가..
	function getShortestPath(current, target, visited) {
		if (current === target) return 1;
		if (tree[current].every((next) => visited[next])) return 50; // 더 이상 방문할 노드 없음
		return (
			1 +
			Math.min(
				...tree[current]
					.filter((next) => !visited[next])
					.map((next) =>
						getShortestPath(next, target, { ...visited, [current]: true })
					)
			)
		);
	}
	// dfs를 통해서 해결
	const result = getShortestPath(begin, target, {}) - 1;
	return result > 50 ? 0 : result;
}

// console.log(
// 	solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]) === 4
// );
// console.log(solution("hit", "cog", ["hot", "hat", "cot", "cog"]) === 3);
// console.log(solution("hit", "hat", ["hit", "hot", "hyt", "hat"]) === 1);

// console.log(solution("hit", "cog", ["hat", "hot", "cot", "cog"]) === 3);
// console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]) === 0);
// console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "cog"]) === 4);
// console.log(solution("hit", "cog", ["hot", "dot", "lot", "cog"]) === 0);
console.log(
	solution("aaaaaa", "bbbbbb", [
		"bbbbbb",
		"abbbbb",
		"aabbbb",
		"aaabbb",
		"aaaabb",
		"aaaaab",
	]) === 6
);
console.log(
	solution("aaaaaa", "bbbbbb", [
		"bbbbbb",
		"aabbbb",
		"aaabbb",
		"aaaabb",
		"aaaaab",
	]) === 0
);
// console.log(solution("hit", "cog", ["dot", "dog", "hot", "cog"]) === 4);
// console.log(
// 	solution("hitt", "cogg", ["hott", "dotg", "dogg", "lott", "logg"]) === 0
// );
