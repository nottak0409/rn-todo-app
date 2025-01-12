import { useState, useEffect } from "react";

export function useFetch(url: string) {
	const [data, setData] = useState<string | null>(null);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url, {
					headers: {
						"Content-Type": "application/json",
					},
				});
				const text = await response.text();
				setData(text);
			} catch (error) {
				setError(error as Error);
			}
		};

		fetchData();
	}, [url]);

	return { data, error };
}
