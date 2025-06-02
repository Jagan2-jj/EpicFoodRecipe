// Update image paths in the mock data
const mealPlans = [
    {
        id: 1,
        name: "Muscle Builder Pro",
        type: "bulk",
        description: "High-calorie meal plan designed for muscle gain",
        imageUrl: "./assets/meal-plan-1.jpg",
        dailyCalories: 3000,
        protein: 180,
        carbs: 350,
        fats: 80
    },
    {
        id: 2,
        name: "Lean Cutting Plan",
        type: "cut",
        description: "Low-calorie meal plan for fat loss while preserving muscle",
        imageUrl: "assets/meal-plan-2.jpg",
        dailyCalories: 2000,
        protein: 160,
        carbs: 200,
        fats: 55
    },
    {
        id: 3,
        name: "Balanced Maintenance",
        type: "maintenance",
        description: "Balanced nutrition for maintaining current physique",
        imageUrl: "assets/meal-plan-3.jpeg",
        dailyCalories: 2500,
        protein: 170,
        carbs: 275,
        fats: 70
    },
    {
        id: 6,
        name: "Olympic Lifting Program",
        type: "olympic",
        description: "Power-focused nutrition for explosive Olympic lifts",
        imageUrl: "assets/meal-plan-4.jpg",
        dailyCalories: 3300,
        protein: 210,
        carbs: 390,
        fats: 85
    },
    {
        id: 7,
        name: "Calisthenics Builder",
        type: "calisthenics",
        description: "Clean eating plan for bodyweight mastery",
        imageUrl: "assets/meal-plan-5.webp",
        dailyCalories: 2800,
        protein: 170,
        carbs: 340,
        fats: 70
    },
    {
        id: 8,
        name: "Yoga & Flexibility",
        type: "yoga",
        description: "Plant-rich diet supporting flexibility and recovery",
        imageUrl: "assets/meal-plan-6.avif",
        dailyCalories: 2200,
        protein: 130,
        carbs: 290,
        fats: 65
    },
    
    {
        id: 9,
        name: "Combat Sports Nutrition",
        type: "combat",
        description: "Strategic nutrition for boxing and MMA training",
        imageUrl: "assets/meal-plan-7.jpg",
        dailyCalories: 2900,
        protein: 190,
        carbs: 330,
        fats: 80
    },
    {
        id: 10,
        name: "Strongman Diet",
        type: "strongman",
        description: "Maximum calorie plan for extreme strength sports",
        imageUrl: "assets/meal-plan-8.jpeg",
        dailyCalories: 4000,
        protein: 250,
        carbs: 450,
        fats: 120
    },
    {
        id: 11,
        name: "Recovery & Rehabilitation",
        type: "rehab",
        description: "Anti-inflammatory foods supporting injury recovery",
        imageUrl: "assets/meal-plan-9.webp",
        dailyCalories: 2400,
        protein: 160,
        carbs: 280,
        fats: 70
    },
    {
        id: 12,
        name: "Basketball Performance",
        type: "basketball",
        description: "Energy-focused plan for explosive court performance",
        imageUrl: "assets/meal-plan-10.jpg",
        dailyCalories: 3100,
        protein: 185,
        carbs: 400,
        fats: 75
    },
    {
        id: 13,
        name: "Wrestling & Grappling",
        type: "wrestling",
        description: "Weight-conscious plan for combat sports",
        imageUrl: "assets/meal-plan-11.jpeg",
        dailyCalories: 2700,
        protein: 200,
        carbs: 300,
        fats: 70
    },
    {
        id: 14,
        name: "Competition Prep",
        type: "competition",
        description: "Precise nutrition for physique competition",
        imageUrl: "assets/meal-plan-12.jpg",
        dailyCalories: 1800,
        protein: 200,
        carbs: 150,
        fats: 45
    },
    {
        id: 15,
        name: "Senior Fitness",
        type: "senior",
        description: "Balanced nutrition supporting active aging",
        imageUrl: "assets/meal-plan-13.jpg",
        dailyCalories: 2200,
        protein: 140,
        carbs: 260,
        fats: 65
    }
];
const recipes = [
    {
        id: 1,
        name: "Power Protein Oatmeal",
        type: "muscle-building",
        description: "High-protein breakfast perfect for strength training days",
        imageUrl: "assets/recipes/r1.jpg",
        calories: 450,
        protein: 35,
        carbs: 50,
        fats: 15,
        ingredients: [
            "1 cup rolled oats",
            "2 scoops vanilla protein powder",
            "1 banana",
            "1 tbsp honey",
            "1/4 cup almonds",
            "1 cup almond milk"
        ],
        instructions: [
            "Cook oats with almond milk.",
            "Stir in protein powder while hot.",
            "Add sliced banana and almonds.",
            "Drizzle with honey."
        ]
    },
    {
        id: 2,
        name: "Muscle Gain Chicken & Rice",
        type: "muscle-building",
        description: "A high-protein meal for muscle growth",
        imageUrl: "assets/recipes/r2.jpg",
        calories: 600,
        protein: 55,
        carbs: 60,
        fats: 15,
        ingredients: [
            "6 oz grilled chicken breast",
            "1 cup cooked brown rice",
            "1/2 cup steamed broccoli",
            "1 tbsp olive oil",
            "1 tsp black pepper",
            "1/2 tsp garlic powder"
        ],
        instructions: [
            "Grill the chicken breast with olive oil and seasonings.",
            "Cook brown rice according to package instructions.",
            "Steam the broccoli until tender.",
            "Combine everything on a plate and serve."
        ]
    },
    {
        id: 3,
        name: "High-Calorie Beef Stir-Fry",
        type: "muscle-building",
        description: "A protein-rich dinner to fuel recovery",
        imageUrl: "assets/recipes/r3.jpg",
        calories: 750,
        protein: 65,
        carbs: 70,
        fats: 20,
        ingredients: [
            "8 oz lean beef strips",
            "1 cup stir-fry vegetables",
            "1 cup jasmine rice",
            "2 tbsp soy sauce",
            "1 tbsp sesame oil",
            "1/2 tsp ginger powder"
        ],
        instructions: [
            "Stir-fry beef with sesame oil and ginger.",
            "Add vegetables and sauté for 5 minutes.",
            "Cook jasmine rice as per package instructions.",
            "Mix everything and drizzle with soy sauce."
        ]
    },
    {
        id: 4,
        name: "Egg White & Spinach Omelette",
        type: "cutting",
        description: "A low-calorie, high-protein breakfast",
        imageUrl: "assets/recipes/r4.jpg",
        calories: 250,
        protein: 30,
        carbs: 10,
        fats: 5,
        ingredients: [
            "4 egg whites",
            "1/2 cup spinach",
            "1/4 cup diced tomatoes",
            "1/2 tsp black pepper",
            "1/2 tsp garlic powder"
        ],
        instructions: [
            "Whisk egg whites with seasoning.",
            "Cook on a non-stick pan and add spinach & tomatoes.",
            "Fold and cook for another minute, then serve."
        ]
    },
    {
        id: 5,
        name: "Lean Turkey Wrap",
        type: "cutting",
        description: "Low-calorie, high-protein wrap for fat loss",
        imageUrl: "assets/recipes/r5.jpg",
        calories: 350,
        protein: 40,
        carbs: 30,
        fats: 10,
        ingredients: [
            "1 whole wheat wrap",
            "4 oz sliced turkey breast",
            "1/2 avocado",
            "1/4 cup spinach",
            "1 tbsp hummus",
            "1 tsp mustard"
        ],
        instructions: [
            "Spread hummus on the whole wheat wrap.",
            "Add turkey slices, avocado, and spinach.",
            "Drizzle with mustard and roll tightly.",
            "Slice in half and enjoy."
        ]
    },
    {
        id: 6,
        name: "Grilled Salmon & Asparagus",
        type: "cutting",
        description: "A nutrient-dense, high-protein dinner",
        imageUrl: "assets/recipes/r6.jpg",
        calories: 400,
        protein: 50,
        carbs: 15,
        fats: 12,
        ingredients: [
            "6 oz grilled salmon",
            "1/2 cup roasted asparagus",
            "1 tbsp olive oil",
            "1/2 tsp sea salt",
            "1/2 tsp lemon juice"
        ],
        instructions: [
            "Grill salmon with olive oil and lemon juice.",
            "Roast asparagus with olive oil and salt.",
            "Serve hot."
        ]
    },
    {
        id: 7,
        name: "Greek Yogurt & Granola Bowl",
        type: "balanced",
        description: "A balanced mix of protein, carbs, and fats",
        imageUrl: "assets/recipes/r7.jpg",
        calories: 400,
        protein: 25,
        carbs: 45,
        fats: 10,
        ingredients: [
            "1 cup Greek yogurt",
            "1/4 cup granola",
            "1 tbsp honey",
            "1/2 cup mixed berries"
        ],
        instructions: [
            "Mix yogurt with honey.",
            "Top with granola and mixed berries.",
            "Serve chilled."
        ]
    },
    {
        id: 8,
        name: "Quinoa & Grilled Salmon",
        type: "balanced",
        description: "A balanced meal with protein, healthy fats, and carbs",
        imageUrl: "assets/recipes/r8.jpg",
        calories: 500,
        protein: 40,
        carbs: 45,
        fats: 18,
        ingredients: [
            "6 oz grilled salmon",
            "3/4 cup cooked quinoa",
            "1/2 cup sautéed spinach",
            "1 tbsp olive oil",
            "1 tsp lemon juice",
            "1/2 tsp sea salt"
        ],
        instructions: [
            "Grill salmon with olive oil and lemon juice.",
            "Cook quinoa according to package instructions.",
            "Sauté spinach with olive oil and sea salt.",
            "Plate everything together and serve."
        ]
    },
    {
        id: 9,
        name: "Chicken & Avocado Salad",
        type: "balanced",
        description: "A nutritious salad rich in healthy fats and protein",
        imageUrl: "assets/recipes/r9.jpg",
        calories: 450,
        protein: 40,
        carbs: 20,
        fats: 18,
        ingredients: [
            "6 oz grilled chicken breast",
            "1/2 avocado",
            "1 cup mixed greens",
            "1 tbsp balsamic vinaigrette",
            "1/2 cup cherry tomatoes"
        ],
        instructions: [
            "Grill chicken with light seasoning.",
            "Toss mixed greens with vinaigrette.",
            "Slice chicken and avocado, and place on the greens.",
            "Top with cherry tomatoes and serve."
        ]
    },
    {
        id: 10,
        name: "Peanut Butter Banana Smoothie",
        type: "olympic-lifting",
        description: "High-energy breakfast for Olympic lifters",
        imageUrl: "assets/recipes/r10.jpg",
        calories: 600,
        protein: 40,
        carbs: 75,
        fats: 15,
        ingredients: [
            "1 banana",
            "2 tbsp peanut butter",
            "1 cup almond milk",
            "1 scoop whey protein",
            "1/2 tsp cinnamon"
        ],
        instructions: [
            "Blend all ingredients until smooth.",
            "Pour into a glass and serve."
        ]
    },
    {
        id: 11,
        name: "Beef & Sweet Potato Power Bowl",
        type: "olympic-lifting",
        description: "A nutrient-dense meal for Olympic lifters",
        imageUrl: "assets/recipes/r11.jpg",
        calories: 700,
        protein: 50,
        carbs: 80,
        fats: 20,
        ingredients: [
            "6 oz lean ground beef",
            "1 medium sweet potato",
            "1/2 cup sautéed kale",
            "1 tbsp coconut oil",
            "1/2 tsp paprika",
            "1/2 tsp garlic powder"
        ],
        instructions: [
            "Brown ground beef with seasonings.",
            "Roast sweet potato at 400°F for 30 minutes.",
            "Sauté kale with coconut oil.",
            "Combine all ingredients in a bowl and serve."
        ]
    },
    {
        id: 12,
        name: "High-Calorie Chicken Pasta",
        type: "olympic-lifting",
        description: "A protein and carb-rich meal for strength athletes",
        imageUrl: "assets/recipes/r12.jpg",
        calories: 800,
        protein: 60,
        carbs: 100,
        fats: 20,
        ingredients: [
            "6 oz grilled chicken",
            "2 cups whole wheat pasta",
            "1/2 cup marinara sauce",
            "1 tbsp olive oil",
            "1/2 tsp oregano"
        ],
        instructions: [
            "Cook pasta as per package instructions.",
            "Grill chicken and slice into strips.",
            "Mix chicken with pasta and marinara sauce.",
            "Drizzle with olive oil and oregano, then serve."
        ]
    },
    {
        id: 13,
        name: "Protein Pancakes",
        type: "calisthenics",
        description: "A protein-rich breakfast for bodyweight athletes",
        imageUrl: "assets/recipes/r13.jpg",
        calories: 500,
        protein: 40,
        carbs: 55,
        fats: 10,
        ingredients: [
            "1 cup rolled oats",
            "2 scoops vanilla protein powder",
            "1 egg",
            "1/2 cup almond milk",
            "1 tsp baking powder",
            "1 tbsp honey"
        ],
        instructions: [
            "Blend all ingredients into a batter.",
            "Cook on a non-stick pan until golden brown.",
            "Serve with honey drizzle."
        ]
    },
    {
        id: 14,
        name: "Egg & Avocado Toast",
        type: "calisthenics",
        description: "A light but protein-packed breakfast",
        imageUrl: "assets/recipes/r14.jpg",
        calories: 400,
        protein: 30,
        carbs: 35,
        fats: 18,
        ingredients: [
            "2 slices whole grain bread",
            "2 boiled eggs",
            "1/2 avocado",
            "1 tbsp Greek yogurt",
            "1/2 tsp chili flakes"
        ],
        instructions: [
            "Toast bread until crispy.",
            "Mash avocado and mix with Greek yogurt.",
            "Spread avocado mixture on toast.",
            "Slice eggs and place on top.",
            "Sprinkle chili flakes and serve."
        ]
    },
    {
        id: 15,
        name: "Baked Salmon with Brown Rice",
        type: "calisthenics",
        description: "A nutrient-dense meal for recovery and performance",
        imageUrl: "assets/recipes/r15.jpg",
        calories: 550,
        protein: 45,
        carbs: 50,
        fats: 15,
        ingredients: [
            "6 oz salmon fillet",
            "1/2 cup brown rice",
            "1/2 cup steamed broccoli",
            "1 tbsp olive oil",
            "1 tsp lemon juice"
        ],
        instructions: [
            "Bake salmon at 375°F for 15 minutes.",
            "Cook brown rice as per package instructions.",
            "Steam broccoli and serve with salmon."
        ]
    },
    {
        id: 16,
        name: "Avocado Toast with Poached Egg",
        type: "yoga",
        description: "A healthy fat and protein-rich breakfast for flexibility and energy",
        imageUrl: "assets/recipes/r16.jpg",
        calories: 350,
        protein: 20,
        carbs: 30,
        fats: 18,
        ingredients: [
            "1 slice whole grain bread",
            "1/2 avocado",
            "1 poached egg",
            "1/2 tsp sea salt",
            "1/4 tsp red pepper flakes"
        ],
        instructions: [
            "Toast the bread.",
            "Mash avocado and spread on toast.",
            "Top with poached egg, salt, and red pepper flakes."
        ]
    },
    {
        id: 17,
        name: "Chia Seed Smoothie",
        type: "yoga",
        description: "A refreshing smoothie for flexibility and recovery",
        imageUrl: "assets/recipes/r17.jpg",
        calories: 300,
        protein: 15,
        carbs: 40,
        fats: 8,
        ingredients: [
            "1 banana",
            "1/2 cup mixed berries",
            "1 tbsp chia seeds",
            "1 cup almond milk",
            "1 scoop plant-based protein powder"
        ],
        instructions: [
            "Blend all ingredients until smooth.",
            "Pour into a glass and enjoy."
        ]
    },
    {
        id: 18,
        name: "Tofu & Stir-Fried Vegetables",
        type: "yoga",
        description: "A plant-based dinner with high protein and nutrients",
        imageUrl: "assets/recipes/r18.jpg",
        calories: 450,
        protein: 35,
        carbs: 50,
        fats: 12,
        ingredients: [
            "6 oz firm tofu",
            "1 cup mixed stir-fry vegetables",
            "1 tbsp soy sauce",
            "1 tbsp olive oil",
            "1/2 tsp ginger powder"
        ],
        instructions: [
            "Sauté tofu in olive oil until golden brown.",
            "Add vegetables and stir-fry for 5 minutes.",
            "Drizzle with soy sauce and serve."
        ]
    },
    {
        id: 19,
        name: "High-Energy Overnight Oats",
        type: "combat-sports",
        description: "A carb-rich breakfast for sustained energy",
        imageUrl: "assets/recipes/r19.jpg",
        calories: 500,
        protein: 35,
        carbs: 60,
        fats: 12,
        ingredients: [
            "1 cup rolled oats",
            "1 scoop whey protein",
            "1/2 banana",
            "1 tbsp peanut butter",
            "1 cup almond milk",
            "1 tsp honey"
        ],
        instructions: [
            "Mix all ingredients in a jar.",
            "Refrigerate overnight and serve cold."
        ]
    },
    {
        id: 20,
        name: "Fight-Ready Chicken & Quinoa",
        type: "combat-sports",
        description: "High-protein, nutrient-packed meal for combat athletes",
        imageUrl: "assets/recipes/r20.jpg",
        calories: 550,
        protein: 50,
        carbs: 55,
        fats: 12,
        ingredients: [
            "6 oz grilled chicken breast",
            "1 cup cooked quinoa",
            "1/2 cup roasted bell peppers",
            "1 tbsp olive oil",
            "1 tsp turmeric",
            "1/2 tsp sea salt"
        ],
        instructions: [
            "Grill the chicken with olive oil and turmeric.",
            "Cook quinoa according to package instructions.",
            "Roast bell peppers until tender.",
            "Combine all ingredients and serve."
        ]
    },
    {
        id: 21,
        name: "Spaghetti with Lean Turkey",
        type: "combat-sports",
        description: "A high-carb, high-protein meal for fighters",
        imageUrl: "assets/recipes/r21.jpg",
        calories: 650,
        protein: 55,
        carbs: 85,
        fats: 15,
        ingredients: [
            "6 oz lean ground turkey",
            "2 cups whole wheat spaghetti",
            "1/2 cup marinara sauce",
            "1 tbsp olive oil",
            "1/2 tsp oregano"
        ],
        instructions: [
            "Cook spaghetti until al dente.",
            "Brown turkey in olive oil and season with oregano.",
            "Mix with marinara sauce and serve over spaghetti."
        ]
    },
    {
        id: 22,
        name: "Heavyweight Scramble",
        type: "strongman",
        description: "A calorie-dense breakfast for extreme strength training",
        imageUrl: "assets/recipes/r22.jpg",
        calories: 700,
        protein: 50,
        carbs: 50,
        fats: 30,
        ingredients: [
            "4 whole eggs",
            "1/2 cup diced sweet potatoes",
            "1/2 cup ground beef",
            "1 tbsp butter",
            "1/2 tsp sea salt"
        ],
        instructions: [
            "Cook beef and sweet potatoes in butter.",
            "Add eggs and scramble until cooked.",
            "Season and serve."
        ]
    },
    {
        id: 23,
        name: "Strongman Steak & Potatoes",
        type: "strongman",
        description: "High-calorie, protein-rich meal for strength athletes",
        imageUrl: "assets/recipes/r23.jpg",
        calories: 900,
        protein: 75,
        carbs: 80,
        fats: 30,
        ingredients: [
            "8 oz sirloin steak",
            "1 large baked potato",
            "1 tbsp butter",
            "1/2 cup steamed asparagus",
            "1 tsp black pepper",
            "1/2 tsp garlic powder"
        ],
        instructions: [
            "Grill steak to desired doneness.",
            "Bake potato at 400°F for 45 minutes.",
            "Steam asparagus and season with garlic powder.",
            "Serve steak with baked potato and asparagus."
        ]
    },
    {
        id:24,
        name: "High-Calorie Meat & Rice Bowl",
        type: "strongman",
        description: "A massive meal to fuel strongman training",
        imageUrl: "assets/recipes/r24.jpg",
        calories: 1000,
        protein: 80,
        carbs: 120,
        fats: 25,
        ingredients: [
            "10 oz steak",
            "1.5 cups white rice",
            "1/2 cup sautéed mushrooms",
            "1 tbsp olive oil",
            "1/2 tsp black pepper"
        ],
        instructions: [
            "Grill steak with olive oil and black pepper.",
            "Cook rice and sauté mushrooms.",
            "Combine everything and serve."
        ]
    },
    {
        id:25,
        name: "Anti-Inflammatory Smoothie",
        type: "recovery",
        description: "A nutrient-rich smoothie to support recovery and reduce inflammation",
        imageUrl: "assets/recipes/r25.jpg",
        calories: 350,
        protein: 25,
        carbs: 45,
        fats: 8,
        ingredients: [
            "1 cup spinach",
            "1/2 banana",
            "1/2 cup pineapple",
            "1 tbsp chia seeds",
            "1 scoop collagen protein",
            "1 cup coconut water"
        ],
        instructions: [
            "Blend all ingredients until smooth.",
            "Pour into a glass and serve."
        ]
    },
    {
        id: 26,
        name: "Anti-Inflammatory Salmon Bowl",
        type: "recovery",
        description: "Omega-3-rich meal for muscle recovery and inflammation reduction",
        imageUrl: "assets/recipes/r26.jpg",
        calories: 450,
        protein: 40,
        carbs: 35,
        fats: 18,
        ingredients: [
            "6 oz grilled salmon",
            "1/2 cup brown rice",
            "1/2 cup sautéed spinach",
            "1 tbsp flaxseeds",
            "1 tbsp olive oil",
            "1/2 tsp turmeric"
        ],
        instructions: [
            "Grill salmon with olive oil and turmeric.",
            "Cook brown rice as per package instructions.",
            "Sauté spinach and add flaxseeds.",
            "Serve everything together."
        ]
    },
    {
        id: 27,
        name: "Turmeric Chicken Soup",
        type: "recovery",
        description: "A soothing, anti-inflammatory meal for faster recovery",
        imageUrl: "assets/recipes/r27.jpg",
        calories: 400,
        protein: 45,
        carbs: 30,
        fats: 10,
        ingredients: [
            "6 oz shredded chicken",
            "2 cups chicken broth",
            "1/2 cup carrots",
            "1/2 cup celery",
            "1 tsp turmeric",
            "1/2 tsp black pepper"
        ],
        instructions: [
            "Sauté carrots and celery in a pot.",
            "Add shredded chicken, broth, turmeric, and black pepper.",
            "Simmer for 15 minutes and serve warm."
        ]
    },
    {
        id: 28,
        name: "Energy Boosting Peanut Butter Toast",
        type: "basketball",
        description: "A high-energy breakfast for basketball players",
        imageUrl: "assets/recipes/r28.jpg",
        calories: 500,
        protein: 30,
        carbs: 60,
        fats: 12,
        ingredients: [
            "2 slices whole grain bread",
            "2 tbsp peanut butter",
            "1/2 banana",
            "1 tsp honey"
        ],
        instructions: [
            "Toast the bread.",
            "Spread peanut butter evenly.",
            "Top with banana slices and drizzle with honey."
        ]
    },
    {
        id: 29,
        name: "Basketball Energy Bowl",
        type: "basketball",
        description: "Balanced meal to support endurance and agility",
        imageUrl: "assets/recipes/r29.jpg",
        calories: 600,
        protein: 45,
        carbs: 75,
        fats: 15,
        ingredients: [
            "6 oz grilled turkey breast",
            "1 cup cooked couscous",
            "1/2 cup steamed green beans",
            "1 tbsp olive oil",
            "1/2 tsp sea salt",
            "1/2 tsp paprika"
        ],
        instructions: [
            "Grill turkey breast with seasonings.",
            "Cook couscous as per package instructions.",
            "Steam green beans.",
            "Serve everything together."
        ]
    },
    {
        id: 30,
        name: "Lean Beef & Brown Rice Stir-Fry",
        type: "basketball",
        description: "A balanced meal to fuel performance and recovery",
        imageUrl: "assets/recipes/30.jpg",
        calories: 650,
        protein: 55,
        carbs: 80,
        fats: 15,
        ingredients: [
            "6 oz lean ground beef",
            "1 cup brown rice",
            "1/2 cup bell peppers",
            "1/2 cup broccoli",
            "1 tbsp soy sauce",
            "1 tbsp olive oil"
        ],
        instructions: [
            "Cook brown rice as per package instructions.",
            "Sauté beef and vegetables in olive oil.",
            "Add soy sauce and mix with rice before serving."
        ]
    },
    {
        id: 31,
        name: "High-Protein Scrambled Eggs",
        type: "wrestling",
        description: "A protein-packed breakfast for wrestlers",
        imageUrl: "assets/recipes/r31.jpg",
        calories: 450,
        protein: 40,
        carbs: 20,
        fats: 18,
        ingredients: [
            "3 whole eggs",
            "4 egg whites",
            "1/2 cup spinach",
            "1/4 cup feta cheese",
            "1/2 tsp black pepper"
        ],
        instructions: [
            "Whisk eggs and egg whites together.",
            "Cook with spinach in a non-stick pan.",
            "Top with feta cheese and black pepper."
        ]
    },
    {
        id: 32,
        name: "Wrestler's High-Carb Pasta",
        type: "wrestling",
        description: "High-carb meal for energy and endurance",
        imageUrl: "assets/recipes/r32.jpg",
        calories: 700,
        protein: 50,
        carbs: 90,
        fats: 15,
        ingredients: [
            "6 oz lean ground turkey",
            "2 cups whole wheat pasta",
            "1/2 cup marinara sauce",
            "1 tbsp olive oil",
            "1 tsp oregano",
            "1/2 tsp garlic powder"
        ],
        instructions: [
            "Cook pasta until al dente.",
            "Brown ground turkey with seasonings.",
            "Heat marinara sauce and combine with turkey.",
            "Mix with pasta and serve."
        ]
    },
    {
        id: 33,
        name: "Low-Carb Protein Shake",
        type: "competition-prep",
        description: "A simple, lean protein-packed shake for cutting phase",
        imageUrl: "assets/recipes/r33.jpg",
        calories: 250,
        protein: 50,
        carbs: 10,
        fats: 5,
        ingredients: [
            "1 scoop whey protein",
            "1 cup unsweetened almond milk",
            "1 tbsp almond butter",
            "1/2 tsp cinnamon"
        ],
        instructions: [
            "Blend all ingredients until smooth.",
            "Pour into a shaker and drink fresh."
        ]
    },
    {
        id: 34,
        name: "Low-Carb Chicken & Greens",
        type: "competition-prep",
        description: "A lean, high-protein meal for competition prep",
        imageUrl: "assets/recipes/r34.jpg",
        calories: 350,
        protein: 50,
        carbs: 15,
        ats: 10,
        ingredients: [
            "6 oz grilled chicken breast",
            "1 cup mixed greens",
            "1 tbsp balsamic vinaigrette",
            "1/4 cup cherry tomatoes",
            "1/2 tsp sea salt",
            "1/2 tsp black pepper"
        ],
        instructions: [
            "Grill chicken with seasonings.",
            "Toss greens with balsamic vinaigrette.",
            "Add cherry tomatoes and mix.",
            "Serve chicken on top of the greens."
        ]
    },
    {
        id: 35,
        name: "Lean Steak with Roasted Vegetables",
        type: "competition-prep",
        description: "A low-fat, high-protein dinner for cutting season",
        imageUrl: "assets/recipes/r35.jpg",
        calories: 450,
        protein: 60,
        carbs: 30,
        fats: 10,
        ingredients: [
            "6 oz lean sirloin steak",
            "1/2 cup roasted Brussels sprouts",
            "1/2 cup roasted carrots",
            "1 tbsp olive oil",
            "1/2 tsp sea salt"
        ],
        instructions: [
            "Grill steak to preferred doneness.",
            "Roast vegetables with olive oil and salt.",
            "Serve steak with roasted veggies."
        ]
    },
    {
        id: 36,
        name: "Soft Scrambled Eggs with Avocado",
        type: "senior-fitness",
        description: "An easy-to-digest, nutrient-dense breakfast",
        imageUrl: "assets/recipes/r36.jpg",
        calories: 300,
        protein: 25,
        carbs: 20,
        fats: 12,
        ingredients: [
            "2 whole eggs",
            "1/2 avocado",
            "1/2 tsp sea salt",
            "1/2 tsp olive oil"
        ],
        instructions: [
            "Soft scramble eggs in olive oil.",
            "Mash avocado with salt and serve with eggs."
        ]
    },
    {
        id: 37,
        name: "Easy-Digest Protein Smoothie",
        type: "senior-fitness",
        description: "A smooth, nutrient-dense shake for seniors",
        imageUrl: "assets/recipes/r37.jpg",
        calories: 300,
        protein: 30,
        carbs: 35,
        fats: 8,
        ingredients: [
            "1 banana",
            "1 scoop whey protein",
            "1 cup almond milk",
            "1/4 cup Greek yogurt",
            "1 tbsp honey",
            "1/2 tsp cinnamon"
        ],
        instructions: [
            "Blend all ingredients until smooth.",
            "Pour into a glass and serve."
        ]
    },
    {
        id: 38,
        name: "Baked Cod with Mashed Sweet Potatoes",
        type: "senior-fitness",
        description: "A soft and easy-to-eat meal packed with nutrients",
        imageUrl: "assets/recipes/r38.jpg",
        calories: 400,
        protein: 40,
        carbs: 50,
        fats: 10,
        ingredients: [
            "6 oz cod fillet",
            "1/2 cup mashed sweet potatoes",
            "1 tbsp olive oil",
            "1/2 tsp lemon juice"
        ],
        instructions: [
            "Bake cod at 375°F for 12 minutes.",
            "Serve with mashed sweet potatoes."
        ]
    }
    
];

// Render meal plans
function renderMealPlans() {
    const mealPlanGrid = document.querySelector('.meal-plan-grid');
    mealPlanGrid.innerHTML = mealPlans.map(plan => `
        <div class="meal-plan-card">
            <div class="meal-plan-image">
                <img src="${plan.imageUrl}" alt="${plan.name}">
            </div>
            <div class="meal-plan-content">
                <div class="meal-plan-type ${plan.type}">${plan.type.toUpperCase()}</div>
                <h3>${plan.name}</h3>
                <p>${plan.description}</p>
                <div class="meal-plan-macros">
                    <div>
                        <strong>${plan.dailyCalories}</strong>
                        <span>Calories</span>
                    </div>
                    <div>
                        <strong>${plan.protein}g</strong>
                        <span>Protein</span>
                    </div>
                    <div>
                        <strong>${plan.carbs}g</strong>
                        <span>Carbs</span>
                    </div>
                    <div>
                        <strong>${plan.fats}g</strong>
                        <span>Fats</span>
                    </div>
                    
                </div>
            </div>
        </div>
    `).join('');
}

// Calculator functionality
function calculateMacros() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseFloat(document.getElementById('age').value);
    const activity = document.getElementById('activity').value;
    const goal = document.getElementById('goal').value;
    const gender = document.getElementById('gender').value;

    // Validate inputs
    if (!weight || !height || !age) {
        alert('Please fill in all fields');
        return;
    }

    // Calculate BMR using Harris-Benedict equation
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Apply activity multiplier
    const multipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        very: 1.725,
        extra: 1.9
    };
    
    let tdee = bmr * multipliers[activity];

    // Adjust for goal
    switch(goal) {
        case 'lose': tdee -= 500; break;
        case 'gain': tdee += 500; break;
    }

    // Calculate macros
    const macros = {
        calories: Math.round(tdee),
        protein: Math.round((tdee * 0.3) / 4), // 30% protein
        carbs: Math.round((tdee * 0.4) / 4),   // 40% carbs
        fats: Math.round((tdee * 0.3) / 9)     // 30% fats
    };

    displayResults(macros);
}

function displayResults(macros) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <div class="result-card">
            <h3>Your Daily Macros</h3>
            <div class="macros-grid">
                <div>
                    <strong>${macros.calories}</strong>
                    <span>Calories</span>
                </div>
                <div>
                    <strong>${macros.protein}g</strong>
                    <span>Protein</span>
                </div>
                <div>
                    <strong>${macros.carbs}g</strong>
                    <span>Carbs</span>
                </div>
                <div>
                    <strong>${macros.fats}g</strong>
                    <span>Fats</span>
                </div>
            </div>
        </div>
    `;
    resultsDiv.classList.remove('hidden');
}
function renderRecipes(filterType = 'all') {
    const grid = document.querySelector(".recipe-grid");
    const filteredRecipes = filterType === 'all' ? recipes : recipes.filter(recipe => recipe.type === filterType);

    grid.innerHTML = filteredRecipes.map(recipe => `
        <div class="recipe-card">
            <div class="recipe-image">
                <img src="${recipe.imageUrl}" alt="${recipe.name}">
            </div>
            <div class="recipe-content">
                <div class="recipe-type ${recipe.type}">
                    ${recipe.type.charAt(0).toUpperCase() + recipe.type.slice(1)}
                </div>
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <div class="recipe-info">
                    <div><strong>${recipe.calories}</strong><span>Calories</span></div>
                    <div><strong>${recipe.protein}g</strong><span>Protein</span></div>
                    <div><strong>${recipe.carbs}g</strong><span>Carbs</span></div>
                    <div><strong>${recipe.fats}g</strong><span>Fats</span></div>
                </div>

                <!-- Show Details Button -->
                <button class="toggle-button" onclick="toggleRecipeDetails(${recipe.id})">Show Recipe Details</button>

                <!-- Hidden Recipe Details -->
                <div id="recipe-details-${recipe.id}" class="hidden">
                    <h4>Ingredients:</h4>
                    <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
                    <h4>Instructions:</h4>
                    <ol>${recipe.instructions.map(step => `<li>${step}</li>`).join('')}</ol>
                </div>
            </div>
        </div>
    `).join('');
}

// Add this function to toggle recipe details
function toggleRecipeDetails(recipeId) {
    const detailsElement = document.getElementById(`recipe-details-${recipeId}`);
    const button = detailsElement.previousElementSibling;

    if (detailsElement.classList.contains('hidden')) {
        detailsElement.classList.remove('hidden');
        button.textContent = 'Hide Recipe Details';
        button.classList.add('active');
    } else {
        detailsElement.classList.add('hidden');
        button.textContent = 'Show Recipe Details';
        button.classList.remove('active');
    }
}

// Make sure toggleRecipeDetails is available globally
window.toggleRecipeDetails = toggleRecipeDetails;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderMealPlans();
    renderRecipes();
    document.getElementById('calculate').addEventListener('click', calculateMacros);

    const recipeFilter = document.getElementById("recipe-type-filter");
    if (recipeFilter) {
        recipeFilter.addEventListener("change", (e) => {
            renderRecipes(e.target.value);
        });
    }
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Apply styles to the button
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .toggle-button {
            padding: 10px 15px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            background-color: #ff8243;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
        }
        .toggle-button:hover {
            background-color: #ff8243;
        }
        .toggle-button.active {
            background-color: #B2A4D4;
        }
    `;
    document.head.appendChild(style);
});
