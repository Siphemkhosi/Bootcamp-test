describe('Testing the yearsAgo function' , function(){
    it( 'should return number of years from 1976 to current year', function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))

         });


         it('should rreturn number of years from 2011 to current year ' , function(){
            assert.equal((new Date().getFullYear() - 2011), yearsAgo(2011))
  });
     it("should return number of years from 1999 to current year " , function () {
        assert.equal((new Date().getFullYear() - 1999), yearsAgo(1999))
       
   });

 });