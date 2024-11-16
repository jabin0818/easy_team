<script lang="ts" setup></script>
<template>
  <main class="border-bottom d-flex feed-content flex-justify-center container mt-3 flex space-x-4 px-6">
    <div class="d-flex flex-column feed-main radius flex-auto overflow-x-hidden rounded-2xl bg-white p-4">
      <!-- 面包屑 -->
      <div class="breadcrumbs text-sm">
        <ul>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="mr-2 h-4 w-4 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Home
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="mr-2 h-4 w-4 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Documents
            </a>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="mr-2 h-4 w-4 stroke-current">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            Add Document
          </li>
        </ul>
      </div>
      <ul class="mb-0 flex flex-col rounded-lg pl-0">
        <li class="rounded-t-inherit dark:bg-slate-850 relative mb-2 flex rounded-xl border-0 bg-gray-50 p-6">
          <div class="flex flex-col">
            <h6 class="mb-4 text-sm leading-normal dark:text-white">Oliver Liam</h6>
            <span class="mb-2 text-xs leading-tight dark:text-white/80"
              >Company Name:
              <span class="font-semibold text-slate-700 dark:text-white sm:ml-2">Viking Burrito</span></span
            >
            <span class="mb-2 text-xs leading-tight dark:text-white/80"
              >Email Address:
              <span class="font-semibold text-slate-700 dark:text-white sm:ml-2">oliver@burrito.com</span></span
            >
            <span class="text-xs leading-tight dark:text-white/80"
              >VAT Number: <span class="font-semibold text-slate-700 dark:text-white sm:ml-2">FRB1235476</span></span
            >
          </div>
          <div class="ml-auto text-right">
            <a
              class="bg-150 active:opacity-85 bg-x-25 relative z-10 mb-0 inline-block cursor-pointer rounded-lg border-0 bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text px-4 py-2.5 text-center align-middle text-sm font-bold leading-normal text-transparent shadow-none transition-all ease-in hover:-translate-y-px"
              href="javascript:;"
              ><i
                class="far fa-trash-alt bg-150 bg-x-25 mr-2 bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text"
              ></i
              >Delete</a
            >
            <a
              class="bg-150 active:opacity-85 bg-x-25 mb-0 inline-block cursor-pointer rounded-lg border-0 bg-transparent px-4 py-2.5 text-center align-middle text-sm font-bold leading-normal text-slate-700 shadow-none transition-all ease-in hover:-translate-y-px dark:text-white"
              href="javascript:;"
              ><i class="fas fa-pencil-alt mr-2 text-slate-700" aria-hidden="true"></i>Edit</a
            >
          </div>
        </li>
        <li class="dark:bg-slate-850 relative mb-2 mt-4 flex rounded-xl border-0 bg-gray-50 p-6">
          <div class="flex flex-col">
            <h6 class="mb-4 text-sm leading-normal dark:text-white">Lucas Harper</h6>
            <span class="mb-2 text-xs leading-tight dark:text-white/80"
              >Company Name:
              <span class="font-semibold text-slate-700 dark:text-white sm:ml-2">Stone Tech Zone</span></span
            >
            <span class="mb-2 text-xs leading-tight dark:text-white/80"
              >Email Address:
              <span class="font-semibold text-slate-700 dark:text-white sm:ml-2">lucas@stone-tech.com</span></span
            >
            <span class="text-xs leading-tight dark:text-white/80"
              >VAT Number: <span class="font-semibold text-slate-700 dark:text-white sm:ml-2">FRB1235476</span></span
            >
          </div>
          <div class="ml-auto text-right">
            <a
              class="bg-150 active:opacity-85 bg-x-25 relative z-10 mb-0 inline-block cursor-pointer rounded-lg border-0 bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text px-4 py-2.5 text-center align-middle text-sm font-bold leading-normal text-transparent shadow-none transition-all ease-in hover:-translate-y-px"
              href="javascript:;"
              ><i
                class="far fa-trash-alt bg-150 bg-x-25 mr-2 bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text"
              ></i
              >Delete</a
            >
            <a
              class="bg-150 active:opacity-85 bg-x-25 mb-0 inline-block cursor-pointer rounded-lg border-0 bg-transparent px-4 py-2.5 text-center align-middle text-sm font-bold leading-normal text-slate-700 shadow-none transition-all ease-in hover:-translate-y-px dark:text-white"
              href="javascript:;"
              ><i class="fas fa-pencil-alt mr-2 text-slate-700" aria-hidden="true"></i>Edit</a
            >
          </div>
        </li>
        <li class="rounded-b-inherit dark:bg-slate-850 relative mb-2 mt-4 flex rounded-xl border-0 bg-gray-50 p-6">
          <div class="flex flex-col">
            <h6 class="mb-4 text-sm leading-normal dark:text-white">Ethan James</h6>
            <span class="mb-2 text-xs leading-tight dark:text-white/80"
              >Company Name:
              <span class="font-semibold text-slate-700 dark:text-white sm:ml-2">Fiber Notion</span></span
            >
            <span class="mb-2 text-xs leading-tight dark:text-white/80"
              >Email Address:
              <span class="font-semibold text-slate-700 dark:text-white sm:ml-2">ethan@fiber.com</span></span
            >
            <span class="text-xs leading-tight dark:text-white/80"
              >VAT Number: <span class="font-semibold text-slate-700 dark:text-white sm:ml-2">FRB1235476</span></span
            >
          </div>
          <div class="ml-auto text-right">
            <a
              class="bg-150 active:opacity-85 bg-x-25 relative z-10 mb-0 inline-block cursor-pointer rounded-lg border-0 bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text px-4 py-2.5 text-center align-middle text-sm font-bold leading-normal text-transparent shadow-none transition-all ease-in hover:-translate-y-px"
              href="javascript:;"
              ><i
                class="far fa-trash-alt bg-150 bg-x-25 mr-2 bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text"
              ></i
              >Delete</a
            >
            <a
              class="bg-150 active:opacity-85 bg-x-25 mb-0 inline-block cursor-pointer rounded-lg border-0 bg-transparent px-4 py-2.5 text-center align-middle text-sm font-bold leading-normal text-slate-700 shadow-none transition-all ease-in hover:-translate-y-px dark:text-white"
              href="javascript:;"
              ><i class="fas fa-pencil-alt mr-2 text-slate-700" aria-hidden="true"></i>Edit</a
            >
          </div>
        </li>
      </ul>
    </div>
    <div class="feed-right-sidebar border-bottom mb-5 w-80">
      <!-- 图表 -->
      <div class="-mx-3 flex flex-wrap rounded-2xl">
        <div class="mt-0 w-full max-w-full px-3 lg:flex-none">
          <div
            class="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border shadow-sm"
          >
            <div class="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pb-0 pt-4">
              <h6 class="capitalize dark:text-white">Sales overview</h6>
              <p class="mb-0 text-sm leading-normal dark:text-white dark:opacity-60">
                <i class="fa fa-arrow-up text-emerald-500"></i>
                <span class="font-semibold">4% more</span> in 2021
              </p>
            </div>
            <div class="flex-auto p-4">
              <div>
                <canvas id="chart-line" height="300"></canvas>
              </div>
            </div>
          </div>
        </div>
        <!-- 探索/趋势 -->
        <div class="mt-4 w-full max-w-full px-3 lg:flex-none">
          <div
            class="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border shadow-sm"
          >
            <div class="rounded-t-4 p-4 pb-0">
              <h6 class="mb-0 dark:text-white">Categories</h6>
            </div>
            <div class="flex-auto p-4">
              <ul class="mb-0 flex flex-col rounded-lg pl-0">
                <li class="relative mb-2 flex justify-between rounded-xl rounded-t-lg border-0 py-2 pr-4 text-inherit">
                  <div class="flex items-center">
                    <div
                      class="dark:from-slate-750 dark:to-gray-850 mr-4 inline-block h-8 w-8 rounded-xl bg-gradient-to-tl from-zinc-800 to-zinc-700 bg-center fill-current stroke-none text-center text-black shadow-sm dark:bg-gradient-to-tl"
                    >
                      <i class="ni ni-mobile-button top-0.75 text-xxs relative text-white"></i>
                    </div>
                    <div class="flex flex-col">
                      <h6 class="mb-1 text-sm leading-normal text-slate-700 dark:text-white">Devices</h6>
                      <span class="text-xs leading-tight dark:text-white/80"
                        >250 in stock, <span class="font-semibold">346+ sold</span></span
                      >
                    </div>
                  </div>
                  <div class="flex">
                    <button
                      class="leading-pro rounded-3.5xl p-1.2 h-6.5 w-6.5 group mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle text-xs font-bold text-slate-700 shadow-none transition-all ease-in dark:text-white"
                    >
                      <i
                        class="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </li>
                <li class="relative mb-2 flex justify-between rounded-xl border-0 py-2 pr-4 text-inherit">
                  <div class="flex items-center">
                    <div
                      class="dark:from-slate-750 dark:to-gray-850 mr-4 inline-block h-8 w-8 rounded-xl bg-gradient-to-tl from-zinc-800 to-zinc-700 bg-center fill-current stroke-none text-center text-black shadow-sm dark:bg-gradient-to-tl"
                    >
                      <i class="ni ni-tag top-0.75 text-xxs relative text-white"></i>
                    </div>
                    <div class="flex flex-col">
                      <h6 class="mb-1 text-sm leading-normal text-slate-700 dark:text-white">Tickets</h6>
                      <span class="text-xs leading-tight dark:text-white/80"
                        >123 closed, <span class="font-semibold">15 open</span></span
                      >
                    </div>
                  </div>
                  <div class="flex">
                    <button
                      class="leading-pro rounded-3.5xl p-1.2 h-6.5 w-6.5 group mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle text-xs font-bold text-slate-700 shadow-none transition-all ease-in dark:text-white"
                    >
                      <i
                        class="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </li>
                <li class="relative mb-2 flex justify-between rounded-xl rounded-b-lg border-0 py-2 pr-4 text-inherit">
                  <div class="flex items-center">
                    <div
                      class="dark:from-slate-750 dark:to-gray-850 mr-4 inline-block h-8 w-8 rounded-xl bg-gradient-to-tl from-zinc-800 to-zinc-700 bg-center fill-current stroke-none text-center text-black shadow-sm dark:bg-gradient-to-tl"
                    >
                      <i class="ni ni-box-2 top-0.75 text-xxs relative text-white"></i>
                    </div>
                    <div class="flex flex-col">
                      <h6 class="mb-1 text-sm leading-normal text-slate-700 dark:text-white">Error logs</h6>
                      <span class="text-xs leading-tight dark:text-white/80"
                        >1 is active, <span class="font-semibold">40 closed</span></span
                      >
                    </div>
                  </div>
                  <div class="flex">
                    <button
                      class="leading-pro rounded-3.5xl p-1.2 h-6.5 w-6.5 group mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle text-xs font-bold text-slate-700 shadow-none transition-all ease-in dark:text-white"
                    >
                      <i
                        class="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </li>
                <li class="relative flex justify-between rounded-xl rounded-b-lg border-0 py-2 pr-4 text-inherit">
                  <div class="flex items-center">
                    <div
                      class="dark:from-slate-750 dark:to-gray-850 mr-4 inline-block h-8 w-8 rounded-xl bg-gradient-to-tl from-zinc-800 to-zinc-700 bg-center fill-current stroke-none text-center text-black shadow-sm dark:bg-gradient-to-tl"
                    >
                      <i class="ni ni-satisfied top-0.75 text-xxs relative text-white"></i>
                    </div>
                    <div class="flex flex-col">
                      <h6 class="mb-1 text-sm leading-normal text-slate-700 dark:text-white">Happy users</h6>
                      <span class="text-xs leading-tight dark:text-white/80"
                        ><span class="font-semibold">+ 430 </span></span
                      >
                    </div>
                  </div>
                  <div class="flex">
                    <button
                      class="leading-pro rounded-3.5xl p-1.2 h-6.5 w-6.5 group mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle text-xs font-bold text-slate-700 shadow-none transition-all ease-in dark:text-white"
                    >
                      <i
                        class="ni ease-bounce text-2xs group-hover:translate-x-1.25 ni-bold-right transition-all duration-200"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
