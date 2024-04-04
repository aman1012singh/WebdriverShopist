import { Cart } from "../pageobjects/cartPage";
import { Homepage } from "../pageobjects/homePage";
import { Itempage } from "../pageobjects/itemsPage";
import { Profile } from "../pageobjects/myProfilePage";
describe("Shop.ist Test Suite",()=>{
    let homepage: Homepage;
    let itempage: Itempage;
    let cartpage: Cart
    let profile: Profile;
    beforeEach(() => {
        browser.url("https://shopist.io/");
        browser.maximizeWindow();
        homepage=new Homepage();
        itempage= new Itempage();
        cartpage = new Cart();
        profile = new Profile();
    });

    it("Checking Header Links", async()=>{
       homepage.clickHeaderLink("CHAIRS");
       await homepage.isHeaderLinkOpen("chairs")
       browser.back();
       homepage.clickHeaderLink("SOFAS");
       await homepage.isHeaderLinkOpen("sofas");
       browser.back();
       homepage.clickHeaderLink("BEDDING");
       await homepage.isHeaderLinkOpen("bedding");
       browser.back();
       homepage.clickHeaderLink("LIGHTING");
       await homepage.isHeaderLinkOpen("lighting");
       browser.back();
       homepage.clickHeaderLink("MY PROFILE");
       await homepage.isHeaderLinkOpen("profile");
       browser.back();
       homepage.clickHeaderLink("CART");
       await homepage.isHeaderLinkOpen("cart");
       browser.back();
    })
    it("Add Elements To Cart", async()=>{
        homepage.clickHeaderLink("SOFAS");
        await browser.pause(8000);

        await homepage.isHeaderLinkOpen("sofas");
        await itempage.clickProduct("Ivory Covertible Sofa");
        await itempage.assertClickedProduct("Ivory Covertible Sofa");
        await browser.pause(8000);
        await itempage.clickAddToCartButton();
        homepage.clickHeaderLink("CART");
        await homepage.isHeaderLinkOpen("cart");
        expect(await cartpage.isProductAddedToCart("Ivory Covertible Sofa")).toBeTruthy();
        await browser.pause(10000);
    })
    
    // it("Add multiple items in the cart assert total", async()=>{
        
    // })
    it("Try to add sold out item ", async()=>{
        console.log("Try to add sold out item ::::::::::::::::::::::::::::::::::::")
        homepage.clickHeaderLink("SOFAS");
        await homepage.isHeaderLinkOpen("sofas");
        await itempage.clickProduct("Tall Tufted Couch");
        await itempage.isErrorMsgDisplayed();
        await browser.pause(10000);        
    })
    it("Add element and checkout", async()=>{
        console.log("Add Elements To Cart::::::::::::::::::::::::::::::::::::")
        homepage.clickHeaderLink("SOFAS");
        await homepage.isHeaderLinkOpen("sofas");
        await itempage.clickProduct("Ivory Covertible Sofa")
        await itempage.clickAddToCartButton();
        homepage.clickHeaderLink("CART");
        await homepage.isHeaderLinkOpen("cart");
        await cartpage.clickCheckoutButton();
        await browser.pause(10000);
        
    })
    it("Edit Profile-> Save Profile -> View Updated Profile", async()=>{
        homepage.clickHeaderLink("MY PROFILE");
        await homepage.isHeaderLinkOpen("profile");
        await browser.pause(2000);
        profile.clickEditProfileButton();
        await browser.pause(2000);
        await profile.enterFirstName("AMAN");
        await profile.enterLastName("SINGH");
        await profile.enterAddress("A1", "A@@2");
        await profile.enterCityName("PUNE");
        await profile.selectState("MH");
        await profile.enterMobileNum("000000000000");
        await profile.enterZipCode("77777");
        await browser.pause(2000);
        await profile.clicksaveButton();
        await browser.pause(2000);
        await profile.clickViewUpdatedProfileButton();
        await browser.pause(10000);
    })
    // it("Sign Up problem", async()=>{
        
    // })
   
   

})