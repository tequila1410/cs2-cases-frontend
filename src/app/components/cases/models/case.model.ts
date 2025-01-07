export interface SkinModel {
  _id: string;
  weaponName: string;
  skinName: string;
  description: string;
  price: number;
  rarity: string;
  imageUrl: string;
}

export interface CaseModel {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  isDashboardVisible: boolean;
  skins: SkinModel[];
}
