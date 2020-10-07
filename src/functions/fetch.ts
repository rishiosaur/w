/* eslint-disable no-bitwise */
import { RequestDocument, Variables } from 'graphql-request/dist/types'
import { request, gql } from 'graphql-request'
import fetch from 'node-fetch'

import querystring from 'querystring'

export const fetchFromCMS = async (
	document: RequestDocument,
	variables?: Variables
) =>
	request(
		'https://rishi-portfolio-backend.herokuapp.com/graphql',
		document,
		variables
	)

export const getTheme = async () => {
	const colors = ['blue', 'teal', 'violet', 'gold', 'red']
	const c = colors[~~(Math.random() * colors.length)]

	console.log('hi')
	const { palette, fontPairing } = await request(
		'https://components.ai/api/graphql',
		gql`
			{
				palette {
					${c}s {
						hex
					}
				}
		
			}
		`
	)

	return {
		bg: palette[`${c}s`][0].hex,
		fg: palette[`${c}s`][9].hex,
		fontPairing,
	}
}

export const fetcher = (options: Record<string, any>) => async (
	url: string
) => {
	console.log(url)
	console.log(options)
	console.log(await (await fetch(new URL(url), options)).json())
	return (await fetch(new URL(url), options)).json()
}

const {
	SPOTIFY_ID: client_id,
	SPOTIFY_SECRET: client_secret,
	SPOTIFY_REFRESH: refresh_token,
} = process.env

console.log(process.env)

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async () => {
	const response = await fetch(TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: querystring.stringify({
			grant_type: 'refresh_token',
			refresh_token,
		}),
	})

	return response.json()
}

export const getNowPlaying = async () => {
	const { access_token } = await getAccessToken()

	return fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	})
}

export const fetchFromSpotify = fetcher({
	headers: {
		Accept: 'application/json',
		Authorization:
			'Bearer BQCcBsQvfHJJt_xksHIoM0aUURq9vyVHTs3D7b6Jr11oKMVnSQThUyY6iQDKtYTaRhsdtiyTbdVSc2EODiowjXj2NZ2JLrOb6o9FHIUgMOxUBFFItpzoR8scuWwfkoaM9dPDKth7ATljFFj_4ikePzeDnrnXPw',
		'Content-Type': 'application/json',
	},
})
