import config from '../utils/config';

const apiResquest = async <T>({
path,
method,
body
}:any):Promise<T> => {
    const url = config.URL;
    const settings = {
        method,
        url: `${url}${path}`,
        headers:buildHeaders(),
        responseType: 'json',
        body,
    } as any;
    console.log("names settings : ", settings)
    const response = await fetch(settings.url, {
        method: settings.method,
        headers: settings.headers,
        body: JSON.stringify(settings.body),
    });
    const results = await response.json();

    if (response.ok) {
        console.log(`Response from API ${path} ====> `, results);
        if (results) {
            return Promise.resolve(results);
        }
        return Promise.reject(new Error(`No problem error"`));
    }
    return Promise.reject(response);
}

const buildHeaders = () => {
    const headers: any = { 'Content-Type': 'application/json' };
    headers['X-RapidAPI-Key'] = config.RAPIDE_KEY;
    headers['X-RapidAPI-Host'] = config.RAPIDE_HOST;
    return headers;
};

export default apiResquest;