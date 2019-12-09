export default {
  name: "skill",
  children: [
    {
      name: "Web",
      children: [
        {
          name: "Front",
          children: [
            {
              name: "Framework | Lib",
              children: [
                {
                  name: "React",
                  children: [
                    { name: "Redux", value: 150 },
                    { name: "React-router", value: 100 }
                  ]
                },
                { name: "Vue", children: [{ name: "Vuex", value: 150 }] },
                { name: "jQuery", value: 1375 }
              ]
            },
            {
              name: "WebGl",
              children: [{ name: "Three", value: 100 }]
            },
            {
              name: "Data",
              children: [{ name: "d3", value: 100 }]
            },
            {
              name: "Animation",
              children: [
                { name: "Anime", value: 100 },
                { name: "GSAP", value: 100 }
              ]
            },
            { name: "jQuery", value: 1375 }
          ]
        },
        {
          name: "Back",
          children: [
            {
              name: "Framework",
              children: [
                { name: "Express", value: 100 },
                { name: "Django", value: 150 },
                { name: "CodeIgniter", value: 150 }
              ]
            },
            { name: "ORM", children: [{ name: "Sequelize", value: 100 }] },
            {
              name: "Auth",
              children: [{ name: "Passport", value: 100 }]
            },
            { name: "Apollo", value: 150 },
            { name: "GraphQL", value: 1375 }
          ]
        }
      ]
    },
    {
      name: "mobile",
      children: [
        {
          name: "Android",
          value: 100
        }
      ]
    },
    {
      name: "lang",
      children: [
        { name: "JAVA", value: 8833 },
        { name: "PHP", value: 3623 },
        { name: "HTML", value: 10066 },
        { name: "CSS", value: 10066 },
        { name: "JS", value: 1732 }
      ]
    },
    {
      name: "DB",
      children: [
        { name: "Mysql", value: 8833 },
        { name: "Prisma", value: 3623 },
        { name: "Oracle", value: 10066 },
        { name: "Postgresql", value: 10066 }
      ]
    },

    {
      name: "Design",
      children: [
        { name: "Photoshop", value: 8833 },
        { name: "Illustrator", value: 3623 }
      ]
    },
    {
      name: "ETC",
      children: [
        { name: "Git", value: 8833 },
        { name: "PWA", value: 8833 },
        { name: "Gnuboard", value: 8833 }
      ]
    }
  ]
};
