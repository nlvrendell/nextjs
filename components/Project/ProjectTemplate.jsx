
const Footer = ({children}) => {
    return (
        <>
            <div className="grayscale hover:grayscale-0 duration-300 relative text-center group flex justify-center cursor-pointer m-2">
                {children}
            </div>
        </>
    )
}

export default Footer;