const path = require('path')
const utils = require('shipit-utils')

module.exports = shipit => {

  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      deployTo: '/var/www/amts/translation',
      repositoryUrl: 'https://github.com/agmodelsystems/translation.git',
      key: '~/.ssh/id_rsa_cf11711668bd284698b636afe4de739e',
      workspace: path.resolve('repo'),
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      strict: 'no'
    },
    production: {
      servers: 'root@api2.agmodelsystems.com'
    }
  })

  const deployDir = shipit.config.deployTo

  const sharedDir = deployDir + '/shared'

  const releaseDir = deployDir + '/releases'

  const currentDir = deployDir + '/current'

  utils.registerTask(shipit, 'deploy:prepare', [
    'deploy:install_modules',
    'deploy:build',
    'deploy:link'
  ])

  utils.registerTask(shipit, 'deploy:release', [
    'deploy:reload_appserver',
    'deploy:cache_app'
  ])

  utils.registerTask(shipit, 'deploy:config', () => {
    return shipit.remote([
      `mkdir -p ${releaseDir}`,
      `mkdir -m 777 -p ${sharedDir}/tmp`,
      `mkdir -m 777 -p ${sharedDir}/logs`,
      `chown -R nobody.nobody ${sharedDir}/*`
    ].join(' && '))
  })

  utils.registerTask(shipit, 'deploy:install_modules', () => {
    return shipit.remote(`cd ${shipit.releasePath} && npm install`)
  })

  utils.registerTask(shipit, 'deploy:build', () => {
    return shipit.remote(`cd ${shipit.releasePath} && NODE_ENV=production npm run build && chown -R nobody.nobody dist`)
  })

  utils.registerTask(shipit, 'deploy:link', () => {
    return shipit.remote([
      `cd ${shipit.releasePath}`,
      `rm -rf ${shipit.releasePath}/tmp && ln -s ${sharedDir}/tmp`,
      `rm -rf ${shipit.releasePath}/logs && ln -s ${sharedDir}/logs`,
      `rm -rf ${shipit.releasePath}/.env && ln -s ${sharedDir}/.env`,
      `rm -rf ${shipit.releasePath}/knexfile.js && ln -s ${sharedDir}/knexfile.js`
    ].join(' && '))
  })

  utils.registerTask(shipit, 'deploy:reload_appserver', () => {
    return shipit.remote(`touch ${currentDir}/tmp/restart.txt`)
  })

  utils.registerTask(shipit, 'deploy:cache_app', () => {
    return shipit.remote('wget -O - http://127.0.0.1:80/ping')
  })

  shipit.on('updated', function () {
    return shipit.start('deploy:prepare')
  })

  shipit.on('deployed', function () {
    return shipit.start('deploy:release')
  })
}
