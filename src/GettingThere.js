export default function GettingThere() {
    return (
        <body className="bg-auto h-screen bg-[url('/public/cta.webp')]">
            <div className='flex flex-col w-6/12 h-full justify-left text-center p-20 px-20 font-extrabold bg-yellow-500'>
                <h1 className="text-7xl">
                    Getting there<br/>
                    <span className="text-3xl font-normal italic">All roads lead to Pilsen...</span>
                </h1>
                <h1 className="text-3xl pt-12 pb-4">
                    By train
                </h1>
                <p className="text-xl font-semibold">
                Visit Pilsen by taking the CTA or Metra. Take the Pink line to 18th or the BNSF Metra Electric line to Halsted Street.
                </p>
                <h1 className="text-3xl pt-6 pb-4">
                    By bus
                </h1>
                <p className="text-xl font-semibold">
                Several CTA lines service the Pilsen neighborhood: 4, 21, 62.
                </p>
                <h1 className="text-3xl pt-6 pb-4">
                    By bike
                </h1>
                <p className="text-xl font-semibold">
                From Michigan Avenue, head to  E Van Buren St and turn left onto State St. Turn right onto W 18th St and bike ahead into Pilsen. 
                </p>
                <h1 className="text-3xl pt-6 pb-4">
                    By car
                </h1>
                <p className="text-xl font-semibold">
                    We don't do that
                </p>
                <a href="/" className="text-left underline"><span>Back to home</span></a>
            </div>
    </body>
    )
}