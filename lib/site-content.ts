export const siteContent = {
  name: "Global Hearts Foundation",
  description:
    "Global Hearts Foundation is dedicated to empowerment and community outreach, creating opportunities, inspiring hope, and supporting stronger communities.",
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Focus", href: "#focus" },
    { label: "Our Approach", href: "#approach" },
    { label: "Get Involved", href: "#involved" },
    { label: "Contact", href: "#contact" },
  ],
  photos: {
    hero: {
      src: "/images/hero-community.jpg",
      alt: "Women and children sharing a moment outdoors at a community gathering",
      credit: "Emeka Adizua / Pexels",
    },
    about: {
      src: "/images/women-collaboration.jpg",
      alt: "A group of African women collaborating around a table",
      credit: "PICHA Stock / Pexels",
    },
    empowerment: {
      src: "/images/women-empowerment.jpg",
      alt: "An African woman sewing colourful fabric in a vocational workspace",
      credit: "illustrate Digital Ug / Pexels",
    },
    outreach: {
      src: "/images/community-outreach.jpg",
      alt: "A community of African women and children gathered in daylight",
      credit: "Speak Media Uganda / Pexels",
    },
  },
  about: {
    heading: "A Foundation Built on Love, Driven by Purpose.",
    paragraphs: [
      "Global Hearts Foundation is committed to empowering individuals and strengthening communities through meaningful initiatives that create opportunities, inspire hope, and encourage sustainable development.",
      "We believe that when people are given the right support, resources, and opportunities, they can transform their lives and contribute positively to their communities.",
      "Our approach is rooted in compassion, collaboration, and the belief that lasting change begins with people.",
    ],
    highlights: [
      {
        title: "People first",
        description:
          "We place individuals and communities at the centre of everything we do.",
      },
      {
        title: "Purpose driven",
        description:
          "We believe meaningful support can create lasting opportunities.",
      },
    ],
  },
  focusAreas: [
    {
      number: "01",
      eyebrow: "EMPOWERMENT",
      title: "Empowering People to Build Better Futures.",
      description:
        "We believe empowerment creates possibilities. Through initiatives focused on skills development, personal growth, mentorship, and economic opportunities, we aim to help individuals unlock their potential and build more independent futures.",
      initiatives: [
        "Skills acquisition and vocational development",
        "Women and youth empowerment",
        "Entrepreneurship and livelihood support",
        "Mentorship and personal development",
      ],
      image: "empowerment" as const,
      accent: "green",
    },
    {
      number: "02",
      eyebrow: "COMMUNITY OUTREACH",
      title: "Reaching Communities. Restoring Hope.",
      description:
        "We believe strong communities are built through compassion and collective action. Our community outreach efforts aim to connect vulnerable individuals and underserved communities with meaningful support and opportunities for growth.",
      initiatives: [
        "Community support programmes",
        "Outreach to underserved communities",
        "Support for vulnerable families",
        "Community development initiatives",
      ],
      image: "outreach" as const,
      accent: "red",
    },
  ],
  approach: [
    {
      number: "01",
      title: "Listen & Understand",
      description:
        "We begin by recognising the needs, challenges, and aspirations of the individuals and communities we hope to serve.",
    },
    {
      number: "02",
      title: "Empower & Support",
      description:
        "We aim to provide meaningful opportunities, practical resources, and support that help people improve their circumstances.",
    },
    {
      number: "03",
      title: "Grow Together",
      description:
        "Through collaboration and community participation, we seek to encourage sustainable progress and lasting positive change.",
    },
  ],
  mission:
    "To empower individuals and support underserved communities through compassionate outreach, meaningful opportunities, and initiatives that promote personal and community development.",
  vision:
    "A world where individuals are empowered to reach their potential and communities have the opportunities and support needed to thrive.",
  opportunities: [
    {
      icon: "heart" as const,
      title: "Volunteer",
      tagline: "Give Your Time. Share Your Heart.",
      description:
        "Contribute your skills, energy, and passion to initiatives that support individuals and communities.",
      action: "Become a Volunteer",
    },
    {
      icon: "users" as const,
      title: "Partner",
      tagline: "Let's Create Impact Together.",
      description:
        "Collaborate with Global Hearts Foundation to support empowerment and community development initiatives.",
      action: "Partner With Us",
    },
    {
      icon: "hand" as const,
      title: "Support",
      tagline: "Your Support Can Make a Difference.",
      description:
        "Help create opportunities and extend meaningful support to individuals and communities.",
      action: "Support Our Cause",
    },
  ],
  contact: {
    email: "To be confirmed",
    phone: "To be confirmed",
    office: "To be confirmed",
    social: ["Instagram", "Facebook", "LinkedIn"],
  },
} as const;
