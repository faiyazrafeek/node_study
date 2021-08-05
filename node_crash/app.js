const express = require('express');

// express app
const app = express();

// register vie engine
app.set('view engine', 'ejs');

// listen for request
app.listen(5000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Lorem ipsum dolor, sit amet consectetur adipisicing', snippet: 'Lorem, ipsum dolor sitonsectetur adipisicing elit. Vero, dolorem! Similique nobis molestias vel officia corrupti sunt quidem nesciunt repellendus?'},
        {title: 'ipsum dolor, sit amet consectetur adipisicing', snippet: 'Loret consectetur adipisicing elit. Vero, dolorem! Similique nobis molestias vel officia corrupti sunt quidem nesciunt repellendus?'},
        {title: 'sit amet consectetur adipisicing', snippet: 'Lorem, ipsum dolor sit amet ipisicing elit. Vero, dolorem! Similique nobis molestias vel officia corrupti sunt quidem nesciunt repellendus?'}
    ]
    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create'});
});

// redirects
app.get('/about-us', (req, res) =>{
    res.redirect('about');
} )

// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
})