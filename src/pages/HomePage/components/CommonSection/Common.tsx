import './Common.scss';
import aim from '../../../../assets/Images/aim.svg';

export const Common = () => {
    return (
        <div className="commonsection">
                <div className="deliversection">
                    <div>
                        <h2>Where we deliver</h2>
                        <p>See if we're delivering to you right now! Use the search <br /> engine by entering the
                            postal code of your locality and <br /> see if we can deliver your order there.</p>
                    </div>
                    <div className="coordinate">
                        <input id="city" type="text" placeholder="City name" />
                        <input id="nip" type="text" placeholder="NIP" />
                    </div>
                    <div className="locate">
                        <button>Check</button>
                        <img id="aim" src={aim} alt="aim" />
                        <p>Locate me</p>
                    </div>
                </div>
                <div className="word">
                    <div className="name">
                        <div className="title">
                            <h4>Warszawa</h4>
                        </div>
                        <div className="title">
                            <h4>Poznań</h4>
                        </div>
                        <div className="title">
                            <h4>Szczecin</h4>
                        </div>
                        <div className="title">
                            <h4>Rzeszów</h4>
                        </div>
                    </div>
                    <div className="name">
                        <div className="title">
                            <h4>Kraków</h4>
                        </div>
                        <div className="title">
                            <h4>Gdańsk</h4>
                        </div>
                        <div className="title">
                            <h4>Bydgoszcz</h4>
                        </div>
                        <div className="title">
                            <h4>Białystok</h4>
                        </div>
                    </div>
                    <div className="name">
                        <div className="title">
                            <h4>Wrocław</h4>
                        </div>
                        <div className="title">
                            <h4>Lublin</h4>
                        </div>
                        <div className="title">
                            <h4>Łódź</h4>
                        </div>
                        <div className="title">
                            <h4>Olsztyn</h4>
                        </div>
                    </div>
                </div>
            </div>
    )
}