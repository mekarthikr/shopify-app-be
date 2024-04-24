import axios, {
	type AxiosInstance,
	AxiosResponse,
} from 'axios';

type http = 'GET' | 'POST';

interface IRequestType<T> {
	method: http;
	endpoint: string;
	body: T;
}

class Axios {
	private readonly axiosInstance: AxiosInstance;

	constructor(url: string, optional: { headers: any }) {
		this.axiosInstance = axios.create({
			baseURL: url,
			headers: optional.headers,
		});
	}

	private get<T>(endpoint: string): Promise<AxiosResponse<T>> {
		return this.axiosInstance.get(endpoint);
	}

	private post<T>(endpoint: string, data: T): Promise<AxiosResponse<T>> {
		return this.axiosInstance.post(endpoint, data);
	}

	public requestHandler<T>({
		method,
		endpoint,
		body,
	}: IRequestType<T>): Promise<AxiosResponse<T>> {
		switch (method) {
			case 'GET':
				return this.get(endpoint);
			case 'POST':
				return this.post(endpoint, body);
			default:
				return this.get(endpoint);
		}
	}
}

export default Axios;
