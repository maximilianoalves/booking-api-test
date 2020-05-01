// Get
Cypress.Commands.add('allBookings', () => {
    cy.request({
        method: 'GET',
        url: '/booking',
        failOnStatusCode: false
    })
})

// Post
Cypress.Commands.add('token', () => {
    cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: '/auth',
        headers: {
            accept: 'application/json'
        },
        body: {
            "username": "admin",
            "password": "password123"
        }
    })
})

// Put
Cypress.Commands.add('updateBookingWithToken', (id, token) => {
    cy.request({
        method: 'PUT',
        failOnStatusCode: false,
        url: `/booking/${id}`,
        headers: {
            accept: "application/json",
            Cookie: `token=${token}`
        },
        body: {
            "firstname": "João",
            "lastname": "Silva",
            "totalprice": 150,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2020-07-15",
                "checkout": "2020-07-20"
            },
            "additionalneeds": "Breakfast"
        }
    })
})
