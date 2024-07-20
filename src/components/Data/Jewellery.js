const getImage = () => {
    let url1=`/JewelleryImg/Jewellery1.jpeg`;
    let detail1="24 Karat Diamond Ring"
    let price1="33,000"
    let description1="Ring for your loved ones."
    let material1="Gold: 100%"
    let careGuide1="Avoid Chemicals. Both metal and gemstones can be damaged if they come into contact with harsh chemicals,water or even moist air"

    let url2=`/JewelleryImg/Jewellery2.jpeg`;
    let detail2="Stainless Steel neck jewellery party wear"
    let price2="3,999"
    let description2="Neck jewellery for your loved ones."
    let material2="Gold: 10%, stainless steel:90%"
    let careGuide2="Avoid Chemicals. Both metal and gemstones can be damaged if they come into contact with harsh chemicals,water or even moist air"
    
    let url3=`/JewelleryImg/Jewellery3.jpeg`;
    let detail3="Chael kors 12 karat Gold watch"
    let price3="50,999"
    let description3="Watch for your loved ones."
    let material3="Gold: 70%, stainless steel:30%"
    let careGuide3="Avoid Chemicals. Both metal and gemstones can be damaged if they come into contact with harsh chemicals,water or even moist air"

    let url4=`/JewelleryImg/Jewellery4.jpeg`;
    let detail4="Pure Yellow stone neck jewellery"
    let price4="100000"
    let description4="Neck jewellery for your loved ones."
    let material4="Gold: 100%"
    let careGuide4="Avoid Chemicals. Both metal and gemstones can be damaged if they come into contact with harsh chemicals,water or even moist air"

    let url5=`/JewelleryImg/Jewellery5.jpeg`;
    let detail5="Stainless steel earrings"
    let price5="2999"
    let description5="Earrings for your loved ones."
    let material5="Stainless steel: 500%"
    let careGuide5="Avoid Chemicals. Both metal and gemstones can be damaged if they come into contact with harsh chemicals,water or even moist air"


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

let Jewellery=getImage();

export default Jewellery;