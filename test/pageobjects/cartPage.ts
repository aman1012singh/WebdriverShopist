export class Cart{
    get checkoutButton(){
        return $('.checkout')
    }
    async clickCheckoutButton(){
        await this.checkoutButton.click();
    }
}