test('Test example', () => {
    /* if (1 === 0) {
        throw new Error('Cannot be divided by zero')
    } */
    const message1 = 'Hello World';
    const message2 = message1.trim();

    expect( message1 ).toBe( message2 );
    
})