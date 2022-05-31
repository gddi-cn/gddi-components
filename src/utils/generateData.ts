import { GraphData, NodeObject } from './graphData.types'

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
        colorId: id % 8,
      })),
  }
}

export function genNetwork(N = 300): GraphData {
  const res: GraphData = {
    nodes: new Array(N).fill(0).map((val, idx) => ({
      id: idx,
      nodeType: 1,
      description: `neuron`,
    })),
    links: [],
  }
  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < 2; j += 1) {
      res.links.push({
        source: i,
        target: Math.floor(Math.random() * (N - i) + i),
      })
    }
  }

  return res
}

export function genNN1(maxWidth = 200, numLayers = 6): GraphData {
  const minRatio = 0.6
  const firstNode = {
    id: crypto.randomUUID(),
    nodeType: 0,
    description: `neuron`,
  }
  const res: GraphData = {
    nodes: [firstNode],
    links: [],
  }
  const layerNodes: NodeObject[][] = [[firstNode]]
  for (let l = 0; l < numLayers + 1; l += 1) {
    // randomize the number of nodes in current layer
    let curWidth = Math.floor(
      maxWidth * (Math.random() * (1 - minRatio) + minRatio)
    )
    if (l === 0) {
      curWidth = Math.floor(maxWidth * 0.3)
    }
    if (l === numLayers - 1) {
      curWidth = Math.floor(maxWidth * 0.2)
    }
    if (l === numLayers) {
      curWidth = 1
    }
    // push in nodes of current layer
    let layerType = l
    if (l > 0 && l < numLayers - 1) {
      layerType = -1
    }
    layerNodes.push(
      new Array(curWidth).fill(0).map(() => ({
        id: crypto.randomUUID(),
        // nodeType: layerType,
        nodeType: l === numLayers ? 1 : -1,
        description: `neuron`,
      }))
    )
    layerNodes[layerNodes.length - 1].forEach((node) => {
      res.nodes.push(node)
    })
    // connect nodes of current layer to nodes of previous layer
    if (layerNodes.length > 1) {
      const lastLayerNodes = layerNodes[layerNodes.length - 2]
      const thisLayerNodes = layerNodes[layerNodes.length - 1]
      for (let srcIdx = 0; srcIdx < lastLayerNodes.length; srcIdx += 1) {
        // let maxNumConnect =
        //   l === 1 || l === numLayers - 1
        //     ? 10
        //     : Math.floor(Math.random() * 2 + 1)
        let maxNumConnect = Math.floor(Math.random() * 6 + 1)
        if (l === 0 || l === numLayers) {
          maxNumConnect = thisLayerNodes.length
        }
        for (let n = 0; n < maxNumConnect; n += 1) {
          let dstIdx = Math.floor(Math.random() * thisLayerNodes.length)
          if (l === 0 || l === numLayers) {
            dstIdx = n
          }
          res.links.push({
            source: lastLayerNodes[srcIdx].id,
            target: thisLayerNodes[dstIdx].id,
          })
        }
      }
    }
  }

  return res
}

export function genNN(maxWidth = 200, numLayers = 6): GraphData {
  const minRatio = 0.6
  const res: GraphData = {
    nodes: [],
    links: [],
  }
  const layerNodes: NodeObject[][] = []
  for (let l = 0; l < numLayers; l += 1) {
    // randomize the number of nodes in current layer
    let curWidth = Math.floor(
      maxWidth * (Math.random() * (1 - minRatio) + minRatio)
    )
    if (l === 0) {
      curWidth = Math.floor(maxWidth * 0.3)
    }
    if (l === numLayers - 1) {
      curWidth = Math.floor(maxWidth * 0.2)
    }
    // push in nodes of current layer
    let layerType = l
    if (l > 0 && l < numLayers - 1) {
      layerType = -1
    }
    layerNodes.push(
      new Array(curWidth).fill(0).map(() => ({
        id: crypto.randomUUID(),
        nodeType: layerType,
        description: `neuron`,
      }))
    )
    layerNodes[layerNodes.length - 1].forEach((node) => {
      res.nodes.push(node)
    })
    // connect nodes of current layer to nodes of previous layer
    if (layerNodes.length > 1) {
      const lastLayerNodes = layerNodes[layerNodes.length - 2]
      const thisLayerNodes = layerNodes[layerNodes.length - 1]
      for (let srcIdx = 0; srcIdx < lastLayerNodes.length; srcIdx += 1) {
        let maxNumConnect = Math.floor(Math.random() * 3 + 1)
        if (l === 1 || l === numLayers - 1) {
          maxNumConnect = 8
        }
        for (let n = 0; n < maxNumConnect; n += 1) {
          const dstIdx = Math.floor(Math.random() * thisLayerNodes.length)
          res.links.push({
            source: lastLayerNodes[srcIdx].id,
            target: thisLayerNodes[dstIdx].id,
          })
        }
      }
    }
  }

  return res
}
