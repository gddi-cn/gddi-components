export type VizGraphType = 'Network' | 'NN'

export type CalNNSizeFunc = (
  numChannels: number,
  fpsPerChannel: number
) => { layerWidth: number; numLayers: number }

export type CalNetworkSizeFunc = (
  numChannels: number,
  fpsPerChannel: number
) => number

export interface ModelSizeViz2DProps {
  channels: number
  fpsPerChannel: number
  /**
   * The function to calculate the NN size based on inputs.
   * @returns layerWidth - the max number of nodes in all layers. numLayers -
   *  numLayers - number of layers.
   * @param {number} channels Number of channels (min = 1, max = 32)
   * @param {number} fpsPerChannel FPS per channel (min = 1, max = 30)
   */
  calNNSize?: CalNNSizeFunc
  /**
   * The function to calculate the network size based on inputs.
   * Returns the number of nodes in the network.
   * @param {number} channels Number of channels (min = 1, max = 32)
   * @param {number} fpsPerChannel FPS per channel (min = 1, max = 30)
   */
  calNetworksize?: CalNetworkSizeFunc
  /**
   * The 2 types of graph shapes you can chosse from.
   * 'NN' -- neural network with layers; relatively large; default;
   * 'Network' -- random network; relatively small;
   */
  vizGraphType?: VizGraphType
  width?: number
  height?: number
  backgroundColor?: string
  linkColor?: string
}

export interface ModelSizeViz3DProps {
  channels: number
  fpsPerChannel: number
  /**
   * The function to calculate the NN size based on inputs.
   * @returns layerWidth - the max number of nodes in all layers. numLayers -
   *  numLayers - number of layers.
   * @param {number} channels Number of channels (min = 1, max = 32)
   * @param {number} fpsPerChannel FPS per channel (min = 1, max = 30)
   */
  calNNSize?: CalNNSizeFunc
  /**
   * The function to calculate the network size based on inputs.
   * Returns the number of nodes in the network.
   * @param {number} channels Number of channels (min = 1, max = 32)
   * @param {number} fpsPerChannel FPS per channel (min = 1, max = 30)
   */
  calNetworksize?: CalNetworkSizeFunc
  /**
   * The 2 types of graph shapes you can chosse from.
   * 'NN' -- neural network with layers; relatively large; default;
   * 'Network' -- random network; relatively small;
   */
  vizGraphType?: VizGraphType
  width?: number
  height?: number
  backgroundColor?: string
  linkColor?: string
}

export interface GraphData {
  nodes: NodeObject[]
  links: LinkObject[]
}

export type NodeObject = object & {
  id: string | number
  x?: number
  y?: number
  z?: number
  vx?: number
  vy?: number
  vz?: number
  fx?: number
  fy?: number
  fz?: number
  nodeType: string | number
  description: string
}

export type LinkObject = object & {
  source?: string | number | NodeObject
  target?: string | number | NodeObject
  colorId?: string | number
}
