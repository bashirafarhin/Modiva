const getImage = () => {
    let url1=`/GamesImg/Games1.jpeg`;
    let detail1="Nintendo Switch"
    let price1="11,099"
    let description1="Nintendo Switch"
    let material1="Contact seller for s"
    let careGuide1="Give your console a break, Avoid Direct Sunlight, Protect from Moisture, Protect from Rust and Corrosion, Regular Maintenance."

    let url2=`/GamesImg/Games2.jpeg`;
    let detail2="Pokemon Games Pad"
    let price2="999"
    let description2="Pokemon Games Pad"
    let material2="Contact seller for details"
    let careGuide2="Give your console a break, Avoid Direct Sunlight, Protect from Moisture, Protect from Rust and Corrosion, Regular Maintenance."

    let url3=`/GamesImg/Games3.jpeg`;
    let detail3="CrossOver Table Games"
    let price3="1200"
    let description3="CrossOver Table Games"
    let material3="Contact seller for details"
    let careGuide3="Avoid Direct Sunlight, Protect from Moisture, Protect from Rust and Corrosion, Regular Maintenance."

    let url4=`/GamesImg/Games4.jpeg`;
    let detail4="Kids Board Games"
    let price4="799"
    let description4="Kids Board Games"
    let material4="Contact seller for details"
    let careGuide4="Give your console a break, Avoid Direct Sunlight, Protect from Moisture, Protect from Rust and Corrosion, Regular Maintenance."

    let url5=`/GamesImg/Games5.jpeg`;
    let detail5="Gaming Keyboard"
    let price5="9999"
    let description5="Gaming Keyboard"
    let material5="Contact seller for details"
    let careGuide5="Give your console a break, Avoid Direct Sunlight, Protect from Moisture, Protect from Rust and Corrosion, Regular Maintenance."

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

 




let Games=getImage();


export default Games;