import "../index.css";


const Spinner = () => {
    return (
        <div className="flex justify-center items-center mt-10">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
        </div>
    );
};

export default Spinner;