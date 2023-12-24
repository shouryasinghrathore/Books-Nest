import {IsNotEmpty,IsEmail, IsString, MinLength} from 'class-validator'
 
export class LoginDto{
   
    @IsNotEmpty()
    @IsEmail({},{ message:"please enter a valid email address"})
    readonly email:string

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password:string


}