import '../server/lib/environment'
import { spawn } from 'child_process'
import chalk from 'chalk'
import path from 'path'

const log = (...options) => {
  const style = options[0] === 'error' ? chalk.red('e') : chalk.blue('i')
  const service = chalk.grey(`[${options[1]}]`)
  const message = chalk.white(`: ${options[2]}`)
  process.stdout.write(`${style} ${service} ${message}\n`)
}

const serverWatch = async () => {

  const proc = spawn('nodemon', [
    path.resolve('src','scripts','server.js'),
    '--color',
    '--quiet',
    '--exec',
    'babel-node',
    '--watch',
    path.resolve('src','server')
  ], {
    stdio: ['pipe', 'pipe', 'pipe', 'ipc']
  })


  proc.on('message', function (event) {
    if(event.type === 'start') {
      log('info', 'nodemon', 'Compiling...')
    }
  })

  proc.stdout.on('data', function (data) {
    log('info', 'nodemon', data.toString().replace('\n',''))
  })

  proc.stderr.on('data', function (err) {
    log('error', 'nodemon', err.toString())
  })

}

export const dev = async () => {

  await serverWatch()

}

dev()
