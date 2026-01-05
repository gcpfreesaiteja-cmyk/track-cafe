
export interface MenuItem {
  id: string;
  name: string;
  category: 'Quick Laps' | 'Long Stints' | 'Pit Stops' | 'Merch';
  price: string;
  description: string;
  image: string;
}

export interface AIRecommendation {
  coffee: string;
  reason: string;
  mood: string;
}
