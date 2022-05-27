import React, { useMemo, useRef } from 'react'
import { ForceGraph2D } from 'react-force-graph'
import { genNN, calModelSize } from './../../utils'

const distance = 4000

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
  const { layerWidth, numLayers } = useMemo(
    () => calModelSize(channels, fpsPerChannel),
    [channels, fpsPerChannel]
  )
  console.log(`layerWidth: ${layerWidth} - numLayers: ${numLayers}`)
  const data = useMemo(
    () => genNN(layerWidth, numLayers),
    [layerWidth, numLayers]
  )

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
