const Loader = () => {
    return (
        <div className="flex justify-center items-center py-3">
            <div className="spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>       
    );
}
export default Loader;  