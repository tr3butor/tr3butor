import { ApiProperty } from '@nestjs/swagger';
import { TextBlockDto } from '../../common/dto/textblock.dto';

export class CreateDaoDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    eth_address: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    admin_id: string;

    @ApiProperty()
    avatar: string;
    @ApiProperty()
    color: string;
    @ApiProperty()
    tags: string;
    @ApiProperty()
    date_founded: string;
    @ApiProperty({ type: () => [String] })
    contributors: string[];
    @ApiProperty()
    metric_mcap: string;
    @ApiProperty()
    metric_tvl: string;
    @ApiProperty()
    metric_volume: string;
    @ApiProperty()
    link_website: string;
    @ApiProperty()
    link_telegram: string;
    @ApiProperty()
    link_twitter: string;
    @ApiProperty()
    link_reddit: string;
    @ApiProperty()
    link_discord: string;

    @ApiProperty({ type: () => [TextBlockDto] })
    text_blocks: [TextBlockDto]
    /*
    @ApiProperty()
    about_mission: string;
    @ApiProperty()
    about_culture: string;
    @ApiProperty()
    about_history: string;
    @ApiProperty({ type: () => [String] })
    about_core_team: [string];
    @ApiProperty()
    about_whydao: string;
    @ApiProperty({ type: () => [String] })
    about_benefits: [string];
    @ApiProperty({ type: () => [String] })
    about_timezones: [string];
    */
}
