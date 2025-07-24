import { SupplyCategory } from '../../enums/supply-category';

export class Supply {
  id: string;
  name: string;
  category: SupplyCategory;

  constructor(id: string, name: string, category: SupplyCategory) {
    this.id = id;
    this.name = name;
    this.category = category;
  }
}
