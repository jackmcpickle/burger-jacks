const express = require('express');
const {
    renderHomePage,
    renderViewReservationsPage,
    renderNewReservationsPage,
    fetchWaitList,
    fetchReservations,
    fetchAllReservations,
    createReservations,
} = require('./routes/routes')


const PORT = 3000;

const app = express()

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const tables = [];
const waitList = [];

// HTML
app.get('/', renderHomePage);
app.get('/reservations/new', renderViewReservationsPage);
app.get('/reservations/view', renderNewReservationsPage);

// API
app.get('/api/waitlist', fetchWaitList)
app.get('/api/reservations', fetchReservations)
app.get('/api/reservations/all', fetchAllReservations)
app.post('/api/reservations/create', createReservations)


app.listen(3000, () => console.log(`
==========================================
    Burger Jacks
==========================================
open and ready http://localhost:${PORT}
`))