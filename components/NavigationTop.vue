<template>
 <header class="container mx-auto">
  <section class="flex flex-row justify-between items-center border border-gray-200 mb-2 p-2">
   <p class="text-sm font-sans tracking-tight">
    You're at Homepage
   </p>
   <ul class="list-none flex flex-row m-0 p-0 gap-2">
    <li v-for="i in 3">
     <a href="#" class="text-black">
      <Icon name="bxl:dribbble" size="1rem" />
     </a>
    </li>
   </ul>
  </section>

  <section class="flex flex-row w-full justify-between items-center border border-gray-200">
   <div class="p-2 border-r border-gray-200">
    <div class="w-10 h-10 bg-orange-500"></div>
   </div>
   <div class="p-2 border-l border-gray-200">
    <button class="text-2xl text-black border-0 bg-transparent outline-0 cursor-pointer p-0">
     <Icon name="ic:round-menu" size="2rem" />
    </button>
   </div>
  </section>

  <section>
   <ul>
    <li>
     <a href="#">
      home.
     </a>
    </li>
    <li>
     <a href="#">
      about.
     </a>
    </li>
    <li>
     <a href="#">
      projects.
     </a>
    </li>
    <li>
     <a href="#">
      blog.
     </a>
    </li>
   </ul>
  </section>
 </header>
</template>