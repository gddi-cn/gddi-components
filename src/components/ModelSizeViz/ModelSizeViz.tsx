import React, { useMemo, useRef, useEffect, useState } from 'react'
import { ForceGraph3D, ForceGraph2D } from 'react-force-graph'
import { genRandomTree } from './generateData'

const distance = 2000

const maxFpsPerChannel = 30
const maxChannel = 32
const fpsMin = 1
const fpsMax = maxFpsPerChannel * maxChannel

export interface ModelSizeVizProps {
  channels: number
  fpsPerChannel: number
  threeD?: boolean
  width?: number
  height?: number
  backgroundColor?: string
}

export function ModelSizeViz({
  channels,
  fpsPerChannel,
  threeD,
  width,
  height,
  backgroundColor,
}: ModelSizeVizProps): JSX.Element {
  const fgRef = useRef<any | undefined>()
  //   const [itv, setItv] = useState<NodeJS.Timer | undefined>(undefined)
  const channels1 = (Math.floor(channels) % (maxChannel + 1)) + 1
  const fpsPerChannel1 =
    (Math.floor(fpsPerChannel) % (maxFpsPerChannel + 1)) + 1
  const fps = channels1 * fpsPerChannel1

  const numNodes = fps
  const data = useMemo(() => genRandomTree(numNodes), [numNodes])

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

  if (threeD) {
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
        linkDirectionalParticles={1}
        linkOpacity={1}
        showNavInfo={false}
        nodeRelSize={6}
      />
    )
  }

  return (
    <ForceGraph2D
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      graphData={data}
      nodeLabel={(node: any) => `${node.nodeType}: ${node.description}`}
      nodeAutoColorBy="nodeType"
      linkDirectionalParticles={1}
      nodeRelSize={6}
    />
  )
}
