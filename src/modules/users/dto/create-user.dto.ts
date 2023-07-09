import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'e9s7t@example.com', description: 'User email'})
    @IsString({message: 'Email must be a string'})
    @IsEmail({},{message: 'Email must be a valid email'})
    readonly email: string;

    @ApiProperty({example: 'password', description: 'User password'})
    @IsString({message: 'Password must be a string'})
    @Length(4, 20, {message: 'Password must be between 4 and 20 characters'})
    readonly password: string;
}