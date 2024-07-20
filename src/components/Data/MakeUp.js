const getImage = () => {
    let url1=`/MakeUpImg/MakeUp1.jpeg`;
    let detail1="Rare Beauty Blush"
    let price1="1,099"
    let description1="Blush for parties,office,colleges,events.."
    let material1="Pure organic materials"
    let careGuide1="keep makeup in a kit or drawer that is not directly exposed to sunlight, or to moisture from steam or water. Sunlight can accelerate the ageing of a product by heating it up, which can further break down active ingredients, so they're best left off the windowsill."

    let url2=`/MakeUpImg/MakeUp2.jpeg`;
    let detail2="Glitter EyeShadow"
    let price2="999"
    let description2="Glitter EyeShadow for parties,office,colleges,events."
    let material2="Pure organic materials"
    let careGuide2="keep makeup in a kit or drawer that is not directly exposed to sunlight, or to moisture from steam or water. Sunlight can accelerate the ageing of a product by heating it up, which can further break down active ingredients, so they're best left off the windowsill."

    let url3=`/MakeUpImg/MakeUp3.jpeg`;
    let detail3="Foundation brushes"
    let price3="1200"
    let description3="Foundation brushes easy to use,clean and dry."
    let material3="Pure organic materials"
    let careGuide3="keep makeup in a kit or drawer that is not directly exposed to sunlight, or to moisture from steam or water. Sunlight can accelerate the ageing of a product by heating it up, which can further break down active ingredients, so they're best left off the windowsill."

    let url4=`/MakeUpImg/MakeUp4.jpeg`;
    let detail4="Eyebrows brushes"
    let price4="799"
    let description4="Foundation brushes easy to use,clean and dry."
    let material4="Pure organic materials"
    let careGuide4="keep makeup in a kit or drawer that is not directly exposed to sunlight, or to moisture from steam or water. Sunlight can accelerate the ageing of a product by heating it up, which can further break down active ingredients, so they're best left off the windowsill."

    let url5=`/MakeUpImg/MakeUp5.jpeg`;
    let detail5="Lipstick concealer pack"
    let price5="999"
    let description5="Lipstick concealer pack"
    let material5="Pure organic materials"
    let careGuide5="keep makeup in a kit or drawer that is not directly exposed to sunlight, or to moisture from steam or water. Sunlight can accelerate the ageing of a product by heating it up, which can further break down active ingredients, so they're best left off the windowsill."

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

 





let MakeUp=getImage();

export default MakeUp;