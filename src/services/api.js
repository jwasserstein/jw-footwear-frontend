const API_BASE_URL = 'http://localhost:3001/api';

export async function apiCall(type, url, data) {
	if(type.toLowerCase() === 'get'){
		const resp = await fetch(API_BASE_URL + url, {
			method: type,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.token}`
			}
		});
		const d = await resp.json();
		return d;
	} else {
		const resp = await fetch(API_BASE_URL + url, {
			method: type,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.token}`
			},
			body: JSON.stringify(data)
		});
		const d = await resp.json();
		return d;
	}
}