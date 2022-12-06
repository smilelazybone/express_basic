const express = require(`express`)
const app = express()
const port = 3000
const exphbs = require(`express-handlebars`)

app.engine(`handlebars`, exphbs.engine({ defaultLayout: `main` }))
app.set(`view engine`, `handlebars`)

app.use(express.static(`stylesheet`))
// app.get 設定路由 res.send 設定伺服器回應的內容 app.listen啟動伺服器監聽
app.get(`/`, (req, res) => {
  res.render(`index`)
})
app.get(`/about`, (req, res) => {
  res.render(`about`)
})
app.get(`/portfolio`, (req, res) => {
  res.render(`portfolio`)
})
app.get(`/contact`, (req, res) => {
  res.render(`contact`)
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)

})