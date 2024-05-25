'use client'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'
import {pageStructure, singletonPlugin} from './sanity/plugins/settings'
import {basePath, projectId, dataset, apiVersion, title} from './sanity/lib/api'
import home from './sanity/schemas/singletons/home'
import settings from './sanity/schemas/singletons/settings'
import duration from './sanity/schemas/objects/duration'
import page from './sanity/schemas/documents/page'
import project from './sanity/schemas/documents/project'
import milestone from './sanity/schemas/objects/milestone'
import timeline from './sanity/schemas/objects/timeline'
import * as resolve from './sanity/plugins/resolve'

export default defineConfig({
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  basePath,
  schema: {
    types: [home, settings, duration, page, project, milestone, timeline],
  },
  plugins: [
    structureTool({
      structure: pageStructure([home, settings]),
    }),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft',
        },
      },
    }),
    singletonPlugin([home.name, settings.name]),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
