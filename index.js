const fetch = require('node-fetch');

const url = 'https://developers.youversionapi.com/1.0/verse_of_the_day?version=kjv';

(async () => {
	try {
		const response = await fetch(url, {
			method: "GET",
			headers: {
				Accept: "application/json",
				Referer: "test",
				"Accept-Language": 'en',
				"User-Agent": "test",
				"X-YouVersion-Developer-Token": ""
			}
		});
		const {data} = await response.json();
		console.log(data);
	} catch (error) {
		console.error(error.message);
	}
})();

