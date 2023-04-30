import './Choose.scss';
import phone from '../../../../assets/Images/phone.png';
import bag from '../../../../assets/Images/bag.png';
import number1 from '../../../../assets/Images/number1.svg';
import number2 from '../../../../assets/Images/number2.svg';
import number3 from '../../../../assets/Images/number3.svg';
import deliver from '../../../../assets/Images/delivery.svg';
import aifon from '../../../../assets/Images/aifon.svg';
import hat from '../../../../assets/Images/chef-hat.svg';

export const Choose = () => {
    return (
        <div className="choosesection">
                <div>
                    <h2>Order faster than you can <br /> get hungry<img src="./assets/hearticon.svg" alt="heart" /></h2>
                    <img id="phone" src={phone} alt="phone" />
                    <img id="bag" src={bag} alt="bag" />
                </div>
                <div className="bigsection">
                    <div>
                        <p>By choosing our box catering at your door, you can be <br /> sure that
                            your ready meals will be healthy and tasty.</p>
                    </div>
                    <div className="number">
                        <img src={number1} alt="1" />
                        <img id="aifon" src={aifon} alt="aifon" />
                        <div>
                            <h4>Choose a diet that suits you</h4>
                            <p>Qui blanditiis praesentium voluptatum deleniti atque <br /> maxime placeat facere</p>
                        </div>
                    </div>
                    <div className="number">
                        <img src={number2} alt="2" />
                        <img id="chef-hat" src={hat} alt="chef-hat" />
                        <div>
                            <h4>We start cooking</h4>
                            <p>Qui blanditiis praesentium voluptatum deleniti atque <br /> veniet ut et voluptates repudiandae</p>
                        </div>
                    </div>
                    <div className="number">
                        <img src={number3} alt="3" />
                        <img id="deliver" src={deliver} alt="deliver" />
                        <div>
                            <h4>We're bringing the diet to your door, bon appetit!</h4>
                            <p>Qui blanditiis praesentium voluptatum deleniti atque</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}