// function sum(a, b) {
//     return a + b;
// };

// describe("sum test", () => {
//     it('adds 1 + 2 to equal 3', () => {
//         expect(sum(1, 2)).toBe(3);
//     });
//     test('adds 1 + 1 to equal 3', () => {
//         expect(sum(1, 1)).toBe(3);
//     });
// })

describe('/pages/index/index', () => {
    let page
    beforeAll(async () => {
        // 重新reLaunch至首页，并获取首页page对象（其中 program 是uni-automator自动注入的全局对象）
        page = await program.reLaunch('/pages/index/index')
        await page.waitFor(3000)
    })
	it('login UI', async () => {
		const title = await page.$('#title');
		expect(await title.text()).toBe('Hello');
		
	})
	it('login commander', async () => {
		const phone = await page.$('#phonenumber');
		const pws = await page.$('#password');
		
		// 疑问2: element.input设置值 在mp-weixin有效；在h5端无效
		await phone.input('123456')
		await pws.input('abcd')
		
		console.log('phone&psw:', phone.tagName, pws.tagName, phone, pws, await phone.property('value'), await pws.property('value'),)
		await page.waitFor(1000)
		expect(await phone.value()).toBe('123456');
		expect(await pws.value()).toBe('abcd');
		
	});
})

