import React from 'react'
import { ForceGraph3D } from 'react-force-graph'
import { ModelSizeViz3DProps } from './../ModelSizeViz.types'
import { useGraphData } from './../ModelSizeViz.hooks'

export function ModelSizeViz3D({
  channels,
  fpsPerChannel,
  vizGraphType,
  width,
  height,
  backgroundColor,
  linkColor,
}: ModelSizeViz3DProps): JSX.Element {
  const graphData = useGraphData(vizGraphType, channels, fpsPerChannel)

  return (
    <ForceGraph3D
      // ref={fgRef}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      graphData={graphData}
      nodeLabel={(node: any) => `${node.nodeType}: ${node.description}`}
      nodeAutoColorBy="nodeType"
      nodeOpacity={1}
      linkColor={() => (linkColor ? linkColor : `rgba(0, 0, 0, 0.08 )`)}
      // linkDirectionalParticles={1}
      linkOpacity={1}
      showNavInfo={false}
      nodeRelSize={6}
      enablePointerInteraction={false}
    />
  )
}
