

const Hero = () => {
    return(
        <div className= 'hero'>
            <div className= 'hero-left'>
                <h2>QUALITY AND PRECISION</h2>
                    <div>
                        <div className='hero-hand-icon'>
                            <p>The Best Materials</p>
                            <img src="hand-icon" alt="" />
                        </div>
                        <p>chosen to</p>
                        <p>make you</p>
                        <p>memories timless</p>
                    </div>
                    <div className="hero-latest-btn"></div>
                    <div>Our Materials</div>
                    <img src={arrow_icon} alt="" />
            </div>           
        </div>
    )
}