import {
  IsString,
  IsNumber,
  IsArray,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateMilestoneDto {
  @ApiProperty({
    description: 'Campaign ID',
    example: 'campaign-123',
  })
  @IsString()
  @IsNotEmpty()
  campaignId: string;

  @ApiProperty({
    description: 'Campaign object ID on blockchain',
    example: '0x9876543210fedcba9876543210fedcba98765432',
  })
  @IsString()
  @IsNotEmpty()
  objectId: string;

  @ApiProperty({
    description: 'Milestone ID',
    example: 'm1',
  })
  @IsString()
  @IsNotEmpty()
  milestoneId: string;

  @ApiProperty({
    description: 'Milestone title',
    example: 'Product Development Phase 1',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiPropertyOptional({
    description: 'Milestone status',
    example: 'pending',
    enum: ['pending', 'voting', 'approved', 'rejected', 'claimed'],
  })
  @IsString()
  @IsOptional()
  status?: string;

  @ApiPropertyOptional({
    description: 'Milestone description',
    example: 'Complete initial prototype development',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'List of deliverables',
    example: ['Prototype', 'Documentation', 'Testing'],
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  deliverables: string[];

  @ApiProperty({
    description: 'Milestone amount',
    example: 5000,
  })
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @ApiProperty({
    description: 'Currency code',
    example: 'SUI',
  })
  @IsString()
  @IsNotEmpty()
  currency: string;

  @ApiProperty({
    description: 'Voting duration in days',
    example: 7,
  })
  @IsNumber()
  @IsNotEmpty()
  votingDurationDays: number;

  @ApiPropertyOptional({
    description: 'Timeline start date (ISO string)',
    example: '2025-11-10T00:00:00.000Z',
  })
  @IsString()
  @IsOptional()
  timelineStart?: string;

  @ApiPropertyOptional({
    description: 'Timeline end date (ISO string)',
    example: '2025-12-10T00:00:00.000Z',
  })
  @IsString()
  @IsOptional()
  timelineEnd?: string;

  @ApiPropertyOptional({
    description: 'Information ID',
    example: 'info-789',
  })
  @IsString()
  @IsOptional()
  informationId?: string;
}
