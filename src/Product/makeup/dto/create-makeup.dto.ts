import { IsEnum, IsInt, IsString, Max, Min, MinLength } from 'class-validator';
import CategoryMakeUp from './categoryMk';

export class CreateMakeupDto {
  @IsString()
  @MinLength(1)
  readonly name: string;

  @IsEnum(CategoryMakeUp, {
    message: `Category must be one of: ${Object.values(CategoryMakeUp).join(', ')}`,
  })
  readonly category: CategoryMakeUp;

  @IsInt()
  @Min(0)
  readonly stock: number;

  @IsString()
  readonly ware_house_location: string;

  @IsInt()
  @Min(1, { message: 'Durability score must be at least 1' })
  @Max(10, { message: 'Durability score must be at most 10' })
  readonly durability_score: number;
}
