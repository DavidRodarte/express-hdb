const express = require('express');
const app = express();

const hbs = require('hbs');

const port = process.env.PORT || 3000;
/**
 * Contenido estático, sirve para páginas web estáticas
 */
app.use(express.static(__dirname+'/public'));


/**
 * Uso de partials para poder incluír módulos y evitar repetición
 * de código en las plantillas
 */

 hbs.registerPartials( __dirname + '/views/parciales');

/**HBS Engine para páginas dinámicas,
 * es necesario usarse con archivos extensión .hbs (handlebars)
 */
app.set('view engine', 'hbs');

/**
 * Se utiliza el render para poder
 * utilizar los .hbs, adicional, se puede mandar un objeto con variables
 */
app.get('/', (req, res) => {
    res.render('home', {
        pagina: 'Inicio',
        nombre: 'David',
        anio : new Date().getFullYear()
    });
});

app.get('/acerca-de', (req, res) => {
    res.render('acerca', {
        pagina: 'Acerca de'
    });
});

app.listen(port, ()=> console.log(`Servidor iniciado en el puerto ${port}`));