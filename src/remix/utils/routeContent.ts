interface SidebarContent {
  [key: string]: Array<aTagItem>;
}

const sideBarcontent = {
  home: [
    {
      display: "Create a pipeline",
      href: "/newPipeline",
    },
  ],
  newPipeline: [
    {
      display: "Create a pipeline",
      href: "/newPipeline",
    },
  ],
} satisfies SidebarContent;

export default function getSideBarContent(url: URL): Array<aTagItem> {
  const paths = url.pathname.split("/").reduce((acc, current) => {
    if (current) {
      acc.push(current);
    }
    return acc;
  }, new Array<string>());

  if (paths.length === 0) {
    return sideBarcontent.home;
  }

  const key = paths.find((currentKey) =>
    Object.hasOwn(sideBarcontent, currentKey)
  ) as keyof typeof sideBarcontent;

  return key ? sideBarcontent[key] : [];
}
