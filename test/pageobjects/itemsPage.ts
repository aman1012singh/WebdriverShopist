export class Itempage{
    get productStatusLocator(){
        return $$('.product-card-container div div div');
    }
    get productNamePriceLocator(){
        return $$('.product-card-container .description div');
    }
    get productImgLocatorClickable(){
        return $$('.product-card-container div img');
    }
    get addToCartButton(){
        return $('.purchase-button');
    }
    get productDescription(){
        return $$('[class="description"] div div');
    }
    get soldOutErrorMsg(){
        return $('[class="modal-title"]');
    }
    get shopContinueButton(){
        return $('[class="modal-button"]');
    }
    async isAvailable(name: string): Promise<boolean> {
        const productLink = await this.productNamePriceLocator;
        let i;
        for( i =0; i<productLink.length;i+=2 ){             
            const productName =await productLink[i].getText();
            if(productName==name){
                break;
            }
        }
        const productStatus = await this.productStatusLocator;
        let status: boolean = false;            
            const productAvailability =await productStatus[i/2].getText();
            if(productAvailability=='IN STOCK'){
                status = true;
            }
        return status;
    }
    async clickProduct(name:string){
        const productLink = await this.productNamePriceLocator;
        for(let i =0; i<productLink.length;i+=2 ){             
            const productName =await productLink[i].getText();
            if(productName==name){
                if(await this.isAvailable(name)){
                    await this.productImgLocatorClickable[i/2].click();
                    break;
                }
                else {
                    await this.productImgLocatorClickable[i/2].click();
                    break;
                }
            }
        }
   }
   async clickAddToCartButton() {
        await this.addToCartButton.click();
   }
   async assertClickedProduct(name: string){
       const productDesc=  await this.productDescription;
       const productName= await productDesc[0].getText();
    //    const productPrice= await productDesc[1].getText();
       await expect(productName).toContain(name);
   }
   async isErrorMsgDisplayed(){
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<", await this.soldOutErrorMsg.getText());
        await expect(await this.soldOutErrorMsg).toHaveText("Oops! This item is sold out.");
        await this.shopContinueButton.click();
   }
}