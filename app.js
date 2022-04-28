import path from 'path'
import _ from 'lodash'
import { sayHi } from './actions.js'
import { name } from './name.js'

console.log("Wassup :)")
sayHi(name)

console.log(path.resolve("./app.js"))
console.log(
    _.isEqual([1], [1]),
    __filename
)
sdsa
//import {sayHi} from './actions.js'