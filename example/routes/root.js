export default async function (app) {
  app.get('/', async (req, res) => {
    return app.greeting + ' World!'
  })
}
