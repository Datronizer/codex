import { Transform, plainToInstance } from "class-transformer";
import { IsString, IsOptional, IsDate } from "class-validator";
import { RemoveMethods } from "../../../Extractor";


export class WorkDto
{
    @IsString()
    public readonly title!: string;

    @IsString()
    public readonly workplace!: string;

    @IsString()
    @IsOptional()
    public readonly division?: string | null; // Like what branch you were working in the company

    @IsString()
    public readonly location!: string;

    @IsDate()
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    public readonly start!: Date | string;

    @IsDate()
    @Transform(({ value }) => value === null ? undefined : new Date(value), { toClassOnly: true })
    @IsOptional()
    public readonly end?: Date | string | null;

    public readonly duties?: string[];

    public static from(data: WorkDtoLike): WorkDto
    {
        return plainToInstance(WorkDto, data);
    }
}

interface WorkDtoLike extends RemoveMethods<WorkDto> { } 