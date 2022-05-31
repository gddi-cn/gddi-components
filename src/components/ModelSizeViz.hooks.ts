import { useMemo } from 'react'
import {
  VizGraphType,
  GraphData,
  CalNetworkSizeFunc,
  CalNNSizeFunc,
} from './ModelSizeViz.types'
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
  fpsPerChannel: number,
  calNetworkSize1?: CalNetworkSizeFunc,
  calNNSize1?: CalNNSizeFunc
): GraphData {
  const graphData = useMemo(() => {
    const channels1 = validateChannel(channels)
    const fpsPerChannel1 = validateFPS(fpsPerChannel)
    if (vizGraphType === 'NN') {
      let myCalNNSize = calNNSize
      if (calNNSize1) {
        myCalNNSize = calNNSize1
      }
      const { layerWidth, numLayers } = myCalNNSize(channels1, fpsPerChannel1)
      console.log(`layerWidth: ${layerWidth} - numLayers: ${numLayers}`)
      return genNN(layerWidth, numLayers)
    } else {
      let myCalNetworkSize = calNetworkSize
      if (calNetworkSize1) {
        myCalNetworkSize = calNetworkSize1
      }
      const N = myCalNetworkSize(channels1, fpsPerChannel1)
      console.log(`N: ${N}`)
      return genNetwork(N)
    }
  }, [channels, fpsPerChannel, vizGraphType, calNetworkSize1, calNNSize1])

  return graphData
}
