const getImage = () => {
    let url1=`/LadiesImg/Ladies1.jpeg`;
    let detail1="Milano Stretchable T-Shirt"
    let price1="599"
    let description1="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    let material1="cotton: 95%, elastone: 5%"
    let careGuide1="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    let url2=`/LadiesImg/Ladies2.jpeg`;
    let detail2="Ribbed Vest Top"
    let price2="799"
    let description2="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    let material2="cotton: 95%, elastone: 5%"
    let careGuide2="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    let url3=`/LadiesImg/Ladies3.jpeg`;
    let detail3="Ribbed Crop Top"
    let price3="499"
    let description3="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    let material3="cotton: 95%, elastone: 5%"
    let careGuide3="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    let url4=`/LadiesImg/Ladies4.jpeg`;
    let detail4="One shoulder Top"
    let price4="1,099"
    let description4="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    let material4="cotton: 95%, elastone: 5%"
    let careGuide4="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    let url5=`/LadiesImg/Ladies5.jpeg`;
    let detail5="Viscose tunic dress"
    let price5="299"
    let description5="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    let material5="cotton: 95%, elastone: 5%"
    let careGuide5="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

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

 





let Ladies=getImage();

export default Ladies;