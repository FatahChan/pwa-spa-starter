/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as publicPublicLayoutImport } from './routes/(public)/_public-layout'
import { Route as protectedProtectedLayoutImport } from './routes/(protected)/_protected-layout'
import { Route as authAuthLayoutImport } from './routes/(auth)/_auth-layout'
import { Route as publicPublicLayoutIndexImport } from './routes/(public)/_public-layout/index'
import { Route as protectedProtectedLayoutDashboardImport } from './routes/(protected)/_protected-layout/dashboard'
import { Route as authAuthLayoutSignupImport } from './routes/(auth)/_auth-layout/signup'
import { Route as authAuthLayoutLoginImport } from './routes/(auth)/_auth-layout/login'

// Create Virtual Routes

const publicImport = createFileRoute('/(public)')()
const protectedImport = createFileRoute('/(protected)')()
const authImport = createFileRoute('/(auth)')()

// Create/Update Routes

const publicRoute = publicImport.update({
  id: '/(public)',
  getParentRoute: () => rootRoute,
} as any)

const protectedRoute = protectedImport.update({
  id: '/(protected)',
  getParentRoute: () => rootRoute,
} as any)

const authRoute = authImport.update({
  id: '/(auth)',
  getParentRoute: () => rootRoute,
} as any)

const publicPublicLayoutRoute = publicPublicLayoutImport.update({
  id: '/_public-layout',
  getParentRoute: () => publicRoute,
} as any)

const protectedProtectedLayoutRoute = protectedProtectedLayoutImport.update({
  id: '/_protected-layout',
  getParentRoute: () => protectedRoute,
} as any)

const authAuthLayoutRoute = authAuthLayoutImport.update({
  id: '/_auth-layout',
  getParentRoute: () => authRoute,
} as any)

const publicPublicLayoutIndexRoute = publicPublicLayoutIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => publicPublicLayoutRoute,
} as any)

const protectedProtectedLayoutDashboardRoute =
  protectedProtectedLayoutDashboardImport.update({
    id: '/dashboard',
    path: '/dashboard',
    getParentRoute: () => protectedProtectedLayoutRoute,
  } as any)

const authAuthLayoutSignupRoute = authAuthLayoutSignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => authAuthLayoutRoute,
} as any)

const authAuthLayoutLoginRoute = authAuthLayoutLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => authAuthLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(auth)': {
      id: '/(auth)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/_auth-layout': {
      id: '/(auth)/_auth-layout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof authAuthLayoutImport
      parentRoute: typeof authRoute
    }
    '/(protected)': {
      id: '/(protected)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof protectedImport
      parentRoute: typeof rootRoute
    }
    '/(protected)/_protected-layout': {
      id: '/(protected)/_protected-layout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof protectedProtectedLayoutImport
      parentRoute: typeof protectedRoute
    }
    '/(public)': {
      id: '/(public)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof publicImport
      parentRoute: typeof rootRoute
    }
    '/(public)/_public-layout': {
      id: '/(public)/_public-layout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof publicPublicLayoutImport
      parentRoute: typeof publicRoute
    }
    '/(auth)/_auth-layout/login': {
      id: '/(auth)/_auth-layout/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authAuthLayoutLoginImport
      parentRoute: typeof authAuthLayoutImport
    }
    '/(auth)/_auth-layout/signup': {
      id: '/(auth)/_auth-layout/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof authAuthLayoutSignupImport
      parentRoute: typeof authAuthLayoutImport
    }
    '/(protected)/_protected-layout/dashboard': {
      id: '/(protected)/_protected-layout/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof protectedProtectedLayoutDashboardImport
      parentRoute: typeof protectedProtectedLayoutImport
    }
    '/(public)/_public-layout/': {
      id: '/(public)/_public-layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof publicPublicLayoutIndexImport
      parentRoute: typeof publicPublicLayoutImport
    }
  }
}

// Create and export the route tree

interface authAuthLayoutRouteChildren {
  authAuthLayoutLoginRoute: typeof authAuthLayoutLoginRoute
  authAuthLayoutSignupRoute: typeof authAuthLayoutSignupRoute
}

const authAuthLayoutRouteChildren: authAuthLayoutRouteChildren = {
  authAuthLayoutLoginRoute: authAuthLayoutLoginRoute,
  authAuthLayoutSignupRoute: authAuthLayoutSignupRoute,
}

const authAuthLayoutRouteWithChildren = authAuthLayoutRoute._addFileChildren(
  authAuthLayoutRouteChildren,
)

interface authRouteChildren {
  authAuthLayoutRoute: typeof authAuthLayoutRouteWithChildren
}

const authRouteChildren: authRouteChildren = {
  authAuthLayoutRoute: authAuthLayoutRouteWithChildren,
}

const authRouteWithChildren = authRoute._addFileChildren(authRouteChildren)

interface protectedProtectedLayoutRouteChildren {
  protectedProtectedLayoutDashboardRoute: typeof protectedProtectedLayoutDashboardRoute
}

const protectedProtectedLayoutRouteChildren: protectedProtectedLayoutRouteChildren =
  {
    protectedProtectedLayoutDashboardRoute:
      protectedProtectedLayoutDashboardRoute,
  }

const protectedProtectedLayoutRouteWithChildren =
  protectedProtectedLayoutRoute._addFileChildren(
    protectedProtectedLayoutRouteChildren,
  )

interface protectedRouteChildren {
  protectedProtectedLayoutRoute: typeof protectedProtectedLayoutRouteWithChildren
}

const protectedRouteChildren: protectedRouteChildren = {
  protectedProtectedLayoutRoute: protectedProtectedLayoutRouteWithChildren,
}

const protectedRouteWithChildren = protectedRoute._addFileChildren(
  protectedRouteChildren,
)

interface publicPublicLayoutRouteChildren {
  publicPublicLayoutIndexRoute: typeof publicPublicLayoutIndexRoute
}

const publicPublicLayoutRouteChildren: publicPublicLayoutRouteChildren = {
  publicPublicLayoutIndexRoute: publicPublicLayoutIndexRoute,
}

const publicPublicLayoutRouteWithChildren =
  publicPublicLayoutRoute._addFileChildren(publicPublicLayoutRouteChildren)

interface publicRouteChildren {
  publicPublicLayoutRoute: typeof publicPublicLayoutRouteWithChildren
}

const publicRouteChildren: publicRouteChildren = {
  publicPublicLayoutRoute: publicPublicLayoutRouteWithChildren,
}

const publicRouteWithChildren =
  publicRoute._addFileChildren(publicRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof publicPublicLayoutIndexRoute
  '/login': typeof authAuthLayoutLoginRoute
  '/signup': typeof authAuthLayoutSignupRoute
  '/dashboard': typeof protectedProtectedLayoutDashboardRoute
}

export interface FileRoutesByTo {
  '/': typeof publicPublicLayoutIndexRoute
  '/login': typeof authAuthLayoutLoginRoute
  '/signup': typeof authAuthLayoutSignupRoute
  '/dashboard': typeof protectedProtectedLayoutDashboardRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(auth)': typeof authRouteWithChildren
  '/(auth)/_auth-layout': typeof authAuthLayoutRouteWithChildren
  '/(protected)': typeof protectedRouteWithChildren
  '/(protected)/_protected-layout': typeof protectedProtectedLayoutRouteWithChildren
  '/(public)': typeof publicRouteWithChildren
  '/(public)/_public-layout': typeof publicPublicLayoutRouteWithChildren
  '/(auth)/_auth-layout/login': typeof authAuthLayoutLoginRoute
  '/(auth)/_auth-layout/signup': typeof authAuthLayoutSignupRoute
  '/(protected)/_protected-layout/dashboard': typeof protectedProtectedLayoutDashboardRoute
  '/(public)/_public-layout/': typeof publicPublicLayoutIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/login' | '/signup' | '/dashboard'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/login' | '/signup' | '/dashboard'
  id:
    | '__root__'
    | '/(auth)'
    | '/(auth)/_auth-layout'
    | '/(protected)'
    | '/(protected)/_protected-layout'
    | '/(public)'
    | '/(public)/_public-layout'
    | '/(auth)/_auth-layout/login'
    | '/(auth)/_auth-layout/signup'
    | '/(protected)/_protected-layout/dashboard'
    | '/(public)/_public-layout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  authRoute: typeof authRouteWithChildren
  protectedRoute: typeof protectedRouteWithChildren
  publicRoute: typeof publicRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  authRoute: authRouteWithChildren,
  protectedRoute: protectedRouteWithChildren,
  publicRoute: publicRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/(auth)",
        "/(protected)",
        "/(public)"
      ]
    },
    "/(auth)": {
      "filePath": "(auth)",
      "children": [
        "/(auth)/_auth-layout"
      ]
    },
    "/(auth)/_auth-layout": {
      "filePath": "(auth)/_auth-layout.tsx",
      "parent": "/(auth)",
      "children": [
        "/(auth)/_auth-layout/login",
        "/(auth)/_auth-layout/signup"
      ]
    },
    "/(protected)": {
      "filePath": "(protected)",
      "children": [
        "/(protected)/_protected-layout"
      ]
    },
    "/(protected)/_protected-layout": {
      "filePath": "(protected)/_protected-layout.tsx",
      "parent": "/(protected)",
      "children": [
        "/(protected)/_protected-layout/dashboard"
      ]
    },
    "/(public)": {
      "filePath": "(public)",
      "children": [
        "/(public)/_public-layout"
      ]
    },
    "/(public)/_public-layout": {
      "filePath": "(public)/_public-layout.tsx",
      "parent": "/(public)",
      "children": [
        "/(public)/_public-layout/"
      ]
    },
    "/(auth)/_auth-layout/login": {
      "filePath": "(auth)/_auth-layout/login.tsx",
      "parent": "/(auth)/_auth-layout"
    },
    "/(auth)/_auth-layout/signup": {
      "filePath": "(auth)/_auth-layout/signup.tsx",
      "parent": "/(auth)/_auth-layout"
    },
    "/(protected)/_protected-layout/dashboard": {
      "filePath": "(protected)/_protected-layout/dashboard.tsx",
      "parent": "/(protected)/_protected-layout"
    },
    "/(public)/_public-layout/": {
      "filePath": "(public)/_public-layout/index.tsx",
      "parent": "/(public)/_public-layout"
    }
  }
}
ROUTE_MANIFEST_END */
