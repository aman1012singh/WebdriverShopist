export class Profile{
    get editProfileButton(){
        return $('.button')
    }
    get firstName(){
        return $('[id="firstname"]');        }
    get lastName(){
        return $('[id="lastname"]');
    }
    get address(){
        return $('[id="address1"]');

    }
    get address2(){
        return $('[id="address2"]');

    }
    get city(){
        return $('[id="addressCity"]');

    }
    get state(){//$$
        return $$('');

    }
    get zipcode(){
        return $('[id="addressZipcode"]');

    }
    get mobileNum(){
        return $('[id="phone"]');
    }
    get saveButton(){
        return $('[class="button big inverted"]')
    }
    get viewUpdatedProfileButton(){
        return $('[class="inline-link"]')
    }
   
    async clickEditProfileButton(){
        await this.editProfileButton.click();
    }
    async enterFirstName(name : string){
        await this.firstName.clearValue();
        await this.firstName.setValue(name);
    } 
    async enterLastName(name : string){
        await this.lastName.clearValue();
        await this.lastName.setValue(name);
    } 
    async enterAddress(addr1 : string, addr2: string){
        await this.address.clearValue();
        await this.address.setValue(addr1);
        await this.address2.clearValue();
        await this.address2.setValue(addr2);
    } 
    async enterCityName(name : string){
        await this.city.clearValue();
        await this.city.setValue(name);
    } 
    async selectState(state : string){
        console.log(state);
    } 
    async enterZipCode(code : string){
        await this.zipcode.clearValue();
        await this.zipcode.setValue(code);
    } 
    async enterMobileNum(number : string){
        await this.mobileNum.clearValue();
        await this.mobileNum.setValue(number);
    } 
    async clicksaveButton(){
        await this.saveButton.click();
    }
    async clickViewUpdatedProfileButton(){
        await this.viewUpdatedProfileButton.click();
    }


    
}