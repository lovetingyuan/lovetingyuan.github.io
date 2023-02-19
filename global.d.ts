interface Window {
  _buildTime: string
  _gitHash: string
}

declare global {
  // eslint-disable-next-line no-var
  var _buildTime: string
}
export {}
