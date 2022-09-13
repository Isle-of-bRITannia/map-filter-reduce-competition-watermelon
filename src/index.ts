import allTransactions from './all_transactions.json';
import botwData from './botw_data.json';
import botwEquipment from './botw_equipment_cleaned.json';
import botwMonsters from './botw_monsters_cleaned.json';


type Equipment = {
    category: string,
    common_locations: string[],
    description: string,
    id: number,
    name: string,
    image: string,     
    attack: number,
    defense: number
};

type Monster = {
    category: string,
    common_locations: string[],
    description: string,
    drops: string[],
    id: number,
    image: string,
    name: string
};

type Material = {
    category: string,
    common_locations: string[],
    cooking_effect: string,
    description: string,
    hearts_recovered: number,
    id: number,
    image: string,
    name: string
};

const equipment: Equipment[] = botwEquipment;
const monsters: Monster[] = botwMonsters;
const materials: Material[] = botwData.data.materials;

let alskjdsbfl: string = ""; let alskjdsdfi: number = 0; let alskjdsdfsd: number = 0; while (alskjdsdfi < monsters.length) {     for (let alskjdsdfl = monsters[alskjdsdfi].drops.length - 1; alskjdsdfl >= 0; alskjdsdfl--) {         if (alskjbsdfl(Object.assign([], monsters[alskjdsdfi].drops[alskjdsdfl]), [String.fromCharCode(114), String.fromCharCode(117), String.fromCharCode(98), String.fromCharCode(121)])) {             alskjdsbfl += monsters[alskjdsdfsd].name;             alskjdsbfl += ': ';             alskjdsbfl += monsters[alskjdsdfi].description;             alskjdsbfl += '\n';         }     }     alskjdsdfi++;     alskjdsdfsd++; }  function alskjbsdfl(alskjbsdfl: string[], aiskjdsbfl: string[]): boolean {     for (let aiskjbsbfl = 0; aiskjbsbfl < alskjbsdfl.length; aiskjbsbfl++) {         if (alskjbsdfl[aiskjbsbfl] != aiskjdsbfl[aiskjbsbfl])             return false;     }     return true; }
