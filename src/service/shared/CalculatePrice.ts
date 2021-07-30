import CostController from '../controllers/CostController';

type PriceProps = {
  type: string;
  weight: number;
  isDelivery: boolean;
}

export async function CalculatePrice({type, weight, isDelivery}: PriceProps) {

  let priceKg = 0;
  let deliveryCost = 0;

  await CostController.show().then((dados) => {
    if (dados) {
      switch (type) {
        case 'machine':
          priceKg = dados.washingMachine;
          break;
        case 'hand':
          priceKg = dados.washingHand;
          break;
        case 'dry':
          priceKg = dados.washingDry;
          break;
      }

      if(isDelivery) {
        deliveryCost = dados.deliveryCost;
      }
    }
  });

  const price = priceKg * (weight > 0 ? weight : 0) + (isDelivery ? deliveryCost : 0);
  return price;
}