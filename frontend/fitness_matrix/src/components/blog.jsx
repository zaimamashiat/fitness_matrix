import React from 'react'

const blogPosts = [
  {
    title: "5 Essential Tips for Building a Sustainable Workout Routine",
    date: "2025-01-06",
    imageUrl:
      "https://images.unsplash.com/photo-1591258370814-01609b341790?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Starting a workout routine can be exciting, but keeping it sustainable is the real challenge. Here are five essential tips to help you stay consistent and achieve your fitness goals.",
    content: [
      { heading: "1. Set Clear Goals", text: "Define what you want to achieve—whether it’s losing weight, gaining muscle, or improving endurance. Having clear, measurable goals gives your workouts purpose and direction." },
      { heading: "2. Start Small and Progress Gradually", text: "Avoid the common mistake of doing too much too soon. Begin with manageable sessions and gradually increase the intensity and duration as your fitness improves." },
      { heading: "3. Create a Balanced Routine", text: "Incorporate a mix of cardio, strength training, and flexibility exercises. A well-rounded workout routine ensures you build overall fitness and avoid overworking specific muscle groups." },
      { heading: "4. Stay Consistent", text: "Consistency is key. Schedule your workouts at the same time each day to create a habit. Remember, even a short workout is better than skipping entirely." },
      { heading: "5. Listen to Your Body", text: "Pay attention to your body’s signals. Rest when needed and avoid pushing through pain. Recovery days are just as important as workout days for long-term success." }
    ]
  },
  {
    title: "The Importance of Nutrition for Fitness Goals",
    date: "2025-01-10",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1664476002571-ead0cbfc6d74?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Nutrition plays a critical role in supporting your workout routine. This blog covers essential tips for fueling your body to reach your fitness goals effectively.",
    content: [
      { heading: "1. Understand Your Macros", text: "Balancing proteins, carbs, and fats is key to a successful fitness diet. Make sure your meals support your training goals, whether it's muscle gain or fat loss." },
      { heading: "2. Stay Hydrated", text: "Hydration is crucial for performance. Water helps regulate body temperature, supports digestion, and aids in nutrient absorption." },
      { heading: "3. Eat Before and After Workouts", text: "Consuming the right foods before and after workouts can help maximize performance and speed up recovery." },
      { heading: "4. Avoid Processed Foods", text: "Processed foods often contain empty calories and harmful fats. Stick to whole foods to nourish your body." },
      { heading: "5. Supplement Wisely", text: "Supplements like protein powder or BCAAs can help fill nutritional gaps, but whole foods should always come first." }
    ]
  }
];

function Blog() {
  return (
    <div>
      {blogPosts.map((post, index) => (
        <article key={index} className="flex bg-white transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25 mb-8">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              datetime={post.date}
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
            >
              <span>{new Date(post.date).getFullYear()}</span>
              <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
              <span>{new Date(post.date).toLocaleString('default', { month: 'short', day: 'numeric' })}</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-56">
            <img
              alt="Workout Blog"
              src={post.imageUrl}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10">
              <h3 className="font-bold uppercase text-gray-900 dark:text-white">{post.title}</h3>
              <p className="mt-2 text-sm/relaxed text-gray-700 dark:text-gray-200">{post.description}</p>

              {post.content.map((section, idx) => (
                <div key={idx}>
                  <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">{section.heading}</h4>
                  <p className="text-sm/relaxed text-gray-700 dark:text-gray-200">{section.text}</p>
                </div>
              ))}
              
              <p className="mt-4 text-sm/relaxed text-gray-700 dark:text-gray-200">
                By following these tips, you can create a workout routine that is both effective and sustainable, helping you stay active and healthy in the long run.
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Blog;
