import './Blog.scss';
import orange from '../../../../assets/Images/orange.png';
import pizza from '../../../../assets/Images/pizza.png';
import clock from '../../../../assets/Images/clock.svg';
import blood from '../../../../assets/Images/blood.png';
import sweets from '../../../../assets/Images/sweets.png';

export const BlogSection = () => {
    return (
        <div className="blogsection">
            <h2>Blog</h2>
            <div className="product">
                <div className="blog">
                    <img src={orange} alt="orange" />
                    <h4>Vitamin C - what has the most vitamin C?</h4>
                    <p>Esther Howard</p>
                    <p>Maecenas at bibendum orci, nec gravida elit. Sed viverra in est ac consequat. Nulla <br /> facilisi.
                        Donec
                        efficitur malesuada scelerisque. Praesent luctus, nisi eget viverra pulvinar, <br /> dolor sem dapibus
                        dolor,
                        vel congue dolor massa vitae dolor. Integer aliquet orci non...</p>
                </div>
                <div className="rightside">
                    <div className="video">
                        <div>
                            <img src={pizza} alt="pizza" />
                        </div>
                        <div className="watch">
                            <h4>Fast food - why should we avoid it? How does <br /> it affect our health?</h4>
                            <p>Efficitur malesuada scelerisque. Praesent luctus, nisi eget viverra <br /> pulvinar, dolor sem
                                dapibus
                                dolor, vel congue dolor massa vitae...</p>
                            <div className="time">
                                <p>Jerome Bell</p>
                                <div>
                                    <img src={clock} alt="clock" />
                                    <p>3 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video">
                        <div>
                            <img src={blood} alt="blood" />
                        </div>
                        <div className="watch2">
                            <h4>Blood tests - why should they be done <br /> regularly?</h4>
                            <div className="time">
                                <p>Esther Howard</p>
                                <div>
                                    <img src={clock} alt="clock" />
                                    <p>2 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video">
                        <div>
                            <img src={sweets} alt="sweets" />
                        </div>
                        <div className="watch">
                            <h4>Sweets on a diet - can you eat them?</h4>
                            <p>Efficitur malesuada scelerisque. Praesent luctus, nisi eget viverra <br /> pulvinar, dolor sem
                                dapibus dolor, vel congue dolor massa vitae...</p>
                            <div className="time">
                                <p>Courtney Henry</p>
                                <div>
                                    <img src={clock} alt="clock" />
                                    <p>5 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}