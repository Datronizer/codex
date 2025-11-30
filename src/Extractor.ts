export type RemoveMethods<T> = { [P in keyof T as T[P] extends (...args: any) => any ? never : P]: T[P] };

export type ExtractionMap<T, D> = Required<{
    [K in keyof RemoveMethods<T>]: (data: D) => RemoveMethods<T>[K]
}>;
export class Extractor<T, D>
{
    private helper: ExtractionMap<T, D>;

    constructor(helper: ExtractionMap<T, D>)
    {
        this.helper = helper;
    }

    apply(dto: T, data: D): T
    {
        for (const key in this.helper)
        {
            dto[key] = this.helper[key](data);
        }

        return dto;
    }

    omit<K extends keyof T>(keys: readonly K[]): Extractor<Omit<T, K>, D>
    {
        const newHelper = {} as ExtractionMap<Omit<T, K>, D>;
        for (const key in this.helper)
        {
            if (!keys.includes(key as any))
            {
                (newHelper as any)[key] = this.helper[key];
            }
        }

        return new Extractor(newHelper);
    }

    mod<S, R>(map: Partial<ExtractionMap<T, D>> & ExtractionMap<Omit<S, keyof T>, R>): Extractor<T & S, R>
    {
        const newHelper = {} as ExtractionMap<T & S, R>;
        for (const key in this.helper)
        {
            (newHelper as any)[key] = this.helper[key];
        }
        for (const key in map)
        {
            (newHelper as any)[key] = (map as any)[key];
        }

        return new Extractor(newHelper);
    }
}
