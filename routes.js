const router = require ('express').Router()

router.get('/',(req, res)=> {
   const {page, total} = req.query
    res.send({
        status : 'Succesfully',
        message: 'Welcome Homepage',
        page,
        total
    })
})

router.get('/product/:id', (req, res)=> {
    res.send({
        id: req.params.id
    })
})

router.get('/category/:tag', (req, res)=> {
    const {category, tag} = req.params
    res.send({
        category: category,
        tag: tag
    })
})

router.get('/about', (req, res)=> {
    res.sendFile(path.join(view + "about.html"))
})
router.get('/contact', (req, res)=> {
    res.sendFile(path.join(view + "contact.html"))
})



module.exports = router;