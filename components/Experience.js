import Internship from './Experiences/Internship';
import Eversun from './Experiences/Eversun';
import NetlinkVoice from './Experiences/NetlinkVoice';

const Experience = () => {
    return (
        <>
            <div className="m-5 mb-20" id="rjse-experience">
                <div className="justify-center text-center my-5">
                    <h1 className="font-bold text-4xl">EXPERIENCE</h1>
                </div>
                <NetlinkVoice />
                <Eversun />
                <Internship />
            </div>
        </>
    )
}

export default Experience;