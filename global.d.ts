import { Window } from 'happy-dom'
declare global {
  // eslint-disable-next-line no-var
  var _buildTime: string
  // eslint-disable-next-line no-var
  var happyDOM: Window['happyDOM']
}
