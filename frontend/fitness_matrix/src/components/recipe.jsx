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
      imgSrc: '/path-to-food-image2.jpg',
      altText: 'Another Delicious Food',
      title: 'Tasty Treat',
      description: 'Ingredients: Lorem ipsum dolor sit amet. Recipe: Molestias explicabo corporis voluptatem?',
    },
    {
      imgSrc: '/path-to-food-image3.jpg',
      altText: 'More Delicious Food',
      title: 'Yummy Delight',
      description: 'Ingredients: Lorem ipsum dolor sit amet. Recipe: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel orci quis nulla ultricies volutpat.',
    },
    
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