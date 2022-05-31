import React, { useMemo, useRef, useEffect, useState } from 'react'
import { ForceGraph3D } from 'react-force-graph'
import { genNN, calNNSize } from './../../utils'

export interface ModelSizeViz3DProps {
  channels: number
  fpsPerChannel: number
  width?: number
  height?: number
  backgroundColor?: string
  linkColor?: string
}

export function ModelSizeViz3D({
  channels,
  fpsPerChannel,
  width,
  height,
  backgroundColor,
  linkColor,
}: ModelSizeViz3DProps): JSX.Element {
  // const fgRef = useRef<any | undefined>()
  const { layerWidth, numLayers } = useMemo(
    () => calNNSize(channels, fpsPerChannel),
    [channels, fpsPerChannel]
  )
  console.log(`layerWidth: ${layerWidth} - numLayers: ${numLayers}`)
  const data = useMemo(
    () => genNN(layerWidth, numLayers),
    [layerWidth, numLayers]
  )

  return (
    <ForceGraph3D
      // ref={fgRef}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      graphData={data}
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
