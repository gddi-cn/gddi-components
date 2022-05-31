import React, { useMemo } from 'react'
import { ForceGraph2D } from 'react-force-graph'
import { genNN, genNetwork, calNNSize, calNetworkSize } from './../../utils'

export interface ModelSizeViz2DProps {
  channels: number
  fpsPerChannel: number
  width?: number
  height?: number
  backgroundColor?: string
  linkColor?: string
}

export function ModelSizeViz2D({
  channels,
  fpsPerChannel,
  width,
  height,
  backgroundColor,
  linkColor,
}: ModelSizeViz2DProps): JSX.Element {
  // const { layerWidth, numLayers } = useMemo(
  //   () => calNNSize(channels, fpsPerChannel),
  //   [channels, fpsPerChannel]
  // )
  // console.log(`layerWidth: ${layerWidth} - numLayers: ${numLayers}`)
  // const data = useMemo(
  //   () => genNN(layerWidth, numLayers),
  //   [layerWidth, numLayers]
  // )

  const N = useMemo(
    () => calNetworkSize(channels, fpsPerChannel),
    [channels, fpsPerChannel]
  )
  console.log(`N: ${N}`)
  const data = useMemo(() => genNetwork(N), [N])

  return (
    <ForceGraph2D
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      graphData={data}
      d3AlphaDecay={0}
      d3VelocityDecay={0.08}
      cooldownTime={6000}
      nodeAutoColorBy="nodeType"
      linkColor={() => (linkColor ? linkColor : `rgba(0, 0, 0, 0.08 )`)}
      enablePointerInteraction={false}
    />
  )
}
