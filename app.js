//載入Express
const express = require('express')
const app = express()

//設定連接埠號
const port = 3000

//載入express-handlebars
const exphbs = require('express-handlebars')
//設定樣板引擎，告訴Express要使用express-handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//設定靜態檔案讀取位置
app.use(express.static('public'))

//設定根目錄(首頁)路由
app.get('/', (req, res) => {
  res.render('index')
})

//設定動態(其他頁面)路由
app.get('/:page', (req, res) => {
  const currentPage = req.params.page
  let path_1 = false
  let path_2 = false
  let path_3 = false
  if (currentPage === 'about') {
    path_1 = true
  }
  if (currentPage === 'portfolio') {
    path_2 = true
  }
  if (currentPage === 'contact') {
    path_3 = true
  }
  
  const firstLetter = req.params.page.charAt(0)
  const title = req.params.page.replace(firstLetter, firstLetter.toUpperCase())
  res.render('page', {pageTitle: title, path_1, path_2, path_3})
})

app.listen(port, () => {
  console.log(`Express is now running on localhost:${port}`)
})