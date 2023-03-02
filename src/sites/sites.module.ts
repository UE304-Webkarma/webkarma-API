import { Module } from '@nestjs/common';
import { SitesService } from './sites.service';
import { SitesController } from './sites.controller';
import { SitesSchema } from './schemas/sites.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'sites',
        schema: SitesSchema,
      },
    ]),
  ],
  controllers: [SitesController],
  providers: [SitesService]
})
export class SitesModule {}
