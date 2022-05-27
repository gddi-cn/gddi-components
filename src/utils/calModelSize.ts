const maxFpsPerChannel = 30
const maxChannel = 32
const FPS_MAX = maxFpsPerChannel * maxChannel
const MIN_LAYER_WIDTH = 100
const MAX_LAYER_WIDTH = 350
const MIN_NUM_LAYER = 4
const MAX_NUM_LAYER = 8

// export function calModelSize(
//   numChannels = 1,
//   fpsPerChannel = 1
// ): { layerWidth: number; numLayers: number } {
//   //   const numBins = Math.floor(fpsMax / 50)
//   const fps = numChannels * fpsPerChannel
//   const fpsRemain = FPS_MAX - fps

//   const layerWidth =
//     MIN_LAYER_WIDTH +
//     Math.floor((MAX_LAYER_WIDTH - MIN_LAYER_WIDTH) * (fpsRemain / FPS_MAX))
//   const numLayers =
//     Math.floor(
//       fpsRemain / Math.floor(FPS_MAX / (MAX_NUM_LAYER - MIN_NUM_LAYER + 1))
//     ) + MIN_NUM_LAYER

//   return {
//     layerWidth,
//     numLayers,
//   }
// }

export function calModelSize(
  numChannels = 1,
  fpsPerChannel = 1
): { layerWidth: number; numLayers: number } {
  const fps = numChannels * fpsPerChannel
  const widthBinSize = 10
  const widthBinCnt = Math.floor(
    (MAX_LAYER_WIDTH - MIN_LAYER_WIDTH) / widthBinSize + 1
  )
  const fpsBinSize1 = Math.floor(FPS_MAX / widthBinCnt)
  const layerWidth =
    MAX_LAYER_WIDTH - Math.floor(fps / fpsBinSize1) * widthBinSize

  const fpsBinSize2 = Math.floor(
    (FPS_MAX - 16 * 35) / (MAX_NUM_LAYER - MIN_NUM_LAYER)
  )
  let numLayers = 4
  if (fps < 17 * 35) {
    numLayers = MAX_NUM_LAYER - Math.floor(fps / fpsBinSize2)
  }

  return {
    layerWidth,
    numLayers,
  }
}
