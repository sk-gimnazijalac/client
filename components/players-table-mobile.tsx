import players from './../public/database/players-page-data/players.json'
import Image from 'next/image'

const PlayersTableMobile = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden p-6">
      {players.map((player) => {
        return (
          <div
            key={player.id}
            className="bg-white space-y-3 p-4 rounded-lg shadow"
          >
            <div className="text-sm text-gray-700 flex gap-4">
              <div className="bg-orange p-2 rounded-full w-8 h-8">
                <Image
                  src={'/people-white.svg'}
                  alt="icon"
                  height={15}
                  width={15}
                />
              </div>

              <span className="text-lg font-medium text-black ">
                {player.name + ' ' + player.lastName}
              </span>
            </div>
            <div className="text-sm text-gray-700">
              <span className="text-sm font-medium text-black table-title-min-width ">
                Standard:
              </span>{' '}
              {player.standard || '-'}
            </div>
            <div className="text-sm text-gray-700">
              <span className="text-sm font-medium text-black table-title-min-width ">
                Rapid:
              </span>{' '}
              {player.rapid || '-'}
            </div>
            <div className="text-sm text-gray-700">
              <span className="text-sm font-medium text-black table-title-min-width ">
                Blitz:
              </span>{' '}
              {player.blitz || '-'}
            </div>
            <div className="text-sm text-gray-700">
              <span className="text-sm font-medium text-black table-title-min-width ">
                FIDE:
              </span>{' '}
              <a
                rel="noreferrer"
                target="_blank"
                className="underline"
                href={player.fideAccount}
              >
                Link
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PlayersTableMobile
