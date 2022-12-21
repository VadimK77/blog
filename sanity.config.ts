
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme'
import StudioNavbar from './components/StudioNavbar'
import Logo from './components/Logo'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"


export default defineConfig({
  basePath: '/studio',
  name: 'PAPAFAM_Content_Studio',
  title: 'PAPAFAM Content Studio',
  projectId: 'xtowpg1a',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
      components: {
        logo: Logo,
        navbar: StudioNavbar,
      }
  },
  theme: myTheme
})
