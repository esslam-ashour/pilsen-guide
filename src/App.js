export default function App() {
  return (
    <body className="bg-cover h-screen bg-[url('/public/mural_bg.jpeg')]">
        <div className='flex flex-col w-6/12 h-full justify-left text-center p-20 px-20 font-extrabold bg-yellow-500'>
        <h1 className="text-7xl">
            Pilsen<br/>
            <span className="text-5xl font-normal italic">El Corazón de Chicago</span>
        </h1>

        <ul className='justify-center text-center py-10 font-semibold'>
            <a href="/history"><li className="transition ease-in-out delay-1 hover:-translate-y-2 hover:scale-11 duration-300 text-5xl p-5">History</li></a>
            <a href="/culture"><li className="transition ease-in-out delay-1 hover:-translate-y-2 hover:scale-11 duration-300 text-5xl p-5">Culture</li></a>           
            <a href="/what-to-do"><li className="transition ease-in-out delay-1 hover:-translate-y-2 hover:scale-11 duration-300 text-5xl p-5">What to do?</li></a>
            <a href="/getting-there"><li className="transition ease-in-out delay-1 hover:-translate-y-2 hover:scale-11 duration-300 text-5xl p-5">Getting there</li></a>        
        </ul>
        </div>
    </body>
  );
}

