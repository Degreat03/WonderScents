import PhaithWonder from "../assets/1000029231.jpg"

function History(){
    return(
        <div>
            <h1 className=" my-20 mx-auto text-center bg-tertiary p-5 text-white font-semibold
            text-xl sm:text-2xl lg:w-200 sm:w-20 md:w-120">
                History</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center 
            justify-items-center text-center max-w-250 mx-auto
            gap-5 sm:p-5 md:p-7.5 lg:p-7.5
            ">
                <div>
                    <img src={PhaithWonder} 
                    className="sm:h-140 sm:w-68 md:h-120 md:w-100 
                    rounded-lg shadow-md object-cover
                    gap-7
                    lg:h-120 lg:w-100"
                    alt="Phaith Wonder" />
                </div>
                <div>
                    <p className="sm:text-sm  lg:text-md leading-relaxed text-gray-700">
                        <strong>Faith Fragrance Limited was founded on 19th November 2025 by Faith Emmanuel</strong>, a visionary with a deep passion for fine fragrances and an unwavering belief in the power of scent to inspire confidence, elegance, and emotional connection.

                        What began as a simple idea in her creative workspace quickly grew into a purpose-driven brand rooted in quality, authenticity, and faith. Faith Emmanuel launched the company with a mission:
                        to craft unique, long-lasting fragrances that speak to identity, beauty, and the essence of personal style.

                        Despite starting with modest resources, Faith Fragrance Limited gained early recognition for its clean formulations, captivating scent blends, and elegantly curated packaging. The brand built trust organically—through exceptional product quality and heartfelt storytelling that resonated with customers.

                        Backed by a small but dedicated team of five staff, the company operated like a close-knit family. Each member contributed to production, branding, marketing, logistics, and customer relations, ensuring that every bottle reflected the highest standard of craftsmanship and care.

                        Today, Faith Fragrance Limited continues to expand with a growing product line and a loyal community of fragrance lovers. Guided by the vision of Faith Emmanuel, the brand stands firm on its founding principles of creativity, excellence, and faith, striving to become one of the leading names in modern fragrance culture.

                        Faith Fragrance Limited remains a powerful testament to what passion, purpose, and a committed team can achieve—no matter how small the beginning.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default History