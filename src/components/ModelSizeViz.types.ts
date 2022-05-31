export type VizGraphType = 'Network' | 'NN'

export interface ModelSizeViz2DProps {
  channels: number
  fpsPerChannel: number
  vizGraphType?: VizGraphType
  width?: number
  height?: number
  backgroundColor?: string
  linkColor?: string
}

export interface ModelSizeViz3DProps {
  channels: number
  fpsPerChannel: number
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
