import VideoHomePage from '../../assets/home/video-1920.mp4'

const HomePage = (props) => {
    return (
        <div class="home container">
            <video autoPlay muted loop >
                <source src={ VideoHomePage } type="video/mp4"/>
            </video>
            <div className="home-content">
                <div className="title-1">There's a better way to ask</div>
                <div className="title-2">You don't want to make a boring form. And your audience won't answer one. <br/>
                Create a typeform instead—and make everyone happy.</div>
                <div className="title-3">
                    <button className="getStart">Get started - it's free</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage
