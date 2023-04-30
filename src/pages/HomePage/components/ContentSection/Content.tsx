import './Content.scss';
import arrow from '../../../../assets/Images/arrowright.svg';
import comma from '../../../../assets/Images/comma.svg';
import stars from '../../../../assets/Images/stars.svg'

export const Content = () => {
    return (
        <div className="content">
                <div className="text">
                    <h2>We cook – they enjoy every <br /> minute of their <img src={arrow} />lives
                    </h2>
                    <p id="because">Because we...</p>
                    <div>
                        <img src={comma} />
                        <p>We don't accept half-measures and shortcuts, because what we care <br /> about is the WOW effect. And
                            all
                            the luck that our efforts are not in <br /> vain. We know this because we closely follow the opinions
                            of
                            our <br /> consumers.</p>
                    </div>
                </div>
                <div className="content-1">
                    <img src={stars} />
                    <div className="textbox">
                        <h3>Guy Hawkins</h3>
                        <p>Minima veniam, quis nostrum <br /> exercitationem ullam corporis suscipit <br /> laboriosam, nisi ut
                            aliquid ex ea commodi </p>
                    </div>
                    <img src={stars} />
                    <div className="textbox">
                        <h3>Anonim</h3>
                        <p>Minima veniam, quis nostrum exercitationem <br /> ullam corporis suscipit laboriosam, nisi ut <br />
                            aliquid ex ea commodi consequatur. Quis </p>
                    </div>
                </div>
                <div className="content-2">
                    <img src={stars} />
                    <div className="textbox-3">
                        <h3>Esther Howard</h3>
                        <p>Minima veniam, quis nostrum exercitationem <br /> ullam corporis suscipit laboriosam, nisi ut </p>
                    </div>
                    <img src={stars} />
                    <div className="textbox-4">
                        <h3>Jacob Jones</h3>
                        <p>Minima veniam, quis nostrum exercitationem <br /> ullam laboriosam, nisi ut aliquid ex ea </p>
                    </div>
                </div>
            </div>
    )
}