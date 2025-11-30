import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create services
  const services = [
    {
      name: '1:1 ABA Therapy',
      description: 'Personalized, child-centered learning with individualized ABA therapy sessions.',
      duration: 60,
      price: 120.00,
      category: 'Individual'
    },
    {
      name: 'Dyad Sessions (Buddy Learning)',
      description: 'Learning together with peer interaction and cooperative play for two children.',
      duration: 60,
      price: 90.00,
      category: 'Small Group'
    },
    {
      name: 'Social Skills Groups',
      description: 'Confidence through connection and play in small groups of 3-5 children.',
      duration: 90,
      price: 75.00,
      category: 'Group'
    },
    {
      name: 'ABA + Montessori Program',
      description: 'Full-day structured program combining ABA strategies with Montessori learning.',
      duration: 420, // 7 hours
      price: 350.00,
      category: 'Comprehensive'
    },
    {
      name: 'Early Intervention Program',
      description: 'Strong foundations for lifelong learning targeting toddlers and preschoolers.',
      duration: 45,
      price: 100.00,
      category: 'Early Years'
    },
    {
      name: 'School Readiness Program',
      description: 'Confidence for a smooth school start with classroom routines and group activities.',
      duration: 60,
      price: 110.00,
      category: 'Transition'
    },
    {
      name: 'Life Skills & Independence Program',
      description: 'Building confidence for everyday life with practical skills training.',
      duration: 90,
      price: 130.00,
      category: 'Independence'
    },
    {
      name: 'Community Outing Program',
      description: 'ABA learning beyond the therapy room with real-world skill practice.',
      duration: 120,
      price: 150.00,
      category: 'Community'
    },
    {
      name: 'Parent Coaching & Training',
      description: 'Empowering families to support learning at home with practical ABA strategies.',
      duration: 60,
      price: 95.00,
      category: 'Family Support'
    },
    {
      name: 'Vocational Skills Program',
      description: 'Preparing teens for work and independence with job-related skills training.',
      duration: 90,
      price: 140.00,
      category: 'Teen Programs'
    }
  ]

  for (const service of services) {
    await prisma.service.upsert({
      where: { name: service.name },
      update: {},
      create: service
    })
  }

  // Create blog posts
  const posts = [
    {
      title: 'Understanding ABA Therapy: A Parent\'s Guide',
      slug: 'understanding-aba-therapy-parents-guide',
      excerpt: 'Learn the fundamentals of Applied Behavior Analysis and how it can help your child develop essential skills.',
      content: `Applied Behavior Analysis (ABA) is a scientifically proven approach that helps children with autism and other developmental challenges learn new skills and reduce challenging behaviors.

ABA therapy focuses on understanding how behavior works, how it is affected by the environment, and how learning takes place. The therapy uses positive reinforcement to encourage desired behaviors and teach new skills.

Key principles of ABA include:
- Breaking down complex skills into smaller, manageable steps
- Using positive reinforcement to motivate learning
- Collecting data to track progress and adjust interventions
- Individualizing programs to meet each child's unique needs

At AscendCare, our certified behavior analysts work closely with families to develop personalized treatment plans that address each child's specific goals and challenges.`,
      image: '/ABA therapy website image.jpg',
      published: true
    },
    {
      title: 'The Importance of Early Intervention in Autism',
      slug: 'importance-early-intervention-autism',
      excerpt: 'Discover why starting therapy early can make a significant difference in your child\'s development and long-term outcomes.',
      content: `Early intervention is crucial for children with autism spectrum disorder. Research consistently shows that children who receive intensive, high-quality intervention services early in life have better outcomes.

Benefits of early intervention include:
- Improved communication and language skills
- Better social interaction abilities
- Reduced challenging behaviors
- Enhanced learning and cognitive development
- Greater independence in daily living skills

The brain is most flexible during the early years, making it the optimal time for learning and development. Our Early Intervention Program at AscendCare is specifically designed for toddlers and preschoolers, focusing on building strong foundations for lifelong learning.

We work with families to create supportive environments that promote growth and development, ensuring that every child has the best possible start in life.`,
      image: '/speech therapy image 2.jpg',
      published: true
    },
    {
      title: 'Building Social Skills: Tips for Parents',
      slug: 'building-social-skills-tips-parents',
      excerpt: 'Practical strategies to help your child develop meaningful friendships and social connections.',
      content: `Social skills are essential for building relationships, succeeding in school, and participating in community activities. For children with autism, developing these skills may require additional support and practice.

Here are some practical tips for parents:

1. Start with basic social skills like making eye contact, greeting others, and taking turns
2. Practice social scenarios at home through role-playing
3. Create opportunities for social interaction in structured settings
4. Use visual supports and social stories to teach social expectations
5. Celebrate small successes and progress

Our Social Skills Groups at AscendCare provide a supportive environment where children can practice these skills with peers. Through structured activities and games, children learn to navigate social situations with confidence.

Remember, every child develops at their own pace. Be patient, consistent, and celebrate the progress your child makes along the way.`,
      image: '/Speech therapy image 1.jpg',
      published: true
    },
    {
      title: 'Preparing Your Child for School Success',
      slug: 'preparing-child-school-success',
      excerpt: 'Essential skills and strategies to help your child transition smoothly into the school environment.',
      content: `Starting school is a major milestone for any child, and preparation is key to success. For children with special needs, this preparation becomes even more important.

Key areas to focus on include:

Academic Readiness:
- Pre-literacy skills like letter recognition and phonics
- Basic math concepts and number recognition
- Fine motor skills for writing and drawing

Social and Behavioral Skills:
- Following classroom routines and instructions
- Sitting and attending for appropriate periods
- Interacting appropriately with peers and teachers
- Managing emotions and self-regulation

Independence Skills:
- Self-care tasks like using the bathroom independently
- Organizing materials and belongings
- Asking for help when needed

Our School Readiness Program at AscendCare addresses all these areas through structured, play-based learning activities. We work closely with families and schools to ensure a smooth transition and continued success.`,
      image: '/recreational therapy image 1.jpg',
      published: true
    }
  ]

  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {},
      create: post
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
