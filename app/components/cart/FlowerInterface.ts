interface IFlower {
  id: number;
  name: string;
  latinName: string;
  imageUrl: string;
  price: number;
  currency: string;
}

export interface CartCardProps {
  flower: IFlower;
  trash: boolean;
}

export default IFlower;