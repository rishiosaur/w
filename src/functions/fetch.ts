/* eslint-disable no-bitwise */
import { RequestDocument, Variables } from 'graphql-request/dist/types'
import { request, gql } from 'graphql-request'
import fetch from 'node-fetch'

import querystring from 'querystring'

export const fetchFromCMS = async (
	document: RequestDocument,
	variables?: Variables
) => request('https://c.rishi.cx/graphql', document, variables)

export const getTheme = async () => {
	const colors = ['indigo', 'gold', 'blue', 'violet']
	const c = colors[~~(Math.random() * colors.length)]

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
		bg: 'black',
		fg: palette[`${c}s`][palette[`${c}s`].length - 1].hex,
		fontPairing,
	}
}

export const fetcher = (options: Record<string, any>) => async (url: string) =>
	(await fetch(new URL(url), options)).json()

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
