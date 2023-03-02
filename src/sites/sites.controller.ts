import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';

@Controller('api')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @Get('sites')
  findAll() {
    return this.sitesService.findAll();
  }

  @Post('sites/new')
  create(@Body() createSiteDto: CreateSiteDto) {
    return this.sitesService.create(createSiteDto);
  }

  @Get('sites/:id')
  findOne(@Param('id') id: string) {
    return this.sitesService.findOne(id);
  }

  @Post('sites/url/')
  async findByUrl(@Body() createSiteDto: CreateSiteDto) {
    let request = await this.sitesService.findByUrl(createSiteDto);
    if (request = []) {
      return this.sitesService.create(createSiteDto);
    } else {
      return request
    }
  }

  @Put('sites/update/:id')
  update(@Param('id') id: string, @Body() updateSiteDto: UpdateSiteDto) {
    return this.sitesService.update(id, updateSiteDto);
  }

  @Delete('sites/delete/:id')
  remove(@Param('id') id: string) {
    return this.sitesService.remove(id);
  }
}
