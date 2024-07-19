let url1="",url2="",url3="",url4="",url5="";
let detail1="",detail2="",detail3="",detail4="",detail5="";
let price1="",price2="",price3="",price4="",price5="";
let description1="",description2="",description3="",description4="",description5="";
let material1="",material2="",material3="",material4="",material5="";
let careGuide1="",careGuide2="",careGuide3="",careGuide4="",careGuide5="";

const getImage = (type) => {
if(type=="Sale" || type=="Ladies"){
    url1=`/LadiesImg/Ladies1.jpeg`;
    detail1="Milano Stretchable T-Shirt"
    price1="599"
    description1="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    material1="cotton: 95%, elastone: 5%"
    careGuide1="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url2=`/LadiesImg/Ladies2.jpeg`;
    detail2="Ribbed Vest Top"
    price2="799"
    description2="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    material2="cotton: 95%, elastone: 5%"
    careGuide2="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url3=`/LadiesImg/Ladies3.jpeg`;
    detail3="Ribbed Crop Top"
    price3="499"
    description3="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    material3="cotton: 95%, elastone: 5%"
    careGuide3="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url4=`/LadiesImg/Ladies4.jpeg`;
    detail4="One shoulder Top"
    price4="1,099"
    description4="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    material4="cotton: 95%, elastone: 5%"
    careGuide4="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url5=`/LadiesImg/Ladies5.jpeg`;
    detail5="Viscose tunic dress"
    price5="299"
    description5="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    material5="cotton: 95%, elastone: 5%"
    careGuide5="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

} else if(type=="Ladies") {
    url1=`/LadiesImg/Ladies1.jpeg`;
    detail1="Milano Stretchable T-Shirt"
    price1="599"
    description1="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    material1="cotton: 95%, elastone: 5%"
    careGuide1="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url2=`/LadiesImg/Ladies2.jpeg`;
    detail2="Ribbed Vest Top"
    price2="799"
    description2="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    material2="cotton: 95%, elastone: 5%"
    careGuide2="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url3=`/LadiesImg/Ladies3.jpeg`;
    detail3="Ribbed Crop Top"
    price3="499"
    description3="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    material3="cotton: 95%, elastone: 5%"
    careGuide3="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url4=`/LadiesImg/Ladies4.jpeg`;
    detail4="One shoulder Top"
    price4="1,099"
    description4="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    material4="cotton: 95%, elastone: 5%"
    careGuide4="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url5=`/LadiesImg/Ladies5.jpeg`;
    detail5="Viscose tunic dress"
    price5="299"
    description5="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    material5="cotton: 95%, elastone: 5%"
    careGuide5="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

} else if(type=="Men") {
    url1=`/MenImg/Men1.jpeg`;
    detail1="Milano Stretchable T-Shirt"
    price1="599"
    description1="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    material1="cotton: 95%, elastone: 5%"
    careGuide1="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url2=`/MenImg/Men2.jpeg`;
    detail2="Loose Fit T-shirt"
    price2="399"
    description2="Loose T-shirt in ribbed jersey."
    material2="cotton: 95%, elastone: 5%"
    careGuide2="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url3=`/MenImg/Men3.jpeg`;
    detail3="Regular Fit T-shirt"
    price3="799"
    description3="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    material3="cotton: 95%, elastone: 5%"
    careGuide3="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url4=`/MenImg/Men4.jpeg`;
    detail4="Slim Fit Polo shirt"
    price4="1099"
    description4="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    material4="cotton: 95%, elastone: 5%"
    careGuide4="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url5=`/MenImg/Men5.jpeg`;
    detail5="Slim Fit Easy-iron shirt"
    price5="699"
    description5="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    material5="cotton: 95%, elastone: 5%"
    careGuide5="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

} else if(type=="Baby") {
    url1=`/BabyImg/Baby1.jpeg`;
    detail1="Patterned sleepsuit"
    price1="599"
    description1="Sleep suits for the babies, trim around the neckline."
    material1="cotton: 95%, elastone: 5%"
    careGuide1="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url2=`/BabyImg/Baby2.jpeg`;
    detail2="Ribbed jersey top"
    price2="399"
    description2="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    material2="cotton: 95%, elastone: 5%"
    careGuide2="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url3=`/BabyImg/Baby3.jpeg`;
    detail3="Flounce-trimmed jersey dress"
    price3="1099"
    description3="jersey dress for the babies, trim around the neckline."
    material3="cotton: 95%, elastone: 5%"
    careGuide3="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url4=`/BabyImg/Baby4.jpeg`;
    detail4="Milano Stretchable T-Shirt"
    price4="799"
    description4="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    material4="cotton: 95%, elastone: 5%"
    careGuide4="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url5=`/BabyImg/Baby5.jpeg`;
    detail5="Skinny Fit Jeans"
    price5="499"
    description5="Elastic jeans for the babies."
    material5="cotton: 95%, elastone: 5%"
    careGuide5="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

} else if(type=="Kids") {
    url1=`/KidsImg/Kid1.jpeg`;
    detail1="Milano Stretchable T-Shirt"
    price1="599"
    description1="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    material1="cotton: 95%, elastone: 5%"
    careGuide1="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url2=`/KidsImg/Kid2.jpeg`;
    detail2="Ribbed jersey T-Shirt"
    price2="399"
    description2="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    material2="cotton: 95%, elastone: 5%"
    careGuide2="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url3=`/KidsImg/Kid3.jpeg`;
    detail3="Skinny Fit Jeans"
    price3="1099"
    description3="Elastic jeans for the kids."
    material3="cotton: 95%, elastone: 5%"
    careGuide3="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url4=`/KidsImg/Kid4.jpeg`;
    detail4="Pattern Stretchable T-Shirt"
    price4="799"
    description4="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline.."
    material4="cotton: 95%, elastone: 5%"
    careGuide4="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url5=`/KidsImg/Kid5.jpeg`;
    detail5="Loose Jeans"
    price5="499"
    description5="Elastic jeans for the kids."
    material5="cotton: 95%, elastone: 5%"
    careGuide5="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

} else if(type=="Sport") {
    url1=`/SportImg/Sport1.jpeg`;
    detail1="DryMove™ sports T-Shirt"
    price1="599"
    description1="Sports tshirt for gym."
    material1="cotton: 95%, elastone: 5%"
    careGuide1="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url2=`/SportImg/Sport2.jpeg`;
    detail2="DryMove™ sports Shorts"
    price2="399"
    description2="Shorts for the gym guys."
    material2="cotton: 95%, elastone: 5%"
    careGuide2="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url3=`/SportImg/Sport3.jpeg`;
    detail3="Sports Cap"
    price3="1099"
    description3="Elastic Cap for the gym guys or for your office work."
    material3="cotton: 95%, elastone: 5%"
    careGuide3="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url4=`/SportImg/Sport4.jpeg`;
    detail4="DryMove™ Pocket-detail sports Hoodie"
    price4="799"
    description4="Hoodie."
    material4="cotton: 95%, elastone: 5%"
    careGuide4="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    url5=`/SportImg/Sport5.jpeg`;
    detail5="Gym Carrying bag"
    price5="499"
    description5="Gym carrying bag for carrying your waterBottles,clothes,earphones etc."
    material5="cotton: 95%, elastone: 5%"
    careGuide5="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

} else if(type=="Jewellery") {
    url1=`/JewelleryImg/Jewellery1.jpeg`;
    detail1="24 Karat Diamond Ring"
    price1="33,000"
    description1="Ring for your loved ones."
    material1="Gold: 100%"
    careGuide1="Avoid Chemicals. Both metal and gemstones can be damaged if they come into contact with harsh chemicals,water or even moist air"

    url2=`/JewelleryImg/Jewellery2.jpeg`;
    detail2="Stainless Steel neck jewellery party wear"
    price2="3,999"
    description2="Neck jewellery for your loved ones."
    material2="Gold: 10%, stainless steel:90%"
    careGuide2="Avoid Chemicals. Both metal and gemstones can be damaged if they come into contact with harsh chemicals,water or even moist air"
    
    url3=`/JewelleryImg/Jewellery3.jpeg`;
    detail3="Chael kors 12 karat Gold watch"
    price3="50,999"
    description3="Watch for your loved ones."
    material3="Gold: 70%, stainless steel:30%"
    careGuide3="Avoid Chemicals. Both metal and gemstones can be damaged if they come into contact with harsh chemicals,water or even moist air"

    url4=`/JewelleryImg/Jewellery4.jpeg`;
    detail4="Pure Yellow stone neck jewellery"
    price4="100000"
    description4="Neck jewellery for your loved ones."
    material4="Gold: 100%"
    careGuide4="Avoid Chemicals. Both metal and gemstones can be damaged if they come into contact with harsh chemicals,water or even moist air"

    url5=`/JewelleryImg/Jewellery5.jpeg`;
    detail5="Stainless steel earrings"
    price5="2999"
    description5="Earrings for your loved ones."
    material5="Stainless steel: 500%"
    careGuide5="Avoid Chemicals. Both metal and gemstones can be damaged if they come into contact with harsh chemicals,water or even moist air"

} else if(type=="MakeUp") {
    url1=`/MakeUpImg/MakeUp1.jpeg`;
    detail1="Rare Beauty Blush"
    price1="1,099"
    description1="Blush for parties,office,colleges,events.."
    material1="Pure organic materials"
    careGuide1="keep makeup in a kit or drawer that is not directly exposed to sunlight, or to moisture from steam or water. Sunlight can accelerate the ageing of a product by heating it up, which can further break down active ingredients, so they're best left off the windowsill."

    url2=`/MakeUpImg/MakeUp2.jpeg`;
    detail2="Glitter EyeShadow"
    price2="999"
    description2="Glitter EyeShadow for parties,office,colleges,events."
    material2="Pure organic materials"
    careGuide2="keep makeup in a kit or drawer that is not directly exposed to sunlight, or to moisture from steam or water. Sunlight can accelerate the ageing of a product by heating it up, which can further break down active ingredients, so they're best left off the windowsill."

    url3=`/MakeUpImg/MakeUp3.jpeg`;
    detail3="Foundation brushes"
    price3="1200"
    description3="Foundation brushes easy to use,clean and dry."
    material3="Pure organic materials"
    careGuide3="keep makeup in a kit or drawer that is not directly exposed to sunlight, or to moisture from steam or water. Sunlight can accelerate the ageing of a product by heating it up, which can further break down active ingredients, so they're best left off the windowsill."

    url4=`/MakeUpImg/MakeUp4.jpeg`;
    detail4="Eyebrows brushes"
    price4="799"
    description4="Foundation brushes easy to use,clean and dry."
    material4="Pure organic materials"
    careGuide4="keep makeup in a kit or drawer that is not directly exposed to sunlight, or to moisture from steam or water. Sunlight can accelerate the ageing of a product by heating it up, which can further break down active ingredients, so they're best left off the windowsill."

    url5=`/MakeUpImg/MakeUp5.jpeg`;
    detail5="Lipstick concealer pack"
    price5="999"
    description5="Lipstick concealer pack"
    material5="Pure organic materials"
    careGuide5="keep makeup in a kit or drawer that is not directly exposed to sunlight, or to moisture from steam or water. Sunlight can accelerate the ageing of a product by heating it up, which can further break down active ingredients, so they're best left off the windowsill."

} else if(type=="Games") {
    url1=`/GamesImg/Games1.jpeg`;
    detail1="Nintendo Switch"
    price1="11,099"
    description1="Nintendo Switch"
    material1="Contact seller for details"
    careGuide1="Give your console a break, Avoid Direct Sunlight, Protect from Moisture, Protect from Rust and Corrosion, Regular Maintenance."

    url2=`/GamesImg/Games2.jpeg`;
    detail2="Pokemon Games Pad"
    price2="999"
    description2="Pokemon Games Pad"
    material2="Contact seller for details"
    careGuide2="Give your console a break, Avoid Direct Sunlight, Protect from Moisture, Protect from Rust and Corrosion, Regular Maintenance."

    url3=`/GamesImg/Games3.jpeg`;
    detail3="CrossOver Table Games"
    price3="1200"
    description3="CrossOver Table Games"
    material3="Contact seller for details"
    careGuide3="Avoid Direct Sunlight, Protect from Moisture, Protect from Rust and Corrosion, Regular Maintenance."

    url4=`/GamesImg/Games4.jpeg`;
    detail4="Kids Board Games"
    price4="799"
    description4="Kids Board Games"
    material4="Contact seller for details"
    careGuide4="Give your console a break, Avoid Direct Sunlight, Protect from Moisture, Protect from Rust and Corrosion, Regular Maintenance."

    url5=`/GamesImg/Games5.jpeg`;
    detail5="Gaming Keyboard"
    price5="9999"
    description5="Gaming Keyboard"
    material5="Contact seller for details"
    careGuide5="Give your console a break, Avoid Direct Sunlight, Protect from Moisture, Protect from Rust and Corrosion, Regular Maintenance."

} else if(type=="SkinCare") {
    url1=`/SkinCareImg/SkinCare1.jpeg`;
    detail1="Rare Beauty Hydrated gloss"
    price1="1,099"
    description1="Rare Beauty Hydrated gloss which keeps your lips hydrated for upto 24 hours"
    material1="Pure organic materials"
    careGuide1="keep makeup in a kit or drawer that is not directly exposed to sunlight, or to moisture from steam or water. Sunlight can accelerate the ageing of a product by heating it up, which can further break down active ingredients, so they're best left off the windowsill."

    url2=`/SkinCareImg/SkinCare2.jpeg`;
    detail2="10% Vitamin C serum"
    price2="999"
    description2="Vitamic C serum for achieving glowing skin"
    material2="Pure organic materials"
    careGuide2="keep makeup in a kit or drawer that is not directly exposed to sunlight, or to moisture from steam or water. Sunlight can accelerate the ageing of a product by heating it up, which can further break down active ingredients, so they're best left off the windowsill."

    url3=`/SkinCareImg/SkinCare3.jpeg`;
    detail3="Dot and key Night Gels"
    price3="1200"
    description3="Dot and key Night Gels"
    material3="Pure organic materials"
    careGuide3="keep makeup in a kit or drawer that is not directly exposed to sunlight, or to moisture from steam or water. Sunlight can accelerate the ageing of a product by heating it up, which can further break down active ingredients, so they're best left off the windowsill."

    url4=`/SkinCareImg/SkinCare4.jpeg`;
    detail4="Dark circle Remover"
    price4="799"
    description4="Dark circle Remover"
    material4="Pure organic materials"
    careGuide4="keep makeup in a kit or drawer that is not directly exposed to sunlight, or to moisture from steam or water. Sunlight can accelerate the ageing of a product by heating it up, which can further break down active ingredients, so they're best left off the windowsill."

    url5=`/SkinCareImg/SkinCare5.jpeg`;
    detail5="Cleanser Sheet Mask"
    price5="999"
    description5="Cleanser Sheet Mask"
    material5="Pure organic materials"
    careGuide5="keep makeup in a kit or drawer that is not directly exposed to sunlight, or to moisture from steam or water. Sunlight can accelerate the ageing of a product by heating it up, which can further break down active ingredients, so they're best left off the windowsill."
}

let obj1={
    url: url1,
    detail: detail1,
    price: price1,
    description: description1,
    material: material1,
    careGuide: careGuide1,
}
let obj2={
    url: url2,
    detail: detail2,
    price: price2,
    description: description2,
    material: material2,
    careGuide: careGuide2,
}
let obj3={
    url: url3,
    detail: detail3,
    price: price3,
    description: description3,
    material: material3,
    careGuide: careGuide3,
}
let obj4={
    url: url4,
    detail: detail4,
    price: price4,
    description: description4,
    material: material4,
    careGuide: careGuide4,
}
let obj5={
    url: url5,
    detail: detail5,
    price: price5,
    description: description5,
    material: material5,
    careGuide: careGuide5,
}


let arr=[];
for(let i=1;i<10;i++){
    arr.push(obj1,obj2,obj3,obj4,obj5);
}
return arr
}

 




let saleImages=getImage("Sale");
let babyImages=getImage("Baby");
let gamesImages=getImage("Games");
let jewelleryImages=getImage("Jewellery");
let kidsImages=getImage("Kids");
let ladiesImages=getImage("Ladies");
let makeupImages=getImage("MakeUp");
let menImages=getImage("Men");
let skincareImages=getImage("SkinCare");
let sportImages=getImage("Sport");
let ImagesList={
    Sale:saleImages,
    Baby:babyImages,
    Games:gamesImages,
    Jewellery:jewelleryImages,
    Kids:kidsImages,
    Ladies:ladiesImages,
    MakeUp:makeupImages,
    Men:menImages,
    SkinCare:skincareImages,
    Sport:sportImages

}

export default ImagesList;