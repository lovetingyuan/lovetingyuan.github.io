/// <reference types="vite/client" />

interface Window {
  _buildTime: string
  _gitHash: string
}

declare type ServerRender = (
  url: string,
  ctx: {
    setTitle?: (t: string) => void
  }
) => Promise<string>
