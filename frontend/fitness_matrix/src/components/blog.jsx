import React from 'react'

function Blog() {
  return (
    <div><article className="flex bg-white transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25">
    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
      <time
        datetime="2025-01-06"
        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
      >
        <span>2025</span>
        <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
        <span>Jan 06</span>
      </time>
    </div>
  
    <div className="hidden sm:block sm:basis-56">
      <img
        alt="Workout Blog"
        src="https://images.unsplash.com/photo-1591258370814-01609b341790?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="aspect-square h-full w-full object-cover"
      />
    </div>
  
    <div className="flex flex-1 flex-col justify-between">
      <div
        className="border-s border-gray-900/10 p-4 sm:!border-l-transparent sm:p-6 dark:border-white/10"
      >
        <h3 className="font-bold uppercase text-gray-900 dark:text-white">
          5 Essential Tips for Building a Sustainable Workout Routine
        </h3>
  
        <p className="mt-2 text-sm/relaxed text-gray-700 dark:text-gray-200">
          Starting a workout routine can be exciting, but keeping it sustainable is the real challenge. Here are five essential tips to help you stay consistent and achieve your fitness goals.
        </p>
  
        <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">1. Set Clear Goals</h4>
        <p className="text-sm/relaxed text-gray-700 dark:text-gray-200">
          Define what you want to achieve—whether it’s losing weight, gaining muscle, or improving endurance. Having clear, measurable goals gives your workouts purpose and direction.
        </p>
  
        <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">2. Start Small and Progress Gradually</h4>
        <p className="text-sm/relaxed text-gray-700 dark:text-gray-200">
          Avoid the common mistake of doing too much too soon. Begin with manageable sessions and gradually increase the intensity and duration as your fitness improves.
        </p>
  
        <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">3. Create a Balanced Routine</h4>
        <p className="text-sm/relaxed text-gray-700 dark:text-gray-200">
          Incorporate a mix of cardio, strength training, and flexibility exercises. A well-rounded workout routine ensures you build overall fitness and avoid overworking specific muscle groups.
        </p>
  
        <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">4. Stay Consistent</h4>
        <p className="text-sm/relaxed text-gray-700 dark:text-gray-200">
          Consistency is key. Schedule your workouts at the same time each day to create a habit. Remember, even a short workout is better than skipping entirely.
        </p>
  
        <h4 className="mt-4 font-semibold text-gray-900 dark:text-white">5. Listen to Your Body</h4>
        <p className="text-sm/relaxed text-gray-700 dark:text-gray-200">
          Pay attention to your body’s signals. Rest when needed and avoid pushing through pain. Recovery days are just as important as workout days for long-term success.
        </p>
  
        <p className="mt-4 text-sm/relaxed text-gray-700 dark:text-gray-200">
          By following these tips, you can create a workout routine that is both effective and sustainable, helping you stay active and healthy in the long run.
        </p>
      </div>
    </div>
  </article>
  </div>
  )
}

export default Blog