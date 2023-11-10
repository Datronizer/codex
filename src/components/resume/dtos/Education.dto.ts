import { Transform, plainToInstance } from "class-transformer";
import { IsString, IsOptional, IsDate } from "class-validator";
import { RemoveMethods } from "../../../Extractor";


export class EducationDto
{
    @IsString()
    public readonly institution!: string;

    @IsString()
    public readonly degree!: string;

    @IsDate()
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    public readonly start!: Date | string;

    @IsDate()
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    @IsOptional()
    public readonly end?: Date | string | null;

    public readonly majors!: string[];
    public readonly minors?: string[];

    public readonly gpa?: number;

    public readonly achievements?: string[];
    public readonly accolades?: string[];
    public readonly extracurriculars?: string[];

    public static from(data: EducationDtoLike): EducationDto
    {
        return plainToInstance(EducationDto, data);
    }
}

interface EducationDtoLike extends RemoveMethods<EducationDto> { }