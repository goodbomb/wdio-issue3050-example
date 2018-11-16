describe('Issue 3050 from the webdriver.io project', () => {
    it('should show the console.log from "myCommand" but it does not (it gets swallowed somewhere)', () => {
        browser.url('https://github.com/');
        browser.myCommand('********** THIS SHOULD SHOW UP IN CONSOLE AS ACTUAL OUTPUT, NOT JUST AS PART OF THE DATA LOG **********');
        expect(browser.getTitle()).toBe('The world’s leading software development platform · GitHub');
    });
});