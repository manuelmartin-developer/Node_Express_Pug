const pages = {

    home: (req, res) => {
        let msj = "Esto es la página de inicio...bla bla bla....";
        let title = "Home";
        let img = "../img/home.jpg"
        res.status(200).render('template', {msj, title, img}); // home.pug
    },
    aboutus: (req, res) => {
        let msj = "Esto es about desde Pug";
        let title = "About Us";
        let img = "../img/aboutus.jpg"
        res.status(200).render('template', {msj, title, img})
    },
    contact: (req, res) => {
        let msj = "Esta es contact desde Pug";
        let title = "Contact";
        let img = "../img/contact.jpg"
        res.status(200).render('template', {msj, title, img})
    },
    mission: (req, res) => {
        let msj = "Esto es mission desde Pug";
        let title = "Our mission"
        let img = "../img/mission.jpg"

        res.status(200).render('template', {msj, title, img});

    }
   
};

module.exports = pages;