/// <reference types="vite/client" />

declare type ServerRender = (
  url: string,
  ctx: {
    setTitle?: (t: string) => void
  }
) => Promise<string>
