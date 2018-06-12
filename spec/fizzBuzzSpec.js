//FizzBuzz
//in fizzbuzz, you print the numbers 1 thru 100
//if the number is divisible by 3, print fizz
//if divisible by 5, print buzz
//if divisible by both, print fizzbuzz

// 1 = 1
// 2 = 2
// 3 = fizz
// 4 = 4
// 5 = buzz
// 6 = fizz
// 9 = fizz
// 15 = fizzbuzz

//describe takes two args
//1. name of testin block
//2. the function to run (which is the tests);
//We have access to describe, bc we included jasmine.js
describe("FizzBuzz Unit Test", ()=>{
	//it takes two args
	//1. name of this test
	//2. function to run(which is THIS test)
	it(`FizzBuzz must be defined`, ()=>{
		//expect takes 1 arg... 1. a JS statement to evaluate
		expect(fizzBuzz).toBeDefined();
		//if(fizzBzz() === undefined){test failed}
		//jasmine will do this for you
	});
	it(`Should be 1 for passing FizzBuzz 1`, ()=>{
		expect(fizzBuzz(1)).toBe(1);
	});
	it(`Should be 2 for passing FizzBuzz 2`, ()=>{
		expect(fizzBuzz(2)).toBe(2);
	});
	it(`Should be Fizz for passing FizzBuzz 3`, ()=>{
		expect(fizzBuzz(3)).toBe('Fizz');
	});
	it(`Should be Buzz for passing FizzBuzz 5`, ()=>{
		expect(fizzBuzz(5)).toBe('Buzz');
	});
	it(`Should be Fizz for passing FizzBuzz 6`, ()=>{
		expect(fizzBuzz(6)).toBe('Fizz');
	});
	it(`Should be FizzBuzz for passing FizzBuzz 15`, ()=>{
		expect(fizzBuzz(15)).toBe('FizzBuzz');
	});

	
	const random = Math.floor(Math.random()*1000) * 15 +15;
	it(`Should be FizzBuzz for passing FizzBuzz ${random}`, ()=>{
		expect(fizzBuzz(random)).toBe('FizzBuzz');
	})
});
