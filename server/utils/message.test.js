var expect = require('expect');
var { generateMessage } = require('./message');

describe('GenerateMessage', () => {
    it('should generate correct mesaage object', () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    })
})