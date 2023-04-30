import './ThirdSection.scss';
import slim from '../../../../assets/Images/slim.png';
import fit from '../../../../assets/Images/fit.png';
import vegan from '../../../../assets/Images/vegan.png';
import keto from '../../../../assets/Images/keto.png';

export const ThirdSection = () => {
    return (
        <div className="thirdsection">
            <h2>The most popular diets</h2>
            <div className="diets">
                <div className="slim">
                    <img src={slim} alt="slim" />
                    <p>Slim</p>
                    <div className="calorie">
                        <p>1000kcal</p>
                        <p>1300kcal</p>
                        <p>1500kcal</p>
                    </div>
                    <div className="text">
                        <p>Taque earum rerum hic tenetur a sapiente <br /> maiores alias consequatur aut perferendis <br />
                            doloribus
                            asperiores...</p>
                    </div>
                    <div className="cost">
                        <p>from
                            <h2>57pln</h2>/day</p>
                        <button>Choose</button>
                    </div>
                </div>
                <div className="fit">
                    <img src={fit} alt="fit" />
                    <p>Fit</p>
                    <div className="calorie">
                        <p>1800kcal</p>
                        <p>2000kcal</p>
                        <p>2500kcal</p>
                    </div>
                    <div className="text">
                        <p>Taque earum rerum hic tenetur a sapiente <br /> maiores...</p>
                    </div>
                    <div className="cost">
                        <p>from
                            <h2>65pln</h2>/day</p>
                        <button>Choose</button>
                    </div>
                </div>
                <div className="vegan">
                    <img src={vegan} alt="vegan" />
                    <p>Vegan</p>
                    <div className="calorie">
                        <p>1300kcal</p>
                        <p>1500kcal</p>
                        <p>2000kcal</p>
                    </div>
                    <div className="text">
                        <p>Taque earum rerum hic tenetur a sapiente <br /> maiores alias consequatur...</p>
                    </div>
                    <div className="cost">
                        <p>from
                            <h2>59pln</h2>/day</p>
                        <button>Choose</button>
                    </div>
                </div>
                <div className="keto">
                    <img src={keto} alt="keto" />
                    <p>Keto</p>
                    <div className="calorie">
                        <p>1300kcal</p>
                        <p>1500kcal</p>
                        <p>2000kcal</p>
                    </div>
                    <div className="text">
                        <p>Taque earum rerum hic tenetur a sapiente <br /> maiores alias consequatur aut perferendis <br />
                            doloribus
                            asperiores...</p>
                    </div>
                    <div className="cost">
                        <p>from
                            <h2>62pln</h2>/day</p>
                        <button>Choose</button>
                    </div>
                </div>
            </div>
        </div>
    )
}