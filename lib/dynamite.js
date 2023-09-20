export default async function (app) {
  if (app.platformatic.config.dynamite) {
    app.log.info('Dynamite enabled')
    app.get('/dynamite', async (req, res) => {
      return 'Kaboom!'
    })
  }
}
