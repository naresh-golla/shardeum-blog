export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6273777f3f1764703385b1ba",
                  title: "Sanity Studio",
                  name: "shardeum-blog-studio",
                  apiId: "ecc01cd8-53fb-4ea7-93f6-0f038812c70e",
                },
                {
                  buildHookId: "6273777fbeed8a7192006ddd",
                  title: "Blog Website",
                  name: "shardeum-blog",
                  apiId: "8f138fc0-ec98-4e08-81bb-4fa35b3ab836",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/naresh-golla/shardeum-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://shardeum-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
