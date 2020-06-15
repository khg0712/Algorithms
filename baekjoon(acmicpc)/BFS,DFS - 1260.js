function bfs(nodes, start) {
  const queue = [start];
  for (let i = 0; queue.length < nodes.size; i++) {
    const cur = queue[i];
    nodes.get(cur).forEach(node => {
      if (queue.includes(node)) return;
      queue.push(node);
    });
  }
  return queue;
}
function dfs(nodes, start) {
  const queue = [start];
  for (; queue.length < nodes.size; ) {
    const cur = queue[queue.length - 1];
    nodes.get(cur).some(node => {
      if (queue.includes(node)) return;
      return queue.push(node);
    });
  }
  return queue;
}
function mapNodes(nodes) {
  const mappedNodes = new Map();
  nodes.forEach(([start, end]) => {
    if (mappedNodes.has(start)) mappedNodes.get(start).push(end);
    else mappedNodes.set(start, [end]);
    if (mappedNodes.has(end)) mappedNodes.get(end).push(start);
    else mappedNodes.set(end, [start]);
  });
  mappedNodes.forEach((value, key, map) => {
    map.set(key, value.sort());
  });
  return mappedNodes;
}

function solution(input) {
  const splittedInput = input.map(line => line.split(" "));
  const formattedInput = splittedInput.map(arr => arr.map(e => parseInt(e)));

  const [nodeCnt, edgeCnt, start] = formattedInput.shift();
  const nodes = mapNodes(formattedInput);

  console.log(dfs(nodes, start).join(" "));
  console.log(bfs(nodes, start).join(" "));
}

let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
solution(input);
// 시간 초과라니 으악
