import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';
import { ContributionsService } from './contributions.service';
import { CreateContributionDto } from './dto/create-contribution.dto';

@ApiTags('Contributions')
@Controller('contributions')
export class ContributionsController {
  constructor(private readonly contributionsService: ContributionsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new contribution for a campaign or event',
  })
  @ApiResponse({
    status: 201,
    description: 'Contribution created successfully',
  })
  @ApiResponse({ status: 400, description: 'Validation error' })
  @ApiResponse({ status: 404, description: 'Campaign or Event not found' })
  async createContribution(@Body() createContributionDto: CreateContributionDto) {
    try {
      const data = await this.contributionsService.createContribution(createContributionDto);
      return { is_success: true, data };
    } catch (error) {
      return { is_success: false, error: error.message };
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all contributions' })
  @ApiResponse({
    status: 200,
    description: 'A list of all contributions',
  })
  async getAllContributions() {
    try {
      const data = await this.contributionsService.getAllContributions();
      return { is_success: true, data };
    } catch (error) {
      return { is_success: false, error: error.message };
    }
  }

  @Get('wallet/:address')
  @ApiOperation({ summary: 'Get all contributions for a given wallet address' })
  @ApiParam({ name: 'address', description: 'The wallet address of the contributor' })
  @ApiResponse({
    status: 200,
    description: 'A list of contributions for the given wallet address',
  })
  async getContributionsByWalletAddress(@Param('address') address: string) {
    try {
      const data = await this.contributionsService.getContributionsByWalletAddress(address);
      return { is_success: true, data };
    } catch (error) {
      return { is_success: false, error: error.message };
    }
  }

  @Get('campaign/:id')
  @ApiOperation({ summary: 'Get all contributions for a given campaign' })
  @ApiParam({ name: 'id', description: 'The ID of the campaign' })
  @ApiResponse({
    status: 200,
    description: 'A list of contributions for the given campaign',
  })
  async getContributionsByCampaignId(@Param('id') id: string) {
    try {
      const data = await this.contributionsService.getContributionsByCampaignId(id);
      return { is_success: true, data };
    } catch (error) {
      return { is_success: false, error: error.message };
    }
  }

  @Get('event/:id')
  @ApiOperation({ summary: 'Get all contributions for a given event' })
  @ApiParam({ name: 'id', description: 'The ID of the event' })
  @ApiResponse({
    status: 200,
    description: 'A list of contributions for the given event',
  })
  async getContributionsByEventId(@Param('id') id: string) {
    try {
      const data = await this.contributionsService.getContributionsByEventId(id);
      return { is_success: true, data };
    } catch (error) {
      return { is_success: false, error: error.message };
    }
  }

  @Get('campaigns')
  @ApiOperation({ summary: 'Get all contributions made to campaigns' })
  @ApiResponse({
    status: 200,
    description: 'A list of all contributions made to campaigns',
  })
  async getContributionsOfAllCampaigns() {
    try {
      const data = await this.contributionsService.getContributionsOfAllCampaigns();
      return { is_success: true, data };
    } catch (error) {
      return { is_success: false, error: error.message };
    }
  }

  @Get('events')
  @ApiOperation({ summary: 'Get all contributions made to events' })
  @ApiResponse({
    status: 200,
    description: 'A list of all contributions made to events',
  })
  async getContributionsOfAllEvents() {
    try {
      const data = await this.contributionsService.getContributionsOfAllEvents();
      return { is_success: true, data };
    } catch (error) {
      return { is_success: false, error: error.message };
    }
  }
}
