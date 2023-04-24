const Contact = () => {
  return (
    <section className="text-color text-center ">
      <div className="relative">
        <h1 className="my-6">Kontakt informacije:</h1>
      </div>
      <div className="flex flex-col md:flex-row my-16 gap-4 items-center justify-center md:flex-wrap">
        <div className="max-w-sm rounded overflow-hidden shadow-2xl relative">
          <div className="px-6 py-4 min-h-[300px] min-w-[300px] card-bg-color">
            <h3 className="font-bold mb-6">Rukovodstvo:</h3>
            <h4 className="font-bold mb-2">Predsednik:</h4>
            <h4 className="mb-6">Ivan Tot - 0692705990</h4>
            <h4 className="font-bold">Sekretar:</h4>
            <h4>Martin Hlozan - 062558083</h4>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-2xl relative">
          <div className="px-6 py-4 min-h-[300px] min-w-[300px] card-bg-color">
            <h3 className="font-bold mb-6">Email adrese:</h3>
            <h4 className="font-bold mb-2">Sahovski klub Gimnazijalac:</h4>
            <h4 className="mb-6"> gimnazijalacinfo@gmail.com</h4>
            <h4 className="font-bold">Gimnazija:</h4>
            <h4>info@gimnazijabp.edu.rs</h4>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-2xl relative">
          <div className="px-6 py-4 min-h-[300px] min-w-[300px] card-bg-color">
            <h3 className="font-bold mb-6">Linkovi:</h3>
            <a
              className="font-bold mb-8 text-color underline hover:text-zinc-600 inline-block"
              href="https://lichess.org/team/gimnazijalac"
              target="_blank"
              rel="noreferrer"
            >
              <h4>Lichess</h4>
            </a>
            <br />
            <a
              className="font-bold mb-8 text-color underline  hover:text-zinc-600 inline-block"
              href="https://www.facebook.com/%C5%A0ah-klub-Gimnazijalac-979024278831201"
              target="_blank"
              rel="noreferrer"
            >
              <h4>Facebook</h4>
            </a>
          </div>
        </div>
      </div>
      <div className="my-12 text-color  lg:mx-32" />
    </section>
  )
}

export default Contact
