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
}