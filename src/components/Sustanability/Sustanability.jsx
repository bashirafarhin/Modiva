import "./Sustanability.css"

export default function Sustanability(){
    return (
        <div className="sustanability-container">
            <div className="sustanability-image">
            <img src="/SustanabilityImg/sustanability1.jpg"/>
            <h1 className="fadeInUp-animation">Sustanability</h1>
            </div>
            
            <div className="sustanability-text">
             <h2>Why sustainability is important to us</h2>
             <p>For almost 30 years, we’ve been working with sustainability. It’s part of our business idea – to offer our customers the best combination of fashion, quality, price and sustainability – and we believe that sustainable fashion should not be limited to the few.</p>
             <p>We’ve made a lot of progress, however there is still much more to do. Across our industry, we need to reduce our impact on the climate, improve our social impact and build a better fashion system. And we need to do this transparently.</p>
            </div>
            <div className="focus-on">
                <h1>Our Focus Areas</h1>
                <p>If you want to dig a bit deeper into our work, explore our focus areas to discover how we are addressing our impact:</p>
                <div className="focus-areas">
                 <div>
                    <img src="/SustanabilityImg/focusArea1.jpg"/>
                    <h3>Leading the change</h3>
                    <ul>
                        <li><p>Scale innovation</p></li>
                        <li><p>Promote transparency</p></li>
                        <li><p>Collaborate for industrywide progress</p></li>
                    </ul>
                 </div>
                 <div>
                    <img src="/SustanabilityImg/focusArea2.jpg"/>
                    <h3>Circularity and climate</h3>
                    <ul>
                        <li><p>Become net-zero across our value chain by 2040, operating within planetary boundaries</p></li>
                        <li><p>Have a net-positive impact on biodiversity</p></li>
                        <li><p>Scale circular models and systems for our products, supply chains and customer journeys</p></li>                   
                    </ul>
                 </div>
                 <div>
                    <img src="/SustanabilityImg/focusArea3.jpg"/>
                    <h3>Fair and equal</h3>
                    <ul>
                        <li><p>Have a positive impact on people across our value chain</p></li>
                        <li><p>Support and promote inclusion and diversity in everything we do</p></li>
                    </ul>
                 </div>
                 
                </div>
            </div>

            <div className="reduce">
                <div className="heading"><h1>Reduce</h1></div>
                <p>Hello re-usable packaging!</p>
                <p>We are taking important steps to make our packaging more environmentally-friendly.</p>
                <p>Our online orders get delivered in reusable paper parcels</p>
                <p>Use eco-friendly paper bags for return packaging!</p>
            </div>
            <div className="reuse">
                <div className="heading"><h1>Reuse</h1></div>
                <p>As our customer and a responsible citizen its your responsibility to reuse our eco-friendly bags</p>
                <p>If your paper bags are printed with either soy or vegetable-based dyes, then by all means, tear up your paper bags and put them in your compost pile or your worm bin. Conventional dyes made with heavy metals can be toxic and shouldn't be used in compost that will be applied to a garden that produces food.</p>
            </div>
            <div className="recycle">
                <div className="heading"><h1>Recycle</h1></div>
                <p>If you have plastic bags and wrap you can't reuse, you can often recycle them at stores or other drop-off sites if they are clean and dry.</p>
                <p>Many people know shopping bags can be recycled, but other household plastic wrap can too! If they are clean, dry, and free of receipts or other items, the following can be recycled at drop-off sites:</p>
            </div>
        </div>
    );
}