describe('this test should greet a person' , function(){
    it('should return bob when called with bob' , function(){
        assert.equal("Hello, bob" ,greet("bob"), "this should not be true");


    });
    it('should return nela when called with nela' , function(){
        assert.equal("Hello, nela" ,greet("nela"), "this should not be true");
    });
    it("should return  when there is no name called" , function () {
        assert.equal("Hello, " ,greet(""), "this should not be true");
    });

});