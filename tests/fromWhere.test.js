describe('Testing the fromWhere function' , function(){
    it('should return Bellville for CY' , function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('should return Paarl for CJ' , function(){
        assert.equal(fromWhere('CJ'), 'Paarl'); 
    });
    it("should return  Not Found if reg is not on the list" , function () {
        assert.equal(fromWhere('not Found'), 'Some other place!')
    });

});


