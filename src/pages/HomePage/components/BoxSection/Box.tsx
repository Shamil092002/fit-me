import './Box.scss';
import plant from '../../../../assets/Images/planticon.svg';
import line from '../../../../assets/Images/Line.png';
import taste from '../../../../assets/Images/Tasteicon.svg';
import diversityIcon from '../../../../assets/Images/Diversityicon.svg';
import gymIcon from '../../../../assets/Images/gymicon.svg';

export const BoxSection = () => {
    return (
        <div className="boxdietsection">
            <h2>Box diets with which you get more</h2>
            <div className="boxdiets">
                <div className="fresh">
                    <div className="plant"><img src={plant} alt="plant" /></div>
                    <h4>Fresh ingredients</h4>
                    <p>Donec in nisl porttitor, blandit augue in, <br /> ullamcorper felis</p>
                </div>
                <img id="line" src={line} alt="line" />
                <div className="taste">
                    <div className="tasteicon"><img src={taste} alt="taste" /></div>
                    <h4>Taste</h4>
                    <p>Apibus sed erat nec volutpat. Interdum et <br /> malesuada</p>
                </div>
                <img id="line" src={line} alt="line" />
                <div className="diversity">
                    <div className="diversityicon"><img src={diversityIcon} /></div>
                    <h4>Diversity</h4>
                    <p>Proin hendrerit molestie placerat ec ante <br /> congue placerat non sed</p>
                </div>
                <img id="line" src={line} alt="line" />
                <div className="match">
                    <div className="gymicon"><img src={gymIcon} alt="gym" /></div>
                    <h4>Match</h4>
                    <p>Vivamus blandit, lorem non venenatis <br /> luctus, leo dui volutpat purusquis tinci</p>
                </div>
            </div>
        </div>
    )
}