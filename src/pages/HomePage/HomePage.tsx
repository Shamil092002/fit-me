import './HomePage.scss';
import { Content } from './components/ContentSection/Content';
import leftDish from '../../assets/Images/leftdishes.png';
import topBorder from '../../assets/Images/topborder.svg';
import rightDish from '../../assets/Images/rightdishes.png';
import { ThirdSection } from './components/ThirdSection/ThirdSection';
import { Common } from './components/CommonSection/Common';
import avacado from '../../assets/Images/avacado.png';
import leftYellow from '../../assets/Images/leftyellow.png';
import rightYellow from '../../assets/Images/rightyellow.png';
import kiwi from '../../assets/Images/kiwi.png';
import { Choose } from './components/ChooseSection/Choose';
import { BoxSection } from './components/BoxSection/Box';
import { BlogSection } from './components/BlogSection/Blog';
import line from '../../assets/Images/longline.png';
import arrow from '../../assets/Images/Arrow.svg';

export const HomePage = () => {
    return (
        <>
            <div className="hero">
                <div>
                    <img src={leftDish} alt="dishes" />
                </div>
                <img src={topBorder} alt="border" />
                <div className="midsection">
                    <h1>Premium quality <br /> catering diets</h1>

                </div>
                <div>
                    <img src={rightDish} alt="dishes" />
                </div>
            </div>
            <Content/>
            <ThirdSection/>
            <Common/>
            <div className="ordersection">
                <img src={leftYellow} />
                <img id="avacado" src={avacado} />
                <img id="rightyellow" src={rightYellow} />
                <img id="kiwi" src={kiwi} />
                <h2>Order your trial diet</h2>
                <p>Try any diet to choose the right one for you</p>
                <button>Choose a diet</button>
            </div>
           <Choose/>
           <BoxSection/>
           <BlogSection/>
            <div className="questions">
                <img id="long-line" src={line} alt="line" />
                <div className="question">
                    <h3>How do I place an order?</h3>
                    <img id="arrow" src={arrow} alt="arrow" />
                </div>
                <img id="long-line" src={line} alt="line" />
                <div className="question">
                    <h3>On which days and at what hours does the delivery take place?</h3>
                    <img id="arrow" src={arrow} alt="arrow" />
                </div>
                <img id="long-line" src={line} alt="line" />
                <div className="question">
                    <h3>For how long can I order a diet?</h3>
                    <img id="arrow" src={arrow} alt="arrow" />
                </div>
                <img id="long-line" src={line} alt="line" />
                <div className="question">
                    <h3>Can I change the delivery address?</h3>
                    <img id="arrow" src={arrow} alt="arrow" />
                </div>
                <img id="long-line" src={line} alt="line" />
                <div className="question">
                    <h3>Can I suspend catering?</h3>
                    <img id="arrow" src={arrow} alt="arrow" />
                </div>
                <img id="long-line" src={line} alt="line" />
            </div>
        </>
    )
};