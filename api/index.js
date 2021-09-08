const express = require('express')
const cnode = require('./cnode')

const router = express.Router()

router.get('/', function (req, res) {
  res.json({
    msg: 'Hi'
  })
})

router.get('/topics', (req, res) => {
  cnode.get('/api/v1/topics', {
    params: req.query
  }).then(result => {
    res.json(result.data)
  }).catch(err => {
    res.json({
      success: false,
      msg: err.message
    })
  })
})

router.get('/topics/:id', (req, res) => {
  cnode.get(`/api/v1/topic/${req.params.id}`, {
    params: req.query
  }).then(result => {
    res.json(result.data)
  }).catch(err => {
    res.json({
      success: false,
      msg: err.message
    })
  })
})

module.exports = router
