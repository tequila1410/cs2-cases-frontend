import {SkinModel} from '@components/cases/models/skin.model';

export interface CaseModel {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  isDashboardVisible: boolean;
  skins: {skin: SkinModel, dropRate: number}[];
}
