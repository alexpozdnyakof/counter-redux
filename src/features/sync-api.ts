export default async function syncApi(): Promise<{ data: number }> {
	return new Promise(resolve => {
		setTimeout(() => resolve({ data: 338 }))
	})
}
