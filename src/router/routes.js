const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/home/HomePage.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/pages/about/AboutPage.vue'),
      },
      {
        path: 'services',
        name: 'services',
        component: () => import('@/pages/services/ServicesPage.vue'),
      },
      {
        path: 'projects',
        name: 'projects',
        component: () => import('@/pages/projects/ProjectsPage.vue'),
      },
      {
        path: 'resume',
        name: 'resume',
        component: () => import('@/pages/resume/ResumePage.vue'),
      },
      {
        path: 'blog',
        name: 'blog',
        component: () => import('@/pages/blog/BlogPage.vue'),
      },
      {
        path: 'ai-tools',
        name: 'ai-tools',
        component: () => import('@/pages/ai-tools/AIToolsPage.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/pages/contact/ContactPage.vue'),
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
]

export default routes