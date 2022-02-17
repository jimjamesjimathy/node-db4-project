const router = require('express').Router();

router.use('*', (req, res, next) => {
    res.json({ api: 'up and running'})
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.ststus(500).json({ 
        cMessage: 'up and running',
        message: err.message,
        stack: err.stack,
     })
})

module.exports = router;