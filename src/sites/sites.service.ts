import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { SitesDocument } from './schemas/sites.schema';

@Injectable()
export class SitesService {
  constructor(
    @InjectModel('sites')
    private readonly sitesModel: Model<SitesDocument>,
  ) {}

  async findAll() {
    const sites = await this.sitesModel.find();
    return sites;
  }

  async findOne(id: string) {
    let sites;
    try {
      sites = await this.sitesModel.findById(id);
    } catch (error) {
      throw new NotFoundException("Le site web n'a pas été trouvé dans notre base de donnée")
    }
    return sites;
  }

  async findByUrl(createSiteDto) {
    let sites;
    try {
      sites = await this.sitesModel.find({ url: createSiteDto.url });
    } catch (error) {
      throw new NotFoundException("Le site web n'a pas été trouvé dans notre base de donnée")
    }
    return sites;
  }

  async create(createSiteDto: CreateSiteDto): Promise<SitesDocument> {
    const newSite = {
      "url": createSiteDto.url,
      "multiplier": "2"
    };
    const createSite = await new this.sitesModel(newSite);
    return createSite.save();
  }

  async update(id: string, updateSiteDto: UpdateSiteDto) {
    const updateSite = await this.sitesModel.updateOne({ _id: id }, updateSiteDto);
    return updateSite;
  }

  async remove(id: string) {
    const removeUser = await this.sitesModel.deleteOne({ _id: id });
    return removeUser;
  }
}
