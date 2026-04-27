

function Location(){
    return(
        <div className="mt-[100px] mb-[120px]">
            <h2 className="text-center text-2xl mb-[40px]" >Contact Us</h2>
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center
            gap-[20px]
            ">
                <div className="flex flex-col bg-[#e0e0e0cb] items-center justify-center text-center shadow-xxl w-[20rem] h-[10rem] p-[20px] rounded-lg">
                    <i class="bi bi-whatsapp text-5xl mb-[10px]"></i>
                    <a href="#" className="text-xl font-[300]">https://shdhdhuiuscisciscsdc</a>
                </div>
                <div className="flex flex-col bg-[#e0e0e0cb] items-center justify-center text-center shadow-xxl w-[20rem] h-[10rem] p-[20px] rounded-lg">
                    <i class="bi bi-envelope text-5xl mb-[10px]"></i>
                    <p className="text-xl font-[300]">wonderscent@email.com</p>
                </div>
            </div>
            
        </div>
    )
}

export default Location