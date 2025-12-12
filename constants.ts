import { Project, Service, Skill } from './types';

export const ARTIST_NAME = "Setan.D";
export const TAGLINE = "3D Artist at JoyFlux LLP";

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Isometric Room',
    category: '3D Illustration',
    image: 'https://picsum.photos/800/600?random=10',
    description: 'A cozy isometric room design. My first attempt at creating a complete scene with simple lighting.',
    tools: ['Blender']
  },
  {
    id: '2',
    title: 'Low Poly Props',
    category: 'Game Assets',
    image: 'https://picsum.photos/800/800?random=11',
    description: 'A collection of simple low-poly items created for practice.',
    tools: ['Blender']
  },
  {
    id: '3',
    title: 'Abstract Shapes',
    category: 'Material Study',
    image: 'https://picsum.photos/800/600?random=12',
    description: 'Testing different colors and simple textures on basic geometric shapes.',
    tools: ['Blender']
  },
  {
    id: '4',
    title: 'Daily Practice',
    category: 'Modeling',
    image: 'https://picsum.photos/800/600?random=13',
    description: 'Modeling simple everyday objects to improve my topology skills.',
    tools: ['Blender']
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: '3D Modeling',
    description: 'Creating clean 3D models of simple objects and props.',
    iconName: 'Box'
  },
  {
    id: 's2',
    title: 'Basic Rendering',
    description: 'Rendering images of models with simple lighting setups.',
    iconName: 'Zap'
  },
  {
    id: 's3',
    title: 'Texturing',
    description: 'Adding colors and basic materials to 3D models.',
    iconName: 'Layers'
  },
  {
    id: 's4',
    title: 'Asset Creation',
    description: 'Building simple assets for use in games or scenes.',
    iconName: 'Monitor'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Blender', level: 70 },
  { name: '3D Modeling', level: 65 },
  { name: 'Texturing', level: 60 },
  { name: 'Lighting', level: 50 },
];