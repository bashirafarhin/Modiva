
const getImage = () => {
    let url1=`/SportImg/Sport1.jpeg`;
    let detail1="DryMove™ sports T-Shirt"
    let price1="599"
    let description1="Sports tshirt for gym."
    let material1="cotton: 95%, elastone: 5%"
    let careGuide1="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    let url2=`/SportImg/Sport2.jpeg`;
    let detail2="DryMove™ sports Shorts"
    let price2="399"
    let description2="Shorts for the gym guys."
    let material2="cotton: 95%, elastone: 5%"
    let careGuide2="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    let url3=`/SportImg/Sport3.jpeg`;
    let detail3="Sports Cap"
    let price3="1099"
    let description3="Elastic Cap for the gym guys or for your office work."
    let material3="cotton: 95%, elastone: 5%"
    let careGuide3="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    let url4=`/SportImg/Sport4.jpeg`;
    let detail4="DryMove™ Pocket-detail sports Hoodie"
    let price4="799"
    let description4="Hoodie."
    let material4="cotton: 95%, elastone: 5%"
    let careGuide4="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    let url5=`/SportImg/Sport5.jpeg`;
    let detail5="Gym Carrying bag"
    let price5="499"
    let description5="Gym carrying bag for carrying your waterBottles,clothes,earphones etc."
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


let Sport=getImage();
export default Sport;