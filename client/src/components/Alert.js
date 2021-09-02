export default function Alert({hideFunction, message, color}) {
    return (
        <div>
            <div className={`text-white transition duration-500 ease-in-out flex px-6 py-4 border-0 rounded relative mb-4 ${color}`}>
                <span className="inline-block align-middle mr-8">
                    <b className="capitalize">Alert: </b> {message}
                </span>
                <button onClick={hideFunction} className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                    <span>×</span>
                </button>
            </div>
        </div>
    )
}