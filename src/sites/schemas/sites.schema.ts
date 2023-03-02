import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SitesDocument = Sites & Document;

@Schema()
export class Sites {
  @Prop()
  id: string;
  
  @Prop()
  url: string;

  @Prop()
  multiplier: string;
}

export const SitesSchema = SchemaFactory.createForClass(Sites);
