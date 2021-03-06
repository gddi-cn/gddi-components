import { CalNNSizeFunc, CalNetworkSizeFunc } from '../components'

const minFpsPerChannel = 1
const maxFpsPerChannel = 30
const minChannel = 1
const maxChannel = 32
const FPS_MAX = maxFpsPerChannel * maxChannel
const MIN_LAYER_WIDTH = 100
const MAX_LAYER_WIDTH = 350
const MIN_NUM_LAYER = 4
const MAX_NUM_LAYER = 8

export function validateChannel(channels: number): number {
  if (channels < minChannel) {
    return minChannel
  }
  if (channels > maxChannel) {
    return maxChannel
  }
  return channels
}

export function validateFPS(fps: number): number {
  if (fps < minFpsPerChannel) {
    return minFpsPerChannel
  }
  if (fps > maxFpsPerChannel) {
    return maxFpsPerChannel
  }
  return fps
}

export const calNNSize: CalNNSizeFunc = (
  numChannels = 1,
  fpsPerChannel = 1
) => {
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

const MAX_NETWORK_N = 1800
const MIN_NETWORK_N = 60

export const calNetworkSize: CalNetworkSizeFunc = (
  numChannels = 1,
  fpsPerChannel = 1
) => {
  const k = (MIN_NETWORK_N - MAX_NETWORK_N) / (FPS_MAX - 1)
  const b = MAX_NETWORK_N - k
  const fps = numChannels * fpsPerChannel
  return Math.floor(k * fps + b)
}
