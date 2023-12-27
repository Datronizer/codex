export class Server
{
    public static async get(path: string): Promise<any>
    {
        const res = await fetch(path, {
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

        // https://api.ipgeolocation.io/ipgeo
    }
}