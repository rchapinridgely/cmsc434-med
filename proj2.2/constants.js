const ing= {sauce:"Sauce",
fries:"Fries",
sourcream:"Sour Cream",
croutons: "Croutons",
caeser: "Caeser",
balsamicvin: "Balsamic Vin",
kale: "Kale",
arugula: "Arugula",
anchovies: "Anchovies",
lettuce: "Lettuce",
quinoa: "quinoa",
tomato: "Tomato",
onion: "Onion",
meat: "Meat",
ranch: "Ranch",
bbq: "BBQ",
buffalo: "Buffalo",
bluechz: "Blue Chz",
puree: "Puree",
aioli: "Aioli",
mayo: "Mayo",
ketchup: "Ketchup",
oldbay: "Old Bay",
bread: "Bread",
cheese: "Cheese",
side: "Side",
allergy: "ALLERGY!",
gluten: "Gluten",
dairy: "Dairy",
nuts: "Nuts",
peanuts: "Peanuts",
shellfish: "Shellfish",
rare: "Rare",
medrare: "MedRare",
medium: "Medium",
medwell: "MedWell",
well: "Well",
blackened: "Blackened",
fried: "Fried",
crispy: "Crispy",
fruit: "Fruit",
greenbeans: "Green Beans",
potato: "Potato",
sweetpotato: "Sweet Potato",
beef: "Beef",
chicken: "Chicken",
cheddar: "Cheddar",
american: "American",
swiss: "Swiss",
salmon: "Salmon",
aujus: "Au Jus",
mushrooms: "Mushrooms",
orange: "Orange",
mustard: "Mustard",
rice: "Rice",
relish: "Relish",
beets: "Beets",
dressing:"Dressing",
pistachios: "Pistachios",
crab: "Crab",
lemonvin: "Lemon Vin",
plantains: "Plantains",
shell: "Shell",
spinach: "Spinach",
split: "Split",
coleslaw: "Coleslaw",
saeurkraut: "Saeurkraut",
zucchini: "Zucchini",
feta: "Feta",
cornedbeef: "Corned Beef",
gravy: "Gravy",
queso: "Queso",
ham: "Ham",
peppers: "Peppers",
chips: "Chips",
egg: "Egg",
fish: "Fish",
salt: "Salt",
homefries: "Homefries",
paprika: "Paprika",
canadianbacon: "Canadian Bacon",
hollendaise: "Hollendaise",
englishmuffin: "English Muffin",
pasta: "Pasta"};


const mealDef= {chickensandwich: "Chicken Sandwich",
hamburger: "Hamburger",
cheeseburger: "Cheeseburger",
baconburger: "Bacon Burger",
baconcheeseburger: "Bacon Cheeseburger",
frenchdip: "French Dip",
hotdog: "Hot Dog",
reuben: "Reuben",
caesersalad: "Caeser Salad",
spinachsalad: "Spinach Salad",
kalesalad: "Kale Salad",
arugulasalad: "Arugula Salad",
mdcrabcakes: "MD Crabcakes",
jerkchicken: "Jerk Chicken",
garganelli: "Garganelli",
tacos: "Tacos",
poutine: "Poutine",
nachos: "Nachos",
westernomelet: "Western Omelet",
deviledeggs: "Deviled Eggs",
eggsbenedict: "Eggs Benedict",
steakfrites: "Steak Frites",
filet: "Filet",
quinoachicken: "Quinoa Chicken",
fettuccinne: "Fettuccine Alfredo",
orangesalmon: "Orange Salmon",
zucchinesalad: "Zucchini Salad",
yellowsnapper: "Yellow Snapper"};

const menuPerLetter = {"a":[mealDef.arugulasalad],"b":[mealDef.baconburger,mealDef.baconcheeseburger],"c":[mealDef.chickensandwich, mealDef.cheeseburger,mealDef.caesersalad],"d":[mealDef.deviledeggs],"e":[mealDef.eggsbenedict],"f":[mealDef.frenchdip,mealDef.filet, mealDef.fettuccinealfredo],"g":[mealDef.garganelli],"h":[mealDef.hamburger,mealDef.hotdog],"j":[mealDef.jerkchicken],"k":[mealDef.kalesalad],"m":[mealDef.mdcrabcakes],"n":[mealDef.nachos],"o":[mealDef.orangesalmon],"p":[mealDef.poutine],"q":[mealDef.quinoachicken],"r":[mealDef.reuben],"s":[mealDef.steakfrites],"t":[mealDef.tacos],"w":[mealDef.westernomelet],"y":[mealDef.yellowsnapper],"z":[mealDef.zucchinisalad]};
const ingPerLetter = {"a":[ing.anchovies,ing.aioli,ing.allergy,ing.american,ing.aujus,ing.arugula], "b":[ing.balsamicvin,ing.bbq,ing.buffalo,ing.bluechz,ing.bread,ing.blackened,ing.beef,ing.beets], "c":[ing.croutons,ing.caeser,ing.cheese,ing.crispy,ing.chicken,ing.cheddar,ing.crab,ing.coleslaw,ing.cornedbeef,ing.chips,ing.canadianbacon], "d":[ing.dairy,ing.dressing], "e":[ing.egg,ing.englishmuffin], "f":[ing.fries,ing.fried,ing.fruit,ing.feta,ing.fish], "g":[ing.gluten,ing.greenbeans,ing.gravy], "h":[ing.ham,ing.homefries,ing.hollendaise], "k":[ing.kale,ing.ketchup], "l":[ing.lettuce,ing.lemonvin], "m":[ing.meat,ing.mayo,ing.medrare,ing.medium,ing.medwell,ing.mushrooms,ing.mustard], "n":[ing.nuts], "o":[ing.onion,ing.oldbay,ing.orange], "p":[ing.puree,ing.peanuts,ing.potato,ing.pistachios,ing.plantains,ing.peppers,ing.paprika,ing.pasta], "q":[ing.queso,ing.quinoa], "r":[ing.ranch,ing.rare,ing.rice,ing.relish], "s":[ing.saeurkraut,ing.spinach,ing.sauce,ing.sourcream,ing.side,ing.shellfish,ing.sweetpotato,ing.swiss,ing.salmon,ing.shell,ing.split,ing.salt], "t":[ing.tomato], "w":[ing.well], "z":[ing.zucchini]};

const menuDef = { "Chicken Sandwich":[[ing.chicken,ing.havarti,ing.bread,ing.aioli,ing.lettuce,ing.bacon,ing.tomato,ing.fries],false, 5],
            "Hamburger": [[ing.beef, ing.bread, ing.lettuce, ing.tomato,ing.onion,ing.pickle,ing.fries], true, 15],
                "Cheeseburger": [[ing.beef, ing.bread, ing.american, ing.lettuce, ing.tomato,ing.onion,ing.pickle,ing.fries], true, 15],
  "Baconburger": [[ing.beef, ing.bread, ing.bacon, ing.lettuce, ing.tomato,ing.onion,ing.pickle,ing.fries], true, 15],
  "Bacon Cheeseburger": [[ing.beef, ing.bread,ing.bacon, ing.american, ing.lettuce, ing.tomato,ing.onion,ing.pickle,ing.fries], true, 15],
  "French Dip": [[ing.beef, ing.bread,ing.onion, ing.swiss, ing.aujus,ing.fries], false, 15],
"Hot Dog": [[ing.beef, ing.bread,ing.relish, ing.mustard, ing.ketchup,ing.fries], false, 15],
"Reuben": [[ing.beef, ing.bread,ing.saeurkraut, ing.dressing, ing.swiss,ing.fries], false, 15],
"Caeser Salad": [[ing.lettuce, ing.croutons,ing.cheese, ing.caeser, ing.anchovies], false, 15],
"Spinach Salad": [[ing.spinach, ing.dressing,ing.tomato, ing.feta], false, 15],
"Kale Salad": [[ing.kale, ing.balsamicvin,ing.onion, ing.tomato], false, 15],
"Arugula Salad": [[ing.arugula, ing.lemonvin,ing.beets, ing.pistachios], false, 15],
"MD Crabcakes": [[ing.crab, ing.bread,ing.mayo, ing.mustard, ing.oldbay,ing.fries,ing.coleslaw], false, 15],
"Jerk Chicken": [[ing.chicken, ing.bbq,ing.plantains], false, 15],
"Garganelli": [[ing.sauce, ing.pasta,ing.sausage, ing.cheese], false, 15],
"Tacos": [[ing.beef, ing.shell,ing.lettuce, ing.cheddar], false, 15],
"Poutine": [[ing.beef, ing.cheddar,ing.fries, ing.gravy], false, 15],
"Nachos": [[ing.queso, ing.chips,ing.salsa], false, 15],
"Western Omelet": [[ing.egg, ing.ham,ing.peppers, ing.peppers, ing.onions,ing.homefries], false, 15],
"Deviled Eggs": [[ing.egg, ing.paprika,ing.mustard], false, 15],
"Eggs Benedict": [[ing.egg, ing.hollendaise,ing.englishmuffin, ing.canadianbacon], false, 15],
"Steak Frites": [[ing.beef, ing.sauce,ing.fries], true, 15],
"Filet": [[ing.beef, ing.spinach,ing.potato, ing.sourcream, ing.bacon,ing.cheddar], true, 15],
"Quinoa Chicken": [[ing.quinoa, ing.chicken,ing.sweetpotato], false, 15],
"Fettuccine Alfredo": [[ing.pasta, ing.sauce,ing.mushrooms], false, 15],
"Orange Salmon": [[ing.salmon, ing.orange,ing.fruit], false, 15],
"Zucchini Salad": [[ing.zucchini, ing.lettuce,ing.dressing], false, 15],
"Yellow Snapper": [[ing.fish, ing.rice,ing.sauce], false, 15]};

const stations = ["Grill", "Salad", "Sautee","Sandwich"];

const prices ={"Chicken Sandwich": 10.99,
"Hamburger": 9.99,
"Cheeseburger": 10.49,
"Bacon Burger": 10.69,
"Bacon Cheeseburger":10.99, 
"French Dip": 12.49,
"Hot Dog": 6.45,
"Reuben": 10.99,
"Caeser Salad": 9.99,
"Spinach Salad": 9.99,
"Kale Salad": 9.99,
"Arugula Salad": 9.99,
"MD Crabcakes": 24.95,
"Jerk Chicken": 14.79,
"Garganelli": 15.65,
"Tacos": 12.45,
"Poutine": 8.95,
"Nachos": 6.99,
"Western Omelet":8.95, 
"Deviled Eggs": 12.99,
"Eggs Benedict": 18.99,
"Steak Frites": 27.95,
"Filet": 34.99,
"Quinoa Chicken":18.99, 
"Fettucinne Alfredo": 16.99,
"Orange Salmon": 16.50,
"Zucchini Salad": 9.99,
"Yellow Snapper":14.45};

const meanStations ={"Chicken Sandwich": ["Grill","Sandwich"],
"Hamburger": ["Grill","Sandwich"],
"Cheeseburger": ["Grill","Sandwich"],
"Bacon Burger": ["Grill","Sandwich"],
"Bacon Cheeseburger":["Grill","Sandwich"], 
"French Dip": ["Sandwich"],
"Hot Dog": ["Grill","Sandwich"],
"Reuben": ["Sandwich"],
"Caeser Salad": ["Salad"],
"Spinach Salad": ["Salad"],
"Kale Salad": ["Salad"],
"Arugula Salad": ["Salad"],
"MD Crabcakes": ["Sautee"],
"Jerk Chicken": ["Sautee"],
"Garganelli": ["Sautee"],
"Tacos": ["Sautee"],
"Poutine": ["Sautee"],
"Nachos": ["Salad"],
"Western Omelet":["Grill"],
"Deviled Eggs": ["Salad"],
"Eggs Benedict": ["Sautee"],
"Steak Frites": ["Grill"],
"Filet": ["Grill"],
"Quinoa Chicken":["Grill"],
"Fettucinne Alfredo": ["Sautee"],
"Orange Salmon": ["Grill","Salad"],
"Zucchini Salad": ["Salad"],
"Yellow Snapper":["Grill"]};
