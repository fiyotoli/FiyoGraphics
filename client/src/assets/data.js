// src/components/Blog/data.js

import blog from './blog.jpg';
import blog1 from './blog1.jpg';
import blog2 from './blog2.jpg';

const blogData = [
  {
    id: 1,
    image: blog, // Image imported from assets
    title: 'The Latest in Tech: 2025 Innovations',
    description:
      '2025 is shaping up to be an exciting year for technology. From advancements in AI to the rise of quantum computing, this article highlights the most groundbreaking innovations in the tech world.',
    date: '2024-01-15',
  },
  {
    id: 2,
    image: blog1, // Image imported from assets
    title: 'Exciting New Brand Launch: Coming Soon!',
    description:
      "Get ready for the launch of our new brand! We’re working on something exciting that will revolutionize the design world. Stay tuned for more details as we prepare to unveil our project and share the creative journey behind it.",
    date: '2025-03-10',
  },
  {
    id: 3,
    image: blog2, // Image imported from assets
    title: 'AI in Graphic Design: A Game Changer',
    description:
      'Artificial intelligence is revolutionizing the world of graphic design. This article explores how AI tools are changing the design process, improving efficiency, and enabling new creative possibilities.',
    date: '2024-02-05',
  },
];

export default blogData;
