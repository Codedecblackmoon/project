export type AvatarCategory = 'base' | 'hair' | 'eyes' | 'mouth' | 'clothes' | 'accessories';

export interface AvatarState {
  base: string;
  hair: string;
  eyes: string;
  mouth: string;
  clothes: string;
  accessories: string;
}

export interface AvatarItem {
  id: string;
  category: AvatarCategory;
  name: string;
  imagePath: string;
}