describe('Put Booking', () => {
    it('Alterar uma reserva usando o token - @acceptance', () => {
        cy.token().then((resToken) => {
            cy.log(resToken.body.token)
            cy.allBookings().then((resAllBookings) => {
                cy.log(resAllBookings.body)
                cy.updateBookingWithToken(resAllBookings.body[0].bookingid, resToken.body.token).then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.firstname).to.eq("João")
                })
            })
        })
    });
});