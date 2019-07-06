import { DeepstreamPlugin, StorageWriteCallback, StorageReadCallback, Storage } from '../../types'

export class NoopStorage extends DeepstreamPlugin implements Storage {
  public description = 'noop storage'
  public apiVersion: number = 2

  public set (key: string, version: number, data: any, callback: StorageWriteCallback) {
    callback(null)
    process.nextTick(() => callback(null))
  }

  public get (key: string, callback: StorageReadCallback) {
    process.nextTick(() => callback(null, -1, null))
  }

  public delete (key: string, callback: StorageWriteCallback) {
    process.nextTick(() => callback(null))
  }

  public deleteBulk (key: string[], callback: StorageWriteCallback) {
  }
}