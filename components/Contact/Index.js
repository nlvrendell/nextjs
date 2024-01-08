const Contact = () => {
  return (
    <>
      <div className="mb-20 w-9/12 m-auto" id="rjse-contact" >
        <div className="justify-center text-center my-5">
          <h1 className="font-bold text-4xl">Contact</h1>
        </div>
        <div>
          <h1 className="text-lg">Lets Connect!</h1>
          <p className="mb-5">
            Get in touch or shoot me an email directly on{" "}
            <b>rendell.eyas@gmail.com</b>
          </p>
          <div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline p-4"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
