const {
    homePage,
    newPage,
    listPage
} = require('./files');

const reservationData = require('../data/reservationData');
const { json } = require('express');

const renderHomePage = (req, res) => {
    res.sendFile(homePage)
};

const renderViewReservationsPage = (req, res) => {
    res.sendFile(newPage)
};

const renderNewReservationsPage = (req, res) => {
    res.sendFile(listPage)
};

const fetchWaitList = (req, res) => {
    // Get all waitlist files
    const waitlist = reservationData.filter(res => res.waitlist)
    res.json(waitlist)
};

const fetchReservations = (req, res) => {
    // Get all non waitlist files
    const reservations = reservationData.filter(res => !res.waitlist)
    res.json(reservations)
};

const fetchAllReservations = (req, res) => {
    res.json(reservationData)
};

const createReservations = (req, res) => {
    const { id, name, phone, email, waitlist } = req.body;

    console.log({ id, name, phone, email, waitlist })

    if (!id || !name || !phone || !email) {
        return res.json({success: false, message: 'Your submission is missing required fields.' })
    }

    const existingReservation = reservationData.some(item => item.id === id);

    if (existingReservation) {
        return res.json({
            success: false,
            message: 'You reservation is already taken.'
        });
    }

    const formResponse = {
        id, name, phone, email, waitlist
    }

    reservationData.push(formResponse)
    return res.json({
        success: true,
        waitlist: false,
        message: 'Your reservation was successful booked'
    });
};


module.exports = {
    renderHomePage,
    renderViewReservationsPage,
    renderNewReservationsPage,
    fetchWaitList,
    fetchReservations,
    fetchAllReservations,
    createReservations
}