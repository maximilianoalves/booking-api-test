import bookingIdsSchema from '../../contracts/bookingIds.contract'

describe('Get Booking ids', () => {
    it('Listar IDs das reservas - @acceptance', () => {
        cy.allBookings().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.null
        })
    });

    it('Garantir o contrato do retorno da lista de reservas - @contracts', () => {
        cy.allBookings().should((response) => {
            return bookingIdsSchema.validateAsync(response.body)
        })
    });
});