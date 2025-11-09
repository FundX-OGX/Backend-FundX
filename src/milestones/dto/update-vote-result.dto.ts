import { IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateVoteResultDto {
  @ApiProperty({
    description: 'Vote result: 1 for approved, 0 for rejected',
    example: 1,
    enum: [0, 1],
  })
  @IsNumber()
  @IsNotEmpty()
  voteResult: number;
}
