import Image from 'next/image'
export default function AboutUs() {
  return (
    <div className="my-12 text-white text-center lg:text-justify lg:mr-36 flex">
      <div className="lg:mx-24 mx-12">
        <h1 className="my-6">O nama</h1>
        <p className="mt-12">
          Šah klub Gimnazijalac je osnovan 2015. godine, pre toga je bila
          sekcija u skoli koja je pocela 2007. godine. Od 2016. godine klub se
          takmici u petom rangu - Medjuopstinskoj ligi Vrbas. Iste godine
          osvojilo se drugo mesto, uz 6 pobeda i 1 poraz. Klub se 2017. prvi put
          plasirao na zavrsni turnir Kupa Vojvodine. Iste godine je osvojeno 1.
          mesto u ligi nakon baraznog meca sa Selencom.
        </p>
        <div className="flex gap-8 lg:py-8 flex-col lg:flex-row">
          <div className="lg:w-2/3">
            <p className="my-12">
              Od 2019, prvi put ucestvuju 2 tima Gimnazijalca, Gimnazijalac A i
              Gimnazijalac B. Prva ekipa je osvojilca ubedljivo prvo mesto, dok
              je druga bila 6. mesto. Sah klub Gimnazijalac kontinuirano
              sakuplja nove igrace, osnovce i srednjoskolce koji uz zabavu uce
              da igraju sah.
            </p>
            <p className="my-12">
              Prvenstvo kluba ŠK „Gimnazijalac“ - Šahovski klub „Gimnazijalac“
              od 2020. god. tradicionalno održava prventsvo kluba u klasičnom
              šahu, koje je namenjeno članovima kluba. Takmiči se u tri
              kategorije: za najboljeg igrača, najboljeg omladinca i najboljeg
              juniora.
            </p>
            <p className="my-12">
              „Turnir tri kluba“ – U saradnji tri šahovska kluba „Kraljev
              gambit“ iz Bača, „Kulpin“ iz Kulpina i „Gimnazijalac“ iz Bačke
              Palanke od 2022. god se organiziju zajednički turnir u klasičnom
              šahu. Na turniru učestvuju igrači iz sva tri kluba.
            </p>
          </div>
          <div className="lg:w-1/3 my-auto lg:ml-auto">
            <Image
              src={'/database/hero-img.jpg'}
              width={480}
              height={300}
              alt="hero"
              objectFit="fill"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
