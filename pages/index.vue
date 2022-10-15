<template>
  <div>
    <div class="my-4 mx-5">
      <div class="flex flex-row">
        <div class="mr-auto">
          <HomeButton />
        </div>
        <div class="ml-auto">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
    <div class="max-w-3xl px-8 mt-24 mx-auto">
      <div>
        <img
          src="http://cdn.penpow.dev/gZHq.png"
          alt="Its Me!"
          class="w-32 h-32 rounded-3xl inline avatar"
        />
      </div>

      <About />
      <Divider />
      <Posts all="no" />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <Divider />

      <div class="copyright text-center mb-8">
        &copy; {{ new Date().getFullYear() }} Joshua Clements
        <a class="url" href="mailto:josh@penpow.dev">&lt;josh@penpow.dev&gt;</a>
      </div>
    </div>
  </div>
</template>
