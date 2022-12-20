const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
app.use(cors())

/*
app.get('/user/:id', function (req, res) {
    res.sendFile(__dirname + '/index.html')

  })
*/
 
app.get('/sound/:name', function (req, res) {
    const {name} = req.params
    //res.send(name)
    if(name == "dog"){

        res.json({"sound":"멍멍"})

    }else if(name == "cat"){
        res.json({"sound":"야옹"})        

    }else if(name == "pig"){
        res.json({"sound":"꿀꿀"})
    }else{
        res.json({"sound":"알수없음"})

    }
    //const q = req.query
    //res.json({"userid":q.id,"name":q.name})
  })

/*
app.get('/user/:id', function (req, res) {
    //const q = req.params
    //res.send(q.id)
    const q = req.query
    res.json({"userid":q.id,"name":q.name})
  })
*/
 /* 
  app.post('/p/:id', function (req, res) {
    //const q = req.params
    //res.send(q.id)
    const q = req.body
    res.json({"userid":q.id,"name":q.name})
  }) 
*/
/*
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/dog', function (req, res) {
    res.send('강아지')
  })

  app.get('/cat', function (req, res) {
    res.send('고양이')
  }) 
*/
app.listen(port)