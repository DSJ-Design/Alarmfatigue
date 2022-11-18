export interface Patient
{
  id: number;
  name: string;
  age: number;
  room: string;
  disease: string;
  medication: string[];
  alarm: boolean;
}
