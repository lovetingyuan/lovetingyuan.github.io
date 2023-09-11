/* eslint-disable no-var */
import type { Window } from 'happy-dom'

declare global {
  var _buildTime: string
  var _buildHash: string
  var happyDOM: Window['happyDOM']
  var _ssrPage: boolean
}
