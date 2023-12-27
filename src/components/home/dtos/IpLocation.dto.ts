import { plainToInstance } from "class-transformer";
import { IsDefined, IsNumber, IsString } from "class-validator";
import { RemoveMethods } from "../../../Extractor";


export class IpLocationDto
{
    @IsString()
    public readonly ip!: string;

    @IsString()
    public readonly country_name!: string;

    @IsString()
    public readonly country_code2!: string;

    @IsString()
    public readonly state_prov!: string;

    @IsString()
    public readonly district!: string;

    @IsString()
    public readonly city!: string;

    @IsString()
    public readonly zipcode!: string;

    @IsNumber()
    public readonly latitude!: number;

    @IsNumber()
    public readonly longitude!: number;

    @IsDefined()
    public readonly time_zone!: any;

    @IsString()
    public readonly isp!: string;

    @IsString()
    public readonly organization!: string;

    @IsString()
    public readonly asn!: string;

    public static from(data: IpLocationDtoLike): IpLocationDto
    {
        return plainToInstance(IpLocationDto, data);
    }
}

interface IpLocationDtoLike extends RemoveMethods<IpLocationDto> { }