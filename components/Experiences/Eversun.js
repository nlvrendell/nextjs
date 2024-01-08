
const ThirdExperience = () => {
    return (
        <>
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-2">
                    
                </div>
                <div className="justify-center text-center">
                    {/* <div className="border rounded-full">
                        <img src="/images/dswd-logo.jpg" className="h-36 w-48 rounded-full grayscale" alt="" />
                    </div> */}
                    <div className="border-primary last:font-semibold text-xl w-7 h-7 rounded-full inline-flex items-center justify-center select-none z-10 bg-black">
                        <div className="text-white text-center w-2 h-2 rounded-full bg-white" v-if="navNumber === 2"></div>
                    </div>
                    <div className="items-center justify-center h-full border-2 border-solid border-black w-px z-0 mx-[49%] mr-[50%]"></div>
                </div>
                <div className="col-span-2">
                    <div>
                        <div className="text-left">
                            <h1 className="m-2">2019-2020</h1>
                            <h3 className="m-2 font-bold">Web Developer</h3>
                            <h3 className="m-2 text-xs">Eversun Software Philippine Corporation</h3>
                            <p className="m-2">
                            Under the Department of Social Welfare and Development 
                            I have become an encoder in which we are task to encode surveys data into 
                            their database in order for it be easily manipulated
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThirdExperience;