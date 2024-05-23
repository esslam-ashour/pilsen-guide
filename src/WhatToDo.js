export default function WhatToDo() {
    return (
        <body className="bg-cover h-screen bg-[url('/public/festival.webp')]">
            <div className='flex flex-col w-6/12 h-full justify-left text-center p-20 px-20 font-extrabold bg-yellow-500'>
                <h1 className="text-7xl">
                    What to do?<br/>
                    <span className="text-3xl font-normal italic">Music, food, art and much more...</span>
                </h1>
                <p className="text-left text-xl py-4 font-light">
                Sip margaritas on the lively patio at <span className="font-bold">La Vaca</span>, then satisfy your sweet tooth with gorditas dulces at <span className="font-bold">Panaderia Nuevo Leon</span>
                </p>
                <p className="text-left text-xl py-4 font-light">
                Spend an evening exploring open studios and galleries in Pilsen’s arts district during  free <span className="font-bold">Second Fridays</span> events
                </p>
                <p className="text-left text-xl py-4 font-light">
                Stop for tacos at some of Pilsen’s staple carnitas  joints like <span className="font-bold">Carnitas Don Pedro</span> and <span className="font-bold">Carnitas Uruapan</span>
                </p>
                <p className="text-left text-xl py-4 font-light">
                Celebrate <span className="font-bold">Día de los Muertos</span> (Day of the Dead) in Pilsen, when Harrison Park is filled with colorful ofrendas, live music, and family-friendly activities.
                </p>
                <p className="text-left text-xl py-4 font-light">
                Spend some time in Harrison or Dvorak Park before taking a stroll along a railroad embankment to see the <span className="font-bold">16th Street Murals</span>, featuring work by artists like JC Rivera, Hebru Brantley and ROA.
                </p>
                <a href="/" className="text-left underline"><span>Back to home</span></a>
            </div>
    </body>
    )
}