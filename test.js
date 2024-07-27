import drawCandleStick from './index.js'
import { writeFileSync } from 'fs'
var input = {
  open: [30.10, 27.18, 29.87],
  high: [32.40, 28.32, 30.70],
  close: [29.30, 27.00, 30.62],
  low: [28.50, 24.67, 29.30],
}
var buffer = drawCandleStick(input);
writeFileSync('result.png', buffer);