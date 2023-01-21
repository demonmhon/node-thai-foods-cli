export interface FoodName {
  [langCode: string]: string
}

export interface FoodItem {
  name: FoodName;
  calories: Number;
  contain: string[];
  taste: string[];
  styles: string[];
}