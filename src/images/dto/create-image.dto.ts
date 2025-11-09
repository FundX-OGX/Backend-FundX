import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateImageDto {
  @ApiProperty({
    description: 'Campaign ID',
    example: 'campaign-123',
  })
  @IsString()
  @IsNotEmpty()
  campaignId: string;

  @ApiProperty({
    description: 'Image ID',
    example: 'img-456',
  })
  @IsString()
  @IsNotEmpty()
  imgId: string;

  @ApiProperty({
    description: 'Image type',
    example: 'banner',
    enum: ['banner', 'thumbnail', 'gallery'],
  })
  @IsString()
  @IsNotEmpty()
  type: string;
}
