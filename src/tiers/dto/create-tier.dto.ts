import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTierDto {
  @ApiProperty({
    description: 'Campaign ID',
    example: 'campaign-123',
  })
  @IsString()
  @IsNotEmpty()
  campaign_id: string;

  @ApiProperty({
    description: 'Tier name',
    example: 'gold',
    enum: ['bronze', 'silver', 'gold', 'platinum'],
  })
  @IsString()
  @IsNotEmpty()
  tier: string;

  @ApiProperty({
    description: 'Maximum number of contributors for this tier',
    example: 100,
  })
  @IsNumber()
  @IsNotEmpty()
  limit: number;

  @ApiPropertyOptional({
    description: 'Tier description',
    example: 'Gold tier contributors get exclusive access',
  })
  @IsString()
  @IsOptional()
  description?: string;
}
