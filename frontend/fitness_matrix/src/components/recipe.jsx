import React from 'react'

function Recipe() {
  return (
    <div>
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {[
     {
      imgSrc: 'https://images.unsplash.com/photo-1583019107470-5bf8e4a96314?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      altText: 'Delicious Smoothie Bowl',
      title: 'Smoothie Bowl',
      description: 'Ingredients: 2 frozen bananas, 1 cup frozen mixed berries, ½ cup almond milk. Recipe: Blend frozen bananas, berries, and almond milk until smooth and thick. Add granola, fresh fruit, and other toppings.',
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1497445702960-c21c96af4c68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      altText: 'Classic Pancakes',
      title: 'Classic Pancakes',
      description: 'Ingredients: 1 cup flour, 2 tbsp sugar, 1 tsp baking powder, 1 cup milk, 1 egg. Recipe: Mix dry ingredients, whisk in milk and egg, and cook on a greased skillet until golden brown. Serve with syrup or fresh fruit.',
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1464500542410-1396074bf230?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      altText: 'Vegetable Stir Fry',
      title: 'Vegetable Stir Fry',
      description: 'Ingredients: Mixed vegetables (broccoli, carrots, bell peppers), 2 tbsp soy sauce, 1 tsp sesame oil. Recipe: Stir-fry vegetables in sesame oil, add soy sauce, and cook until tender. Serve over rice or noodles.',
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1704545229893-4f1bb5ef16a1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      altText: 'Healthy Avocado Toast',
      title: 'Avocado Toast',
      description: 'Ingredients: 1 ripe avocado, 2 slices whole-grain bread, salt, and pepper. Recipe: Mash avocado, spread on toasted bread, and sprinkle with salt and pepper. Add toppings like cherry tomatoes or eggs if desired.',
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1507281549113-040fcfef650e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      altText: 'Refreshing Lemonade',
      title: 'Lemonade',
      description: 'Ingredients: 4 lemons, 1/2 cup sugar, 4 cups water. Recipe: Squeeze lemons, mix juice with sugar and water, stir until sugar dissolves, and serve chilled.',
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1504388192519-fb4be897c4d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      altText: 'Chocolate Overnight Oats',
      title: 'Overnight Oats',
      description: 'Ingredients: 1/2 cup rolled oats, 1/2 cup milk, 1 tbsp cocoa powder, and a sweetener of choice. Recipe: Mix all ingredients in a jar, refrigerate overnight, and enjoy with toppings like fruits or nuts.',
    }
    
  ].map((recipe, index) => (
    <article
      key={index}
      className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25"
    >
      <img
        src={recipe.imgSrc}
        alt={recipe.altText}
        className="h-56 w-full object-cover"
      />

      <div className="p-4 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {recipe.title}
        </h3>

        <p className="mt-2 text-sm/relaxed text-gray-500 dark:text-gray-400">
          {recipe.description}
        </p>
      </div>
    </article>
  ))}
</div>


    </div>
  )
}

export default Recipe