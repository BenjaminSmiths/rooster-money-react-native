import parentStore from "./ParentStore"


jest.setMock('AsyncStorage', {
    getItem: jest.fn(
        item =>
            new Promise((resolve, reject) => {
                resolve();
            })
    ),
    setItem: jest.fn(
        item =>
            new Promise((resolve, reject) => {
                resolve();
            })
    ),
});

describe("AuthStore", () => {
    beforeEach(() => {
        fetch.resetMocks()
        parentStore.logout()
    })

    it("login gets a token", (done) => {
        // Given
        fetch.mockResponseOnce(JSON.stringify({ token: '12345' }))

        // When
        parentStore.login()
            .then(() => {
                // Then
                expect(parentStore.isAuthenticated).toBeTruthy()
                expect(parentStore.getToken).toEqual('12345')
                done()
            })
    })

    it("login fails with AuthFailedError", (done) => {
        // Given
        fetch.mockResponseOnce(JSON.stringify({ error: 'AuthFailedError' }))

        // When
        parentStore.login()
            .catch(err => {
                expect(err).toEqual('AuthFailedError')
                expect(parentStore.isAuthenticated).toBeFalsy()
                expect(parentStore.getToken).toEqual(null)
                done()
            })
    })

    it("login fails with ApiVersionError", (done) => {
        // Given
        fetch.mockResponseOnce(JSON.stringify({ error: 'ApiVersionError' }))

        // When
        parentStore.login()
            .catch(err => {
                expect(err).toEqual('ApiVersionError')
                expect(parentStore.isAuthenticated).toBeFalsy()
                expect(parentStore.getToken).toEqual(null)
                done()
            })
    })

    it("login fails with MissingParameterError", (done) => {
        // Given
        fetch.mockResponseOnce(JSON.stringify({ error: 'MissingParameterError' }))

        // When
        parentStore.login()
            .catch(err => {
                expect(err).toEqual('MissingParameterError')
                expect(parentStore.isAuthenticated).toBeFalsy()
                expect(parentStore.getToken).toEqual(null)
                done()
            })
    })
})