module.exports = {
  register: async (req, res) => {
    try{
      const {username, password} = req.body
      const db = req.app.get('db')
      let user = await db.register({username, password})
      user = user[0]
      res.status(200).send(user)
    } catch (err) {
      res.status(401)
      console.log(err)
    }
  },
  login: async (req, res) => {
    try{
      const {username, password } = req.body
      const db = req.app.get('db')
      let user = await db.login({username, password})
      user = user[0]
      res.status(200).send(user)
    } catch (err) {
      res.status(401)
      console.log(err)
    }
  }
}
//   getAllPosts: (req, res) => {
//     const db = req.app.get('db')

//   }
// }