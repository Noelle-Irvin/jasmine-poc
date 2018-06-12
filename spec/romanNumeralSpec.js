describe("Roman Numeral Unit Test", ()=>{
	it('Roman Numeral must be defined', ()=>{
		expect(romanNumeral).toBeDefined();
	});
	it('Roman Numeral must accept an int and return a romanNumeral', ()=>{
		expect(romanNumeral(1)).toBe('I');
	});
	it('Should be IV for passing roman Numeral 4', ()=>{
		expect(romanNumeral(4)).toBe('IV');
	});
	it('Should be IV for passing roman Numeral 4', ()=>{
		expect(romanNumeral(5)).toBe('V');
	});
	it('Should be IV for passing roman Numeral 4', ()=>{
		expect(romanNumeral(9)).toBe('IX');
	});
	it('Should be IV for passing roman Numeral 4', ()=>{
		expect(romanNumeral(23)).toBe('XXIII');
	});
	it('Should be IV for passing roman Numeral 4', ()=>{
		expect(romanNumeral(73)).toBe('LXXIII');
	});
	it('Should be IV for passing roman Numeral 4', ()=>{
		expect(romanNumeral(112)).toBe('CXII');
	});
});