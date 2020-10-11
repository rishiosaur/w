import { IResolvers } from 'apollo-server-micro'
import { getNowPlaying } from '../functions/fetch'

const calcAge = () => {
	const dob = new Date(2005, 10, 4)
	const diff_ms = Date.now() - dob.getTime()

	const age_diff = new Date(diff_ms)

	return Math.abs(age_diff.getUTCFullYear() - 1970)
}

const getCurrentlyListening = async () => {
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

	return spotify
}

const resolvers: IResolvers<any, any> = {
	Query: {
		rishi: async () => ({
			name: 'Rishi Kothari',
			age: '15',
			birthday: 'October 4th, 2005',
			mood: 'pretty good',
			spotify: await getCurrentlyListening(),
		}),
	},
}

export default resolvers
