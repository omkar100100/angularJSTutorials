describe('Hello World Test',function(){
	var greeter;
	
	beforeEach(){
		greeeter=new Greeter();
	}
	
	it('Should say hello to the world',function(){
		expect(greeter.say('Chandu')).toEqual('Hello World');
	});
});