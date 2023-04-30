import './Menu.scss';
import pasta from '../../assets/Images/pasta.png';
import rating from '../../assets/Images/4.8 rating.svg';
import plant from '../../assets/Images/plant icon.svg';
import nuts from '../../assets/Images/nuts icon.svg';
import egg from '../../assets/Images/egg icon.svg';
import soup from '../../assets/Images/soup.png';
import rate from '../../assets/Images/4.7 rating.svg';
import salad from '../../assets/Images/salad.png';
import porridge from '../../assets/Images/porridge.png';
import nut from '../../assets/Images/nut.svg';
import tomato from '../../assets/Images/tomato.png';
import sushi from '../../assets/Images/sushi.png';
import puree from '../../assets/Images/puree.png';
import fish from '../../assets/Images/fish icon.svg';
import dish from '../../assets/Images/dish.png';



export const Menu = () => {
    return (
        <>
        <h2 className="menu">Menu</h2>
    <div className="food">
        <div className="toprated">
            <button className="top">Top rated</button>
            <button>Breakfast</button>
            <button>II Breakfast</button>
            <button>Lunch</button>
            <button>Snacks</button>
            <button>Dinner</button>
        </div>
        <div className="choosediet">
            <p>Choose a diet:</p>
            <select name="All" id="all">
                <option value="All">All</option>
            </select>
        </div>
    </div>
    <div className="image-grid">
        <div className="slim">
            <img src={pasta} alt="pasta" />
            <img id="rating" src={rating} alt="4.8" />
            <button>Breakfast</button>
            <div className="kcal">
                <h4>Molestiae sed augue eu sapien <br /> hendrerit fringilla</h4>
                <p>420 kcal</p>
            </div>
            <div>
                <p>Taque earum rerum hic tenetur a sapiente</p>
            </div>
            <div className="diet">
                <div>
                    <p>Diet:<span>Slim</span></p>
                </div>
                <div className="icon">
                    <img src={plant} alt="icon" />
                    <img src={nuts} alt="icon" />
                    <img src={egg} alt="icon" />
                </div>
            </div>
        </div>
        <div className="slim">
            <img src={soup} alt="soup" />
            <img id="rate" src={rating} alt="4.8" />
            <button className="lunch">Lunch</button>
            <div className="kcal">
                <h4>Vel illum condimentum, risus et</h4>
                <p>254 kcal</p>
            </div>
            <div>
                <p>Ut aut reiciendis voluptatibus maiores alias <br /> consequatur aut</p>
            </div>
            <div className="diet">
                <div>
                    <p>Diet:<span>Vegan</span></p>
                </div>
                <div className="icon">
                    <img src={plant} alt="icon" />
                    <img src={nuts} alt="icon" />
                </div>
            </div>
        </div>
        <div className="slim">
            <img src={salad} alt="salad" />
            <img id="rate3" src={rate} alt="4.7" />
            <button className="snacks">Snacks</button>
            <div className="kcal">
                <h4>Eum fugiat nulla gravida magna</h4>
                <p>298 kcal</p>
            </div>
            <div>
                <p>Perferendis doloribus asperiores <br /> repellat</p>
            </div>
            <div className="diet">
                <div>
                    <p>Diet:<span>Slim</span></p>
                </div>
                <div className="icon">
                    <img src={plant} alt="icon" />
                    <img src={nuts} alt="icon" />
                    <img src={egg} alt="icon" />
                </div>
            </div>
        </div>
        <div className="slim">
            <img src={porridge} alt="porridge" />
            <img id="rate4" src={rate} alt="4.7" />
            <button className="breakfast">Breakfast</button>
            <div className="kcal">
                <h4>Molestiae ultrices</h4>
                <p>182 kcal</p>
            </div>
            <div>
                <p>libero tempore, cum soluta nobis est <br /> eligendi </p>
            </div>
            <div className="diet">
                <div>
                    <p>Diet:<span>Dlamam</span></p>
                </div>
                <div className="icon">
                    <img src={plant} alt="icon" />
                    <img src={nut} alt="icon" />
                    <img src={egg} alt="icon" />
                </div>
            </div>
        </div>
        <div className="slim">
            <img src={tomato} alt="tomato" />
            <img id="rating" src={rate} alt="4.7" />
            <button className="dinner">Dinner</button>
            <div className="kcal">
                <h4>Molestiae dapibus turpis</h4>
                <p>410 kcal</p>
            </div>
            <div>
                <p>Molestiae dapibus <br /> turpis</p>
            </div>
            <div className="diet">
                <div>
                    <p>Diet:<span>Fit</span></p>
                </div>
                <div className="icon">
                    <img src={plant} alt="icon" />
                    <img src={egg} alt="icon" />
                </div>
            </div>
        </div>
        <div className="slim">
            <img src={sushi} alt="sishi" />
            <img id="rate" src={rate} alt="4.7" />
            <button className="lunch">Lunch</button>
            <div className="kcal">
                <h4>Vel illum odio ultricies, nec <br /> sollicitudin eros</h4>
                <p>240 kcal</p>
            </div>
            <div>
                <p>Ut aut reiciendis voluptatibus maiores alias consequatur aut</p>
            </div>
            <div className="diet">
                <div>
                    <p>Diet:<span>Vegan</span></p>
                </div>
                <div className="icon">
                    <img src={plant} alt="icon" />
                    <img src={nuts} alt="icon" />
                </div>
            </div>
        </div>
        <div className="slim">
            <img src={puree} alt="pure" />
            <img id="rate3" src={rate} alt="4.7" />
            <button className="snacks">Lunch</button>
            <div className="kcal">
                <h4>Eum fugiat accumsan, sapien vel</h4>
                <p>322 kcal</p>
            </div>
            <div>
                <p>Perferendis doloribus asperiores <br /> repellat</p>
            </div>
            <div className="diet">
                <div>
                    <p>Diet:<span>Keto</span></p>
                </div>
                <div className="icon">
                    <img src={plant} alt="icon" />
                    <img src={fish} alt="icon" />
                    <img src={egg} alt="icon" />
                </div>
            </div>
        </div>
        <div className="slim">
            <img src={dish} alt="dish" />
            <img id="rate4" src={rate} alt="4.7" />
            <button className="breakfast">Dinner</button>
            <div className="kcal">
                <h4>Olestiae placerat orci vel arc</h4>
                <p>388 kcal</p>
            </div>
            <div>
                <p>libero tempore, cum soluta nobis est <br /> eligendi </p>
            </div>
            <div className="diet">
                <div>
                    <p>Diet:<span>Officebox</span></p>
                </div>
                <div className="icon">
                    <img src={plant} alt="icon" />
                    <img src={nut} alt="icon" />
                    <img src={egg} alt="icon" />
                </div>
            </div>
        </div>
    </div>
    <div className="more">
        <h4>See more</h4>
    </div>
        </>
    )
}