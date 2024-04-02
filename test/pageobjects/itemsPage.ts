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
        console.log(name);
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
}