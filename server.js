
import { WebSocketServer } from "ws";
import { v4 as uuid } from 'uuid'

const clients = {}

const wss = new WebSocketServer({port: 9000});
wss.on('connection', ws => {
  const id = uuid()
  clients[id] = ws
  console.log(`New client ${id}`)
  ws.on('message', rawMessage => {})
  ws.on('close', () => {
    delete clients[id]
    console.log(`client ${id} is closed`)
  })
})

