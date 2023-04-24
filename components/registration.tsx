import { useState } from 'react'

export default function Registration() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [resMessage, setResMessage] = useState('')
  const [emailError, setEmailError] = useState('')

  const MAILER_LITE_TOKEN = process.env.NEXT_PUBLIC_MAILER_LITE_TOKEN

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(e: any) {
    e.preventDefault()
    if (!validateEmail()) {
      return
    }
    setLoading(true)
    setResMessage('')
    const apiUrl = 'https://connect.mailerlite.com/api/subscribers'

    const postData = {
      email: email,
      fields: {
        name: name,
      },
    }

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${MAILER_LITE_TOKEN}`,
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (response.ok) {
          setResMessage('Uspešno ste se projavili!')
          setLoading(false)
        } else {
          setResMessage('Došlo je do greške.')
          setLoading(false)
        }
      })
      .catch(() => {
        setResMessage('Došlo je do greške.')
        setLoading(false)
      })
  }

  function validateEmail() {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!email) {
      setEmailError('Email adresa je obavezna')
      return false
    }
    if (!emailRegex.test(email)) {
      setEmailError('Unesite validnu email adresu')
      return false
    }
    setEmailError('')
    return true
  }

  return (
    <div className="my-24">
      <div className="ml-embedded" data-form="KmH2lC"></div>
      <div className="w-full lg:min-h-[380px] m-auto px-4 py-4 mt-6 overflow-hidden  card-bg-color shadow-2xl sm:max-w-md sm:rounded-lg">
        <form onSubmit={handleSubmit}>
          <h3 className="py-4">
            Prijavom putem ove forme dobijaćete email obaveštenja o najnovijim
            dešavanjima i turnirima.
          </h3>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Ime i Prezime
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Email adresa
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            {emailError && <p className="text-red-600 pt-4">{emailError}</p>}
          </div>

          <div className="flex items-center justify-end mt-4">
            <button
              disabled={loading}
              type="submit"
              className="inline-flex mt-auto items-end  px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900"
            >
              {loading ? 'Loading...' : 'Prijavi se'}
            </button>
          </div>
          {resMessage && <h3 className="pt-4">{resMessage}</h3>}
        </form>
      </div>
    </div>
  )
}
