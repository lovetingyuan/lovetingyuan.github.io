/* eslint-disable no-var */

import { Window } from 'happy-dom'
declare global {
  var _buildTime: string
  var happyDOM: Window['happyDOM']
  var _ssrPage: boolean
}
