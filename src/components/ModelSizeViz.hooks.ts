import { useMemo } from 'react'
import { VizGraphType, GraphData } from './ModelSizeViz.types'
import {
  genNN,
  genNetwork,
  calNNSize,
  calNetworkSize,
  validateChannel,
  validateFPS,
} from './../utils'

export function useGraphData(
  vizGraphType: VizGraphType | undefined,
  channels: number,
  fpsPerChannel: number
): GraphData {
  const graphData = useMemo(() => {
    const channels1 = validateChannel(channels)
    const fpsPerChannel1 = validateFPS(fpsPerChannel)
    if (vizGraphType === 'NN') {
      const { layerWidth, numLayers } = calNNSize(channels1, fpsPerChannel1)
      console.log(`layerWidth: ${layerWidth} - numLayers: ${numLayers}`)
      return genNN(layerWidth, numLayers)
    } else {
      const N = calNetworkSize(channels1, fpsPerChannel1)
      console.log(`N: ${N}`)
      return genNetwork(N)
    }
  }, [channels, fpsPerChannel, vizGraphType])

  return graphData
}
