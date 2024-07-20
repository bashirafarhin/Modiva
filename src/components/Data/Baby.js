const getImage = () => {
    let url1=`/BabyImg/Baby1.jpeg`;
    let detail1="Patterned sleepsuit"
    let price1="599"
    let description1="Sleep suits for the babies, trim around the neckline."
    let material1="cotton: 95%, elastone: 5%"
    let careGuide1="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    let url2=`/BabyImg/Baby2.jpeg`;
    let detail2="Ribbed jersey top"
    let price2="399"
    let description2="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    let material2="cotton: 95%, elastone: 5%"
    let careGuide2="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    let url3=`/BabyImg/Baby3.jpeg`;
    let detail3="Flounce-trimmed jersey dress"
    let price3="1099"
    let description3="jersey dress for the babies, trim around the neckline."
    let material3="cotton: 95%, elastone: 5%"
    let careGuide3="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    let url4=`/BabyImg/Baby4.jpeg`;
    let detail4="Milano Stretchable T-Shirt"
    let price4="799"
    let description4="Fitted T-shirt in ribbed jersey with a narrow trim around the neckline."
    let material4="cotton: 95%, elastone: 5%"
    let careGuide4="You too can help the environment and make fashion more sustainable. Bring unwanted clothes or home textiles to any H&M store and they will be reworn, reused or recycled. you can make your clothes last longer by using only non-chlorine bleach when needed, Line dry, Medium iron and be dry cleaning"

    let url5=`/BabyImg/Baby5.jpeg`;
    let detail5="Skinny Fit Jeans"
    let price5="499"
    let description5="Elastic jeans for the babies."
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


let Baby=getImage();


export default Baby;