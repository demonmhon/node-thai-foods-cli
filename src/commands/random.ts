import { Argv, Arguments } from 'yargs';

import { FoodItem } from '../types';
import TH_FOODS from '../assets/db.json';

const command = 'random';
const aliases = ['rnd'];
const describe = 'List all foods';
const builder = {};
const handler = function (argv: Argv): void {
  const results = getRandomItems(1)
  if (results) {
    console.log(results.name['th-TH'])
  }
};

function getRandomItems(limit: number): FoodItem {
  const item = TH_FOODS[Math.floor(Math.random() * TH_FOODS.length)];
  return item
}

export { command, aliases, describe, builder, handler };
