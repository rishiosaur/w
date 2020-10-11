import { NextApiRequest, NextApiResponse } from 'next'
import { getNowPlaying } from '../../src/functions/fetch'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const response = await getNowPlaying()

	let spotify = {
		artists: 'none',
		album: 'none',
		name: 'none',
		playing: false,
		url: 'none',
	}

	if (!(response.status === 204 || response.status > 400)) {
		const { item: song, is_playing: playing, ...other } = await response.json()

		if (playing && !(other.currently_playing_type === 'ad')) {
			const { album, artists: sptfyArtists, external_urls, name } = song

			const artists = sptfyArtists.map((artist) => artist.name).join(' + ')

			console.log(album)

			spotify = {
				artists,
				album: album.name,
				name,
				url: external_urls.spotify,
				playing: true,
			}
		}
	}

	res.json(spotify)
}
