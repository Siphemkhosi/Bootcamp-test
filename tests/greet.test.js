describe('this test should greet a person' , function(){
    it('should return bob when called with bob' , function(){
        assert.equal("Hello, bob" ,greet("bob"), true);

    });
    it('should return nela when called with nela' , function(){
        assert.equal("Hello, nela" ,greet("nela"), false);
    });
    it("should return  an error when there is no name called" , function () {
        assert.equal("enter valid name please" ,greet(""), true);
    });
    it("should return  an error when there is no name called" , function () {
        assert.equal("enter valid name please" ,greet(4), true);1
    });

});