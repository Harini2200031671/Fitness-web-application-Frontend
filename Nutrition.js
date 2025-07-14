import React, { useState } from "react";

// Sample Diet Plan Images + Recipes
const dietPlans = [
  {
    name: "Ots Bowl",
    image: "/HL.png",
    recipe: {
      title: "🥣 Healthy Breakfast Bowl",
      ingredients: ["🍌 Banana", "🍓 Strawberries", "🥣 Oats", "🥛 Almond Milk", "🍯 Honey"],
      steps: [
        "1️⃣ Mix oats and almond milk in a bowl.",
        "2️⃣ Add sliced banana and strawberries.",
        "3️⃣ Drizzle honey on top.",
        "4️⃣ Enjoy your healthy breakfast!",
      ],
      
    }
  },
  {
    name: "Cucumber Salad",
    image: "/lw.png",
    recipe: {
      title: "🥗 Lose Weight Salad",
      ingredients: ["🥬 Lettuce", "🍅 Tomatoes", "🥒 Cucumbers", "🫒 Olives", "🍋 Lemon Juice"],
      steps: [
        " Chop all vegetables.",
        " Mix in a bowl.",
        " Squeeze lemon juice on top.",
        " Toss well and serve."
      ],
      video: "/videos/healthy.mp4"
    }
  },
  {
    name: "Protein-Packed Dinner",
    image: "/pp.jpg",
    recipe: {
      title: "🍽️ Protein-Packed Dinner",
      ingredients: ["🥩 Grilled Chicken", "🍚 Brown Rice", "🥦 Broccoli", "🧄 Garlic"],
      steps: [
        "Grill chicken with garlic seasoning.",
        " Steam the broccoli.",
        " Serve with cooked brown rice.",
        " Balanced and packed with protein!"
      ]
    }
  },
   {
    name: "Chicken salad",
    image:"/cc.jpg",
    recipe: {
      title: "Delicious and easy salad recipe 340 calories (1 serving)",
      ingredients: [" 🥩4 oz chicken breast","1 tsp olive oil","1/4 tsp paprika","1/4 tsp cumin","1/4 tsp dried oregano","salt and black pepper","2 leaves romaine lettuce","7 cherry tomatoes","1/4 medium cucumber","1/4 medium yellow onion","1 tbsp parsley","1/2 tbsp tahini","1/2 tbsp water","1 tsp lemon juice"],
      steps: [
       " Step1 : Preheat the oven to 350°F (180°C).",
        "step2 : Drizzle the breast witn olive oil and Season both sides with cumin, oregano, paprika, salt and bake in the centre of the oven for 20-25 minutes until cooked through.",
        "step3 : Lay chopped lettuce leaves on plate.",
        "step4 : Place halved cherry tomatoes and chopped cucumber on a plate in a circle as shown in the video, add onion onion strips in the center and top with the breast, and then dress with tahini by combining tahini, water and lemon juice. Serve immediately.",
      ]
    }
   },

 {
  name: " strawberry spinach",
  image:"/sta.jpg",
  recipe: {
    title:" strawberry spinach 170 calories (1 serving)",
    ingredients: ["3 oz spinach","6 strawberries","1/4 medium yellow onion","1/2 feta cheese","4 walnuts halves","1 tsp balsamic vinegar","1 tsp olive oil","1 tsp honey"],
    steps:
    [
      "Lay chopped lettuce spinach on plate. Place strawberries and onion over the spinach and top with feta cheese and chopped walnuts.",
      "In a small pan combine balsamic vinegar, olive oil, honey together and dizzle over the strawberries."
    ]
  }
 },
  {
    name: "vegetables and rice",
    image:"/vv.jpg",
    recipe: {
      title:"vegetables and rice 250 calories (1 serving)",
      ingredients: ["1/2 cup brown, rice cooked","1/4 medium yellow onion","1/4 medium red bell pepper","1/4 medium red bell pepper","1/4 medium cucumber","2 oz artichoke heart","1 tbsp parsley","1/2 tbsp cheese","1 tbsp sliced black olives","1 tsp olive oil","1/2 tbsp white vinegar","salt and black pepper"],
      steps:
      [
        "In a large bowl add the red onion, parsley, black olives, red pepper, cucumber, artichoke hearts and feta cheese and cooked rice. Stir to combine. ",
        "In a small glass bowl, whisk together the olive oil, white vinegar, salt and pepper and pour over the rice and toss well to combine",
           "Can serve immediately. "
      ]
    }
  },

{
    name: "Avocado Toast with Eggs",
    image:"/aa.jpg",
    recipe: {
      title:"vocado Toast with Eggs",
      ingredients: ["1 slice whole-grain bread","1/2 avocado","2 large eggs","Salt and pepper, to taste"],
      steps:
      [
        "Toast the bread. Mash avocado and spread on the toast. ",
        "Fry eggs and place them on top. ",
           "Season with salt and pepper. "
      ]
    }
  },
  {
    name: " Zucchini Noodles with Pesto",
    image:"/nn.jpg",
    recipe: {
      title:" Zucchini Noodles with Pesto",
      ingredients: ["2 medium zucchinis (spiralized into noodles)","2 tbsp pesto sauceo","1/2 cup cherry tomatoes, halved","1 tbsp olive oil"],
      steps:
      [
        "Sauté zucchini noodles in olive oil for 3-4 minutes. ",
        "Toss with pesto sauce and cherry tomatoes.. ",
           
      ]
    }
  },
  {
    name: " Grilled Salmon with Asparagus",
    image:"/gg.jpg",
    recipe: {
      title:" Grilled Salmon with Asparagus",
      ingredients: ["4 oz salmon fillet)","1 tbsp olive oil","1 tbsp lemon juice","1 garlic clove, minced","Salt and pepper, to taste"],
      steps:
      [
        "Grill salmon and asparagus. Drizzle with olive oil, garlic, lemon juice, salt, and pepper. ",
        
           
      ]
    }
  },
  {
    name: " Egg White Omelet with Veggies",
    image:"/ee.jpg",
    recipe: {
      title:" Egg White Omelet with Veggies",
      ingredients: ["Egg whites","spinach","mushrooms","tomatoes","Salt", " pepper"],
      steps:
      [
        "Sauté vegetables. Whisk egg whites and pour over veggies in the pan. ",
        "Cook until set and fold.",
           
      ]
    }
  },
  {
    name: "  Greek Yogurt Parfait",
    image:"/yy.jpg",
    recipe: {
      title:"  Greek Yogurt Parfaits",
      ingredients: ["Greek yogur","berries","chia seeds","honey."],
      steps:
      [
        "Layer Greek yogurt, berries, chia seeds, and drizzle with honey. ",
          ]
    }
  },
  {
    name: "  Chicken and Veggie Skewers",
    image:"/ccc.jpg",
    recipe: {
      title:" Chicken and Veggie Skewers",
      ingredients: ["Chicken breast,","bell peppers"," onions","olive oil","lemon juice","garlic","salt","pepper."],
      steps:
      [
        "Skewer chicken and veggies ",
        "Marinate with olive oil, lemon, garlic, salt, and pepper. ",
        "Grill until cooked through.",
          ]
    }
  },

  {
    name: " Quinoa Salad with Lemon Dressing ",
    image:"/ll1.jpg",
    recipe: {
      title:" Quinoa Salad with Lemon Dressing",
      ingredients: ["1/2 cup cooked quinoa","1/2 cucumber, diced","1/2 cup cherry tomatoes, halved","1/4 red onion, diced","1 tbsp olive oil","1 tbsp lemon juice","2 tbsp chopped parsley","Salt and pepper, to taste"],
      steps:
      [
        "Toss cooked quinoa with chopped veggies and lemon dressing made from olive oil, lemon juice, salt, and pepper."
          ]
    }
  },

  {
    name: " Turkey Lettuce Wraps ",
    image:"/ttt.jpg",
    recipe: {
      title:"Turkey Lettuce Wraps ",
      ingredients: ["1/2 cup ground turkey","3 large lettuce leaves","1/4 avocado, sliced","2 tbsp salsa","1/4 onion, sliced","1 tsp olive oil"],
      steps:
      [
        " Cook ground turkey in olive oil, season with salt and pepper. ",
        "Serve in lettuce leaves with avocado, salsa, and onions."
          ]
    }
  },

  
    {
      "name": "Baked Tilapia with Vegetables",
      "image": "/bbb.jpg",
      "recipe": {
        "title": "Baked Tilapia with Vegetables",
        "ingredients": [
          "1 tilapia fillet (about 4 oz)",
          "1/2 cup broccoli florets",
          "1/2 cup carrots, sliced",
          "1 tbsp olive oil",
          "1 tbsp lemon juice",
          "Salt and pepper, to taste"
        ],
        "steps": [
          "Bake tilapia at 375°F for 15 minutes.",
          "Roast broccoli and carrots with olive oil, salt, and pepper."
        ]
      }
    },
    {
      "name": "Spinach and Mushroom Smoothie",
      "image": "/ss.jpg",
      "recipe": {
        "title": "Spinach and Mushroom Smoothie",
        "ingredients": [
          "1/2 cup spinach",
          "1/4 cup mushrooms",
          "1/2 cup almond milk",
          "1 scoop protein powder",
          "1 tbsp flax seeds"
        ],
        "steps": [
          "Blend all ingredients until smooth."
        ]
      }
    },
    {
      "name": "Chickpea Salad",
      "image": "/chipeka.jpg",
      "recipe": {
        "title": "Chickpea Salad",
        "ingredients": [
          "1 cup canned chickpeas, drained and rinsed",
          "1/2 cucumber, diced",
          "1/4 red onion, diced",
          "1 tbsp olive oil",
          "1 tbsp lemon juice",
          "2 tbsp chopped parsley",
          "Salt and pepper, to taste"
        ],
        "steps": [
          "Toss chickpeas with chopped veggies, olive oil, lemon juice, salt, and pepper."
        ]
      }
    },
    {
      "name": "Baked Avocado Eggs",
      "image": "/baked.jpg",
      "recipe": {
        "title": "Baked Avocado Eggs",
        "ingredients": [
          "1 avocado, halved",
          "2 large eggs",
          "Salt and pepper, to taste"
        ],
        "steps": [
          "Cut avocado in half, remove pit.",
          "Crack an egg into each half.",
          "Bake at 350°F for 12-15 minutes."
        ]
      }
    },
    {
      "name": "Vegetable Soup",
      "image": "/soup.jpg",
      "recipe": {
        "title": "Vegetable Soup",
        "ingredients": [
          "1 carrot, sliced",
          "1 celery stalk, chopped",
          "1 zucchini, chopped",
          "1 can (14.5 oz) diced tomatoes",
          "1 garlic clove, minced",
          "4 cups vegetable broth",
          "Salt and pepper, to taste"
        ],
        "steps": [
          "Sauté garlic and veggies.",
          "Add vegetable broth.",
          "Simmer for 20 minutes and season with salt and pepper."
        ]
      }
    },
    {
      "name": "Grilled Shrimp Salad",
      "image": "/salad.jpg",
      "recipe": {
        "title": "Grilled Shrimp Salad",
        "ingredients": [
          "6 oz shrimp, peeled and deveined",
          "2 cups mixed greens",
          "1/2 cucumber, sliced",
          "1/2 cup cherry tomatoes, halved",
          "1 tbsp olive oil",
          "1 tbsp lemon juice",
          "1 garlic clove, minced"
        ],
        "steps": [
          "Grill shrimp.",
          "Toss with mixed greens, cucumber, tomatoes, olive oil, and lemon juice."
        ]
      }
    },
    {
      "name": "Cauliflower Mash",
      "image": "/flo.jpg",
      "recipe": {
        "title": "Cauliflower Mash",
        "ingredients": [
          "1 small cauliflower, chopped",
          "1 garlic clove, minced",
          "1 tbsp olive oil",
          "Salt and pepper, to taste"
        ],
        "steps": [
          "Steam cauliflower.",
          "Blend with olive oil, garlic, salt, and pepper."
        ]
      }
    },
    {
      "name": "Cabbage Stir-fry",
      "image": "/cla.jpg",
      "recipe": {
        "title": "Cabbage Stir-fry",
        "ingredients": [
          "2 cups shredded cabbage",
          "1 tbsp soy sauce",
          "1 tbsp sesame oil",
          "1 garlic clove, minced",
          "1 tsp ginger, grated"
        ],
        "steps": [
          "Stir-fry cabbage with garlic, ginger, soy sauce, and sesame oil for 5 minutes."
        ]
      }
    },
    {
      "name": "Zucchini Fritters",
      "image": "/zz.jpg",
      "recipe": {
        "title": "Zucchini Fritters",
        "ingredients": [
          "1 medium zucchini, grated",
          "1 large egg",
          "1/4 cup almond flour",
          "1/2 tsp garlic powder",
          "Salt and pepper, to taste"
        ],
        "steps": [
          "Grate zucchini.",
          "Mix with egg, almond flour, and seasoning.",
          "Fry in a pan for 3-4 minutes on each side."
        ]
      }
    },
    
      {
        "name": "Crispy Baked Chicken Tenders",
        "image": "/crispy-chicken.jpg",
        "recipe": {
          "title": "Crispy Baked Chicken Tenders",
          "ingredients": [
            "1 chicken breast (4 oz), cut into strips",
            "1/4 cup whole wheat breadcrumbs",
            "1 tbsp olive oil",
            "1/4 tsp paprika",
            "Salt and pepper, to taste"
          ],
          "steps": [
            "Coat chicken strips in olive oil and breadcrumbs.",
            "Season with paprika, salt, and pepper.",
            "Bake at 400°F for 15-20 minutes until crispy."
          ]
        }
      },
      {
        "name": "Cucumber and Tomato Salad",
        "image": "/cucumber-tomato-salad.jpg",
        "recipe": {
          "title": "Cucumber and Tomato Salad",
          "ingredients": [
            "1 cucumber, sliced",
            "1 cup cherry tomatoes, halved",
            "1 tbsp olive oil",
            "1 tbsp balsamic vinegar",
            "Salt and pepper, to taste"
          ],
          "steps": [
            "Toss cucumber and tomatoes with olive oil and balsamic vinegar.",
            "Season with salt and pepper.",
            "Serve fresh."
          ]
        }
      },
      {
        "name": "Baked Salmon with Lemon",
        "image": "/baked-salmon-lemon.jpg",
        "recipe": {
          "title": "Baked Salmon with Lemon",
          "ingredients": [
            "4 oz salmon fillet",
            "1 tbsp olive oil",
            "1 tbsp lemon juice",
            "1 garlic clove, minced",
            "Salt and pepper, to taste"
          ],
          "steps": [
            "Drizzle olive oil, lemon juice, and minced garlic over salmon.",
            "Season with salt and pepper.",
            "Bake at 375°F for 15-20 minutes."
          ]
        }
      },
      {
        "name": "Eggplant Parmesan (Lightened)",
        "image": "/eggplant-parmesan.jpg",
        "recipe": {
          "title": "Eggplant Parmesan (Lightened)",
          "ingredients": [
            "1 medium eggplant, sliced",
            "1/4 cup whole wheat breadcrumbs",
            "1/4 cup marinara sauce",
            "1 tbsp olive oil",
            "2 tbsp Parmesan cheese",
            "1/4 cup mozzarella cheese"
          ],
          "steps": [
            "Coat eggplant slices in breadcrumbs and olive oil.",
            "Bake at 375°F for 20 minutes.",
            "Top with marinara sauce and cheese, then bake another 10 minutes."
          ]
        }
      },
      {
        "name": "Baked Tofu with Veggies",
        "image": "/baked-tofu-veggies.jpg",
        "recipe": {
          "title": "Baked Tofu with Veggies",
          "ingredients": [
            "1/2 block firm tofu, cubed",
            "1/2 cup broccoli florets",
            "1/2 cup bell pepper, sliced",
            "1 tbsp soy sauce",
            "1 tbsp sesame oil",
            "1 tsp garlic powder"
          ],
          "steps": [
            "Toss tofu and veggies in soy sauce, sesame oil, and garlic powder.",
            "Bake at 375°F for 25 minutes.",
            "Serve warm."
          ]
        }
      },
      {
        "name": "Vegetable Stir-fry",
        "image": "/vegetable-stirfry.jpg",
        "recipe": {
          "title": "Vegetable Stir-fry",
          "ingredients": [
            "1/2 cup bell peppers, sliced",
            "1/2 cup broccoli florets",
            "1/4 cup carrots, julienned",
            "1 tbsp soy sauce",
            "1 tbsp sesame oil",
            "1 tsp ginger, minced"
          ],
          "steps": [
            "Stir-fry vegetables in sesame oil with soy sauce and ginger for 5-7 minutes.",
            "Serve immediately."
          ]
        }
      },
      {
        "name": "Chickpea Curry",
        "image": "/chickpea-curry.jpg",
        "recipe": {
          "title": "Chickpea Curry",
          "ingredients": [
            "1 cup canned chickpeas, drained and rinsed",
            "1/2 cup diced tomatoes",
            "1/4 onion, chopped",
            "1 garlic clove, minced",
            "1 tbsp curry powder",
            "1 tbsp olive oil",
            "1/4 cup light coconut milk"
          ],
          "steps": [
            "Sauté onion and garlic in olive oil.",
            "Add chickpeas, tomatoes, curry powder, and coconut milk.",
            "Simmer for 10 minutes."
          ]
        }
      },
      {
        "name": "Cauliflower and Chickpea Tacos",
        "image": "/cauliflower-chickpea-tacos.jpg",
        "recipe": {
          "title": "Cauliflower and Chickpea Tacos",
          "ingredients": [
            "1 cup cauliflower florets",
            "1/2 cup canned chickpeas, drained and rinsed",
            "1 tbsp olive oil",
            "1 tsp cumin",
            "1 tsp chili powder",
            "2 corn tortillas",
            "Salsa and avocado for topping"
          ],
          "steps": [
            "Toss cauliflower and chickpeas with olive oil and spices.",
            "Roast at 400°F for 20 minutes.",
            "Serve in tortillas with salsa and avocado."
          ]
        }
      },
      {
        "name": "Spaghetti Squash with Marinara Sauce",
        "image": "/spaghetti-squash.jpg",
        "recipe": {
          "title": "Spaghetti Squash with Marinara Sauce",
          "ingredients": [
            "1 small spaghetti squash",
            "1/2 cup marinara sauce (low-sodium)",
            "1 tbsp Parmesan cheese",
            "Salt and pepper, to taste"
          ],
          "steps": [
            "Roast spaghetti squash at 400°F for 40 minutes.",
            "Scrape out strands and top with marinara sauce and Parmesan cheese."
          ]
        }
      },
      {
        "name": "Grilled Shrimp with Veggies",
        "image": "/grilled-shrimp-veggies.jpg",
        "recipe": {
          "title": "Grilled Shrimp with Veggies",
          "ingredients": [
            "4 oz shrimp, peeled and deveined",
            "1/2 zucchini, sliced",
            "1/2 bell pepper, sliced",
            "1 tbsp olive oil",
            "1 tbsp lemon juice",
            "Salt and pepper, to taste"
          ],
          "steps": [
            "Marinate shrimp and veggies in olive oil, lemon juice, salt, and pepper.",
            "Grill for 5-7 minutes.",
            "Serve hot."
          ]
        }
      },
    
        {
          "name": "Lentil Soup",
          "image": "/lentil-soup.jpg",
          "recipe": {
            "title": "Lentil Soup",
            "ingredients": [
              "1/2 cup dry lentils",
              "1 carrot, diced",
              "1 celery stalk, diced",
              "1/2 onion, diced",
              "1 garlic clove, minced",
              "4 cups vegetable broth",
              "Salt and pepper, to taste"
            ],
            "steps": [
              "Sauté onion, carrot, celery, and garlic.",
              "Add lentils and vegetable broth.",
              "Simmer for 30 minutes until lentils are tender."
            ]
          }
        },
        {
          "name": "Salmon and Asparagus Foil Pack",
          "image": "/salmon-asparagus-foil.jpg",
          "recipe": {
            "title": "Salmon and Asparagus Foil Pack",
            "ingredients": [
              "4 oz salmon fillet",
              "1/2 bunch asparagus",
              "1 tbsp olive oil",
              "1 lemon slice",
              "Salt and pepper, to taste"
            ],
            "steps": [
              "Place salmon and asparagus on foil.",
              "Drizzle with olive oil, lemon, salt, and pepper.",
              "Seal foil and bake at 375°F for 20 minutes."
            ]
          }
        },
        
        {
          "name": "Avocado and Black Bean Salad",
          "image": "/avocado-black-bean-salad.jpg",
          "recipe": {
            "title": "Avocado and Black Bean Salad",
            "ingredients": [
              "1/2 avocado, diced",
              "1/2 cup black beans, drained and rinsed",
              "1/2 cup corn kernels",
              "1/4 red onion, diced",
              "1 tbsp cilantro, chopped",
              "1 tbsp lime juice",
              "Salt and pepper, to taste"
            ],
            "steps": [
              "Toss all ingredients together.",
              "Season with salt and pepper.",
              "Serve fresh."
            ]
          }
        },
        {
          "name": "Kale and Quinoa Salad",
          "image": "/kale-quinoa-salad.jpg",
          "recipe": {
            "title": "Kale and Quinoa Salad",
            "ingredients": [
              "1 cup cooked quinoa",
              "1 cup kale, chopped",
              "1/4 cup feta cheese",
              "1 tbsp olive oil",
              "1 tbsp balsamic vinegar",
              "Salt and pepper, to taste"
            ],
            "steps": [
              "Toss quinoa, kale, and feta with olive oil and balsamic vinegar.",
              "Season with salt and pepper.",
              "Serve chilled or at room temperature."
            ]
          }
        },
        {
          "name": "Chicken Zucchini Pasta",
          "image": "/chicken-zucchini-pasta.jpg",
          "recipe": {
            "title": "Chicken Zucchini Pasta",
            "ingredients": [
              "4 oz chicken breast, grilled and sliced",
              "2 zucchinis, spiralized",
              "1/2 cup marinara sauce (low-sodium)",
              "1 tbsp olive oil",
              "1 tbsp Parmesan cheese"
            ],
            "steps": [
              "Sauté zucchini noodles in olive oil for 3-4 minutes.",
              "Top with grilled chicken and marinara sauce.",
              "Sprinkle with Parmesan cheese before serving."
            ]
          }
        },
        {
          "name": "Sweet Potato and Black Bean Bowl",
          "image": "/sweet.jpg",
          "recipe": {
            "title": "Sweet Potato and Black Bean Bowl",
            "ingredients": [
              "1 medium sweet potato, diced",
              "1/2 cup black beans, drained and rinsed",
              "1/4 avocado, diced",
              "1 tbsp olive oil",
              "1 tsp cumin",
              "Salt and pepper, to taste"
            ],
            "steps": [
              "Roast sweet potato at 400°F for 20 minutes.",
              "Toss with black beans, avocado, olive oil, cumin, salt, and pepper.",
              "Serve warm."
            ]
          }
        },
        {
          "name": "Grilled Portobello Mushrooms",
          "image": "/grilled-portobello.jpg",
          "recipe": {
            "title": "Grilled Portobello Mushrooms",
            "ingredients": [
              "2 large portobello mushroom caps",
              "1 tbsp olive oil",
              "1 tbsp balsamic vinegar",
              "Salt and pepper, to taste"
            ],
            "steps": [
              "Brush mushroom caps with olive oil and balsamic vinegar.",
              "Grill for 5-7 minutes on each side.",
              "Serve hot."
            ]
          }
        }
      
];

const Nutrition = () => {
  const [goal, setGoal] = useState("");
  const [preference, setPreference] = useState("");
  const [allergies, setAllergies] = useState("");
  const [meals, setMeals] = useState([]);
  const [groceryList, setGroceryList] = useState([]);
  const [cupsFilled, setCupsFilled] = useState(0);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const generateMealPlan = () => {
    if (!goal) return alert("Please select a goal!");

    const mealData = {
      "Lose Weight": [
        { meal: "Oats with Berries", type: "vegan", time: "Breakfast", items: ["Oats", "Blueberries", "Almond milk"], nutrition: { calories: 250, protein: 6, carbs: 40, fats: 5 } },
        { meal: "Grilled Chicken Salad", type: "non-veg", time: "Lunch", items: ["Chicken breast", "Lettuce", "Tomatoes", "Cucumber"], nutrition: { calories: 350, protein: 30, carbs: 10, fats: 15 } },
        { meal: "Veg Stir Fry", type: "vegetarian", time: "Dinner", items: ["Broccoli", "Carrots", "Tofu", "Soy sauce"], nutrition: { calories: 300, protein: 15, carbs: 20, fats: 12 } },
        { meal: "Fruit & Nut Snack", type: "vegetarian", time: "Snack", items: ["Apple", "Almonds"], nutrition: { calories: 180, protein: 4, carbs: 22, fats: 8 } },
      ],
      "Build Muscle": [
        { meal: "Scrambled Eggs & Toast", type: "vegetarian", time: "Breakfast", items: ["Eggs", "Whole-grain bread", "Avocado"], nutrition: { calories: 400, protein: 20, carbs: 30, fats: 22 } },
        { meal: "Chicken and Quinoa Bowl", type: "non-veg", time: "Lunch", items: ["Chicken", "Quinoa", "Spinach", "Olives"], nutrition: { calories: 450, protein: 35, carbs: 25, fats: 18 } },
        { meal: "Beef Stir Fry", type: "non-veg", time: "Dinner", items: ["Beef", "Bell peppers", "Brown rice", "Onion"], nutrition: { calories: 500, protein: 40, carbs: 30, fats: 22 } },
        { meal: "Protein Shake", type: "vegetarian", time: "Snack", items: ["Protein powder", "Banana", "Milk"], nutrition: { calories: 300, protein: 25, carbs: 15, fats: 8 } },
      ],
      "Stay Fit": [
        { meal: "Smoothie Bowl", type: "vegetarian", time: "Breakfast", items: ["Banana", "Spinach", "Greek yogurt", "Honey"], nutrition: { calories: 280, protein: 10, carbs: 35, fats: 7 } },
        { meal: "Veggie Wrap", type: "vegan", time: "Lunch", items: ["Whole-wheat wrap", "Hummus", "Mixed veggies"], nutrition: { calories: 350, protein: 12, carbs: 28, fats: 10 } },
        { meal: "Grilled Fish & Veggies", type: "non-veg", time: "Dinner", items: ["Fish", "Zucchini", "Carrots", "Lemon"], nutrition: { calories: 400, protein: 35, carbs: 15, fats: 18 } },
        { meal: "Nuts & Fruit", type: "vegetarian", time: "Snack", items: ["Walnuts", "Orange"], nutrition: { calories: 200, protein: 4, carbs: 20, fats: 10 } },
      ]
    };

    let selectedMeals = mealData[goal];

    if (preference) {
      selectedMeals = selectedMeals.filter(m => m.type === preference);
    }

    if (allergies) {
      const allergyList = allergies.toLowerCase().split(',').map(a => a.trim());
      selectedMeals = selectedMeals.filter(m =>
        !m.items.some(item =>
          allergyList.some(allergy => item.toLowerCase().includes(allergy))
        )
      );
    }

    setMeals(selectedMeals);
    const allItems = selectedMeals.flatMap((m) => m.items);
    const uniqueItems = [...new Set(allItems)];
    setGroceryList(uniqueItems);
  };

  const reset = () => {
    setGoal("");
    setPreference("");
    setAllergies("");
    setMeals([]);
    setGroceryList([]);
    setCupsFilled(0);
    setSelectedRecipe(null);
  };

  const toggleCup = (index) => {
    setCupsFilled(index + 1 === cupsFilled ? index : index + 1);
  };

  return (
    <div style={pageStyle}>
    <div style={containerStyle}>
      <h2>🍽️  Meal Planner</h2>
  
      <label>Select your fitness goal:</label>
      <select value={goal} onChange={(e) => setGoal(e.target.value)} style={selectStyle}>
        <option value="">-- Select Goal --</option>
        <option value="Lose Weight">Lose Weight</option>
        <option value="Build Muscle">Build Muscle</option>
        <option value="Stay Fit">Stay Fit</option>
      </select>
  
      <label>Dietary Preference:</label>
      <select value={preference} onChange={(e) => setPreference(e.target.value)} style={selectStyle}>
        <option value="">-- Any --</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="non-veg">Non-Veg</option>
      </select>
  
      <label>Allergies (comma separated):</label>
      <input
        type="text"
        value={allergies}
        onChange={(e) => setAllergies(e.target.value)}
        style={selectStyle}
        placeholder="e.g., nuts, dairy, gluten"
      />
  
      <button onClick={generateMealPlan} style={buttonStyle}>Generate Meal Plan</button>
      <button onClick={reset} style={{ ...buttonStyle, backgroundColor: "#aaa", marginLeft: "10px" }}>Reset</button>
  
      {meals.length > 0 && (
        <div style={sectionStyle}>
          <h3>📋 Meal Plan</h3>
          {['Breakfast', 'Lunch', 'Dinner', 'Snack'].map(mealTime => (
            <div key={mealTime}>
              <h4>{mealTime}</h4>
              {meals.filter(m => m.time === mealTime).map((m, index) => (
                <div key={index} style={mealBoxStyle}>
                  <strong>{m.meal}</strong>
                  <ul>{m.items.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
                  <p>Calories: {m.nutrition.calories} kcal</p>
                  <p>Protein: {m.nutrition.protein}g | Carbs: {m.nutrition.carbs}g | Fats: {m.nutrition.fats}g</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
  
      {groceryList.length > 0 && (
        <div style={sectionStyle}>
          <h3>🛒 Grocery List For Diet Plan</h3>
          <ul style={{ columns: 2 }}>{groceryList.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
        </div>
      )}
  
      <div style={sectionStyle}>
        <h3>🥤 Water Tracker</h3>
        <p>Goal: 2 Liters (8 cups)</p>
        <div style={waterTrackerStyle}>
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              onClick={() => toggleCup(index)}
              style={{
                ...cupStyle,
                backgroundColor: index < cupsFilled ? "#00BFFF" : "#eee"
              }}
            />
          ))}
        </div>
        <p>{cupsFilled * 250} ml / 2000 ml</p>
      </div>
    </div>
  
   
    <div style={imageSectionStyle}>
      <h2>🍱Weight Loss Meal Recipes</h2>
      <div style={imageGridStyle}>
        {dietPlans.map((plan, index) => (
          <div key={index} style={imageCardStyle} onClick={() => setSelectedRecipe(plan.recipe)}>
            <img src={plan.image} alt={plan.name} style={imageStyle} />
            <h4>{plan.name}</h4>
          </div>
        ))}
      </div>
    </div>
  
    {/* Modal */}
    {selectedRecipe && (
      <div style={modalOverlayStyle} onClick={() => setSelectedRecipe(null)}>
        <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
          <h2>{selectedRecipe.title}</h2>
          <h4>Ingredients:</h4>
          <ul>{selectedRecipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}</ul>
          <h4>Steps:</h4>
          <ol>{selectedRecipe.steps.map((step, i) => <li key={i}>{step}</li>)}</ol>
  
          {selectedRecipe.videoUrl && (
            <div style={{ marginTop: "20px" }}>
              <iframe
                width="100%"
                height="300"
                src={selectedRecipe.videoUrl}
                title={selectedRecipe.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
  
          <button onClick={() => setSelectedRecipe(null)} style={buttonStyle}>Close</button>
        </div>
      </div>
    )}
  </div>
  
  );
};

const pageStyle = {
  backgroundImage: "url('/meal back.jpg')", 
  backgroundPosition: "center",
  minHeight: "100vh",
  padding: "20px"
};


const containerStyle = {
  padding: "30px",
  fontFamily: "Arial",
  background: "rgb(241, 160, 196)",
  borderRadius: "10px",
  maxWidth: "800px",
  margin: "auto",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)", 
  border: "1px solid rgba(255, 255, 255, 0.18)",
  marginTop: "20px",
   backgroundImage: "url('/mealbox.png')",
   backgroundSize: "cover",
   backgroundRepeat: "no-repeat",
};

const selectStyle = {
  padding: "10px",
  margin: "10px 0",
  width: "100%",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "rgb(0, 0, 0)",
  color: "rgb(243, 234, 238)",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

const sectionStyle = { marginTop: "30px" };

const mealBoxStyle = {
  background: "rgb(219, 160, 187)",
  borderRadius: "8px",
  padding: "15px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  marginBottom: "15px"
};

const waterTrackerStyle = {
  display: "flex",
  gap: "10px",
  margin: "10px 0"
};

const cupStyle = {
  width: "40px",
  height: "80px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  cursor: "pointer",
  transition: "background 0.3s"
};

const imageSectionStyle = {
  margin: "40px auto",
  padding: "20px",
  maxWidth: "1000px",
  fontFamily: "Arial"
};

const imageGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "20px"
};

const imageCardStyle = {
  background: "#f8f8f8",
  padding: "10px",
  borderRadius: "10px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  textAlign: "center"
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "8px"
};

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(237, 224, 224, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 999
};

const modalContentStyle = {
  background: "#fff",
  padding: "30px",
  borderRadius: "10px",
  width: "90%",
  maxWidth: "600px",
  maxHeight: "80vh",
  overflowY: "auto",
  boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
};


export default Nutrition;
