import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'

import { router } from './router'

export const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(router)