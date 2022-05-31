import React from 'react'
import { ForceGraph2D } from 'react-force-graph'
import { ModelSizeViz2DProps } from './../ModelSizeViz.types'
import { useGraphData } from './../ModelSizeViz.hooks'

export function ModelSizeViz2D({
  channels,
  fpsPerChannel,
  calNNSize,
  calNetworksize,
  vizGraphType,
  width,
  height,
  backgroundColor,
  linkColor,
}: ModelSizeViz2DProps): JSX.Element {
  const graphData = useGraphData(
    vizGraphType,
    channels,
    fpsPerChannel,
    calNetworksize,
    calNNSize
  )

  return (
    <ForceGraph2D
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      graphData={graphData}
      d3AlphaDecay={0}
      d3VelocityDecay={0.08}
      cooldownTime={6000}
      nodeAutoColorBy="nodeType"
      linkColor={() => (linkColor ? linkColor : `rgba(0, 0, 0, 0.08 )`)}
      enablePointerInteraction={false}
    />
  )
}
