export class Homepage {
    get headerLink() {
        return $$('[class="menu-item-large"]');
    }
    async clickHeaderLink(linkText: string) {
        const links = await this.headerLink;
        for (let i = 0; i < links.length; i++) {
            const text = await links[i].getText();
            if (text.includes(linkText)) {
                await links[i].waitForClickable();
                await links[i].click();
                break; // Exit the loop once the link is clicked
            }
        }
    }
    async isHeaderLinkOpen(linkText: string){
        await expect(browser).toHaveUrl(expect.stringContaining(linkText));
    }
}
