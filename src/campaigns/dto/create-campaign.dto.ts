import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCampaignDto {
  @ApiProperty({
    description: 'Blob ID from Walrus storage',
    example: 'blob-123456',
  })
  @IsString()
  @IsNotEmpty()
  blobId: string;

  @ApiProperty({
    description: 'Creator wallet address',
    example: '0x1234567890abcdef1234567890abcdef12345678',
  })
  @IsString()
  @IsNotEmpty()
  creatorAddress: string;

  @ApiPropertyOptional({
    description: 'Creator name',
    example: 'John Doe',
  })
  @IsString()
  @IsOptional()
  creatorName?: string;

  @ApiProperty({
    description: 'Target fundraising amount',
    example: 10000,
  })
  @IsNumber()
  @IsNotEmpty()
  targetAmount: number;

  @ApiProperty({
    description: 'Campaign duration in days',
    example: 30,
  })
  @IsNumber()
  @IsNotEmpty()
  duration: number;

  @ApiProperty({
    description: 'Reward type',
    example: 'equity',
    enum: ['equity', 'product', 'token'],
  })
  @IsString()
  @IsNotEmpty()
  rewardType: string;

  @ApiProperty({
    description: 'Currency code',
    example: 'SUI',
  })
  @IsString()
  @IsNotEmpty()
  currency: string;

  @ApiPropertyOptional({
    description: 'Campaign description',
    example: 'A revolutionary product that will change the world',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Campaign title',
    example: 'My Awesome Campaign',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Transaction hash from blockchain',
    example: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890',
  })
  @IsString()
  @IsNotEmpty()
  txHash: string;

  @ApiProperty({
    description: 'Campaign object ID on blockchain',
    example: '0x9876543210fedcba9876543210fedcba98765432',
  })
  @IsString()
  @IsNotEmpty()
  objectId: string;

  @ApiProperty({
    description: 'Campaign category',
    example: 'technology',
  })
  @IsString()
  @IsNotEmpty()
  category: string;
}
