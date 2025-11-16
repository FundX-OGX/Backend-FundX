import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateContributionDto } from './dto/create-contribution.dto';
import type { IDatabaseService } from '../database/interfaces/database.interface';

@Injectable()
export class ContributionsService {
  constructor(
    @Inject('DATABASE_SERVICE')
    private readonly databaseService: IDatabaseService,
  ) {}

  async createContribution(createContributionDto: CreateContributionDto) {
    const {
      campaignId,
      eventId,
      walletAddress,
      amount,
      txHash,
      currency,
      tier,
    } = createContributionDto;

    let user = await this.databaseService.getUserByWalletAddress(walletAddress);
    if (!user) {
      user = await this.databaseService.createUser({
        wallet_address: walletAddress,
      });
    }

    const contribution = {
      user_id: user.id,
      campaign_id: campaignId || null,
      event_id: eventId || null,
      amount,
      transaction_hash: txHash,
      currency,
      tier,
    };

    return this.databaseService.createContributionAndupdateAmount(contribution);
  }

  async getAllContributions() {
    return this.databaseService.getAllContributions();
  }

  async getContributionsByWalletAddress(address: string) {
    return this.databaseService.getContributionsByAddress(address);
  }

  async getContributionsByCampaignId(campaignId: string) {
    return this.databaseService.getContributionsByCampaignId(campaignId);
  }

  async getContributionsByEventId(eventId: string) {
    return this.databaseService.getContributionsByEventId(eventId);
  }

  async getContributionsOfAllCampaigns() {
    const allContributions = await this.databaseService.getAllContributions();
    return allContributions.filter((c) => c.campaign_id);
  }

  async getContributionsOfAllEvents() {
    const allContributions = await this.databaseService.getAllContributions();
    return allContributions.filter((c) => c.event_id);
  }
}
