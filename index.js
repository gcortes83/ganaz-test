import * as fs from 'fs';
import {Solution} from './solution.js'

fs.readFile('input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  } else {
    console.log("Input")
    console.log(data)
    Solution.validateReservations(data);
  }
})