import { Argv, Arguments } from 'yargs';

import { FoodItem } from '../types';
import TH_FOODS from '../assets/db.json';

const command = 'ls';
const describe = 'List all foods';
const builder = {};
const handler = function (argv: Argv): void {
  console.log(`Total: ${TH_FOODS.length}`);
  console.log(TH_FOODS.map((i: FoodItem) => i.name['th-TH']));
};

export { command, describe, builder, handler };
