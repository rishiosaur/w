/* eslint-disable no-bitwise */
import { RequestDocument, Variables } from 'graphql-request/dist/types'
import { request, gql } from 'graphql-request'
import fetch from 'node-fetch'

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
	const colors = ['blue', 'teal', 'violet']
	const fg = colors
	const rfg = fg[~~(Math.random() * fg.length)]

	const bg = colors
	const rbg = bg[~~(Math.random() * bg.length)]

	console.log('hi')
	const { palette } = await request(
		'https://components.ai/api/graphql',
		gql`
			{
				palette {
					${rfg}s {
						hex
					}
					${rbg}s {
						hex
					}
				}
			}
		`
	)

	const bgc = palette[`${rbg}s`][0].hex
	const fgc = palette[`${rfg}s`][9].hex

	return { bg: bgc, fg: fgc }
}

export const fetcher = (options: Record<string, any>) => async (
	url: string
) => {
	console.log(url)
	console.log(options)
	console.log(await (await fetch(new URL(url), options)).json())
	return (await fetch(new URL(url), options)).json()
}

export const fetchFromSpotify = fetcher({
	headers: {
		Accept: 'application/json',
		Authorization:
			'Bearer BQCcBsQvfHJJt_xksHIoM0aUURq9vyVHTs3D7b6Jr11oKMVnSQThUyY6iQDKtYTaRhsdtiyTbdVSc2EODiowjXj2NZ2JLrOb6o9FHIUgMOxUBFFItpzoR8scuWwfkoaM9dPDKth7ATljFFj_4ikePzeDnrnXPw',
		'Content-Type': 'application/json',
	},
})
