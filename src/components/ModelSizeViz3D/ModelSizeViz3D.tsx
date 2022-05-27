import React, { useMemo, useRef, useEffect, useState } from 'react'
import { ForceGraph3D } from 'react-force-graph'
import { genNN, calModelSize } from './../../utils'

const distance = 2000

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
  const fgRef = useRef<any | undefined>()
  //   const [itv, setItv] = useState<NodeJS.Timer | undefined>(undefined)
  const { layerWidth, numLayers } = useMemo(
    () => calModelSize(channels, fpsPerChannel),
    [channels, fpsPerChannel]
  )
  console.log(`layerWidth: ${layerWidth} - numLayers: ${numLayers}`)
  const data = useMemo(
    () => genNN(layerWidth, numLayers),
    [layerWidth, numLayers]
  )

  //   useEffect(() => {
  //     // console.log(fgRef.current)
  //     if (threeD && camOrbitting && fgRef.current && itv === undefined) {
  //       console.log('🍉🍉set interval!')
  //       let angle = 0
  //       setItv(
  //         setInterval(() => {
  //           fgRef.current.cameraPosition({
  //             x: distance * Math.sin(angle),
  //             z: distance * Math.cos(angle),
  //           })
  //           angle += Math.PI / 300
  //         }, 10)
  //       )
  //     }

  //     return () => {
  //       console.log(`camOrbitting: ${camOrbitting}`)
  //       console.log(`itv: ${itv}`)
  //       console.log(`(!threeD || !camOrbitting): ${!threeD || !camOrbitting}`)
  //       if (itv !== undefined && (!threeD || !camOrbitting)) {
  //         console.log('!!!!!clear interval!')
  //         clearInterval(itv)
  //         setItv(undefined)
  //       }
  //     }
  //   }, [camOrbitting, threeD, setItv, itv])

  if (fgRef.current) {
    fgRef.current.cameraPosition({ z: distance })
  }

  return (
    <ForceGraph3D
      ref={fgRef}
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
