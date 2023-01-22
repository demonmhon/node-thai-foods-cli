export interface FoodName {
  [langCode: string]: string
}

export interface FoodItem {
  name: FoodName;
  calories: Number;
  ingredient: string[];
  taste: string[];
  styles: string[];
}