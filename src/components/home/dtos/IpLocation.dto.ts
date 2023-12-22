import { plainToInstance } from "class-transformer";
import { IsNumber, IsString } from "class-validator";
import { RemoveMethods } from "../../../Extractor";


export class IpLocationDto
{
    @IsString()
    public readonly query!: string;

    @IsString()
    public readonly country!: string;

    @IsString()
    public readonly countryCode!: string;

    @IsString()
    public readonly region!: string;

    @IsString()
    public readonly regionName!: string;

    @IsString()
    public readonly city!: string;

    @IsString()
    public readonly zip!: string;

    @IsNumber()
    public readonly lat!: number;

    @IsNumber()
    public readonly lon!: number;

    @IsString()
    public readonly timezone!: string;

    @IsString()
    public readonly isp!: string;

    @IsString()
    public readonly org!: string;

    @IsString()
    public readonly as!: string;

    public static from(data: IpLocationDtoLike): IpLocationDto
    {
        return plainToInstance(IpLocationDto, data);
    }
}

interface IpLocationDtoLike extends RemoveMethods<IpLocationDto> { }