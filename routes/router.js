const router = require('express').Router();
const pages = require('../controllers/pages');



    router.get('/', pages.home);
    router.get('/aboutus', pages.aboutus);
    router.get('/contact', pages.contact);
    router.get('/mission', pages.mission);
    


module.exports = router;