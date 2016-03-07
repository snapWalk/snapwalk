import expect from 'expect';

describe('A Simple Test', function() {
    describe('when 1 is added to 1', function() {
        it('should return 2', function () {
            expect(1+1).toEqual(2);
        });
    });
});
