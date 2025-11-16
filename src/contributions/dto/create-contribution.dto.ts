import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@ValidatorConstraint({ name: 'isOnlyOnePresent', async: false })
export class IsOnlyOnePresentConstraint
  implements ValidatorConstraintInterface
{
  validate(value: any, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];
    return (
      (value === undefined && relatedValue !== undefined) ||
      (value !== undefined && relatedValue === undefined)
    );
  }

  defaultMessage(args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    return `Either ${args.property} or ${relatedPropertyName} must be present, but not both.`;
  }
}

export class CreateContributionDto {
  @ApiProperty({
    description: 'Campaign ID. Either campaignId or eventId must be present.',
    example: 'campaign-123',
    required: false,
  })
  @IsOptional()
  @IsString()
  @Validate(IsOnlyOnePresentConstraint, ['eventId'])
  campaignId?: string;

  @ApiProperty({
    description: 'Event ID. Either campaignId or eventId must be present.',
    example: 'event-123',
    required: false,
  })
  @IsOptional()
  @IsString()
  eventId?: string;

  @ApiProperty({
    description: 'Contributor wallet address',
    example: '0x1234567890abcdef1234567890abcdef12345678',
  })
  @IsString()
  @IsNotEmpty()
  walletAddress: string;

  @ApiProperty({
    description: 'Contribution amount',
    example: 100,
  })
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({
    description: 'Transaction hash from blockchain',
    example:
      '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890',
  })
  @IsString()
  @IsNotEmpty()
  txHash: string;

  @ApiProperty({
    description: 'Tier type',
    example: 'gold',
    enum: ['bronze', 'silver', 'gold', 'platinum'],
    required: false,
  })
  @IsString()
  @IsOptional()
  tier?: string;

  @ApiProperty({
    description: 'Currency code',
    example: 'SUI',
  })
  @IsString()
  @IsNotEmpty()
  currency: string;
}
