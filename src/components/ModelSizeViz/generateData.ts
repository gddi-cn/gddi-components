import { GraphData } from './ModelSizeViz.types'

export function generateRandomGraph(
  numNodes: number,
  numLinks: number
): GraphData {
  const nodes = new Array(numNodes).fill(0).map((val, idx) => ({
    id: idx,
    nodeType: idx % 8,
    description: `nodeId - ${idx}`,
  }))
  const list = randomChoose(unorderedPairs(range(numNodes)), numLinks)
  const links = list.map(([srcIdx, targetIdx]) => ({
    source: srcIdx,
    target: targetIdx,
  }))
  const gData: GraphData = {
    nodes: nodes,
    links: links,
  }
  return gData
}

function randomChoose(s: number[][], k: number): number[][] {
  // returns a random k element subset of s
  const a: number[][] = []
  let i = -1
  let j = i
  while (++i < k) {
    j = Math.floor(Math.random() * s.length)
    a.push(s.splice(j, 1)[0])
  }
  return a
}

function unorderedPairs(s: number[]): number[][] {
  // returns the list of all unordered pairs from s
  let i = -1
  let j = i
  const a: number[][] = []
  while (++i < s.length) {
    j = i
    while (++j < s.length) a.push([s[i], s[j]])
  }
  return a
}

function range(n: number): number[] {
  // range(5) -> [0, 1, 2, 3, 4, 5]
  if (n <= 0) {
    return []
  }
  return Array.from(Array(n).keys())
}

export function genRandomTree(N = 300, reverse = false, numNodeTypes = 8) {
  return {
    nodes: range(N).map((idx) => ({
      id: idx,
      nodeType: idx % numNodeTypes,
      description: `nodeId - ${idx}`,
    })),
    links: range(N)
      .filter((id) => id)
      .map((id) => ({
        [reverse ? 'target' : 'source']: id,
        [reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1)),
      })),
  }
}
