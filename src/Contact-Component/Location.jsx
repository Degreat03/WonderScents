

function Location(){
    return(
        <div className="mt-25 mb-30">
            <h2 className="text-center text-2xl mb-10" >Contact Us</h2>
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center
            gap-5
            ">
                <div className="flex flex-col bg-opacity2 items-center justify-center text-center shadow-xxl w-[20rem] h-40 p-5 rounded-lg">
                    <i class="bi bi-whatsapp text-5xl mb-2.5"></i>
                    <a href="#" className="text-xl font-light">08160398610</a>
                </div>
                <div className="flex flex-col bg-opacity2 items-center justify-center text-center shadow-xxl w-[20rem] h-40 p-5 rounded-lg">
                    <i class="bi bi-envelope text-5xl mb-2.5"></i>
                    <p className="text-xl font-light">emmanuelfaith869@gmail.com</p>
                </div>
            </div>
            
        </div>
    )
}

export default Location