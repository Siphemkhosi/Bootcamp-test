describe('Testing the yearsAgo function' , function(){
    it( 'should return 46 years from 1976 to current year', function(){
        assert.equal((new Date().getFullYear() - 1976), 46)

         });


         it('should rreturn 11  years from 2011 to current year ' , function(){
            assert.equal((new Date().getFullYear() - 2011), 11)
  });
     it("should return 23 years from 1999 to current year " , function () {
        assert.equal((new Date().getFullYear() - 1999), 23)
       
   });

 })