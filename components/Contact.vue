<template>
  <div>
    <h1 class="mt-4 text-2xl font-bold">Contact</h1>
    <p class="mt-4">
      Interested in talking to me? I check Discord the most often, but reach out
      through any of my social media accounts
    </p>
    <div class="flex flex-col md:flex-row justify-center">
      <a
        href="https://discordlookup.com/user/207198455301537793"
        target="_blank"
        class="bg-indigo-500 bg-opacity-30 flex-1 md:mr-4 px-8 mt-6 py-4 rounded-md hover:scale-105 transform ease-in-out duration-300"
      >
        <font-awesome-icon :icon="['fab', 'discord']" /> PenPow#7067
      </a>
      <a
        href="https://twitter.com/PenPow"
        target="_blank"
        class="bg-blue-500 bg-opacity-30 flex-1 md:ml-4 mt-6 px-8 py-4 rounded-md hover:scale-105 transform ease-in-out duration-300"
      >
        <font-awesome-icon :icon="['fab', 'twitter']" /> @PenPow
      </a>
    </div>
    <div class="flex flex-col md:flex-row justify-center">
      <a
        href="mailto:josh@penpow.dev"
        target="_blank"
        class="bg-yellow-500 bg-opacity-30 flex-1 md:mr-4 px-8 mt-6 py-4 rounded-md hover:scale-105 transform ease-in-out duration-300"
      >
        <font-awesome-icon :icon="['fa', 'envelope']" /> josh@penpow.dev
      </a>
      <a
        href="https://github.com/PenPow"
        target="_blank"
        class="bg-purple-500 bg-opacity-30 flex-1 md:ml-4 mt-6 px-8 py-4 rounded-md hover:scale-105 transform ease-in-out duration-300"
      >
        <font-awesome-icon :icon="['fab', 'github']" /> PenPow
      </a>
    </div>
  </div>
</template>
