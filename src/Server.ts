export class Server
{
    public static async get<T>(path: string, external?: boolean): Promise<T>
    {
        const url = !external ? import.meta.env.VITE_TRUEONGOD_URL + path : path;
        const res = await fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        });
        const json = res.json().catch(() => undefined);
        return json;
    }

    public static async getWithQuery(path:string, query: any): Promise<any>
    {
        const headers = []
        for (const key in query) 
        {
            headers.push(`${key}=${query[key]}`)
        }

        const newPath = (path + "?") + headers.join("&")

        const res = await fetch(newPath, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        });
        const json = res.json().catch(() => undefined);
        return json;
    }
}