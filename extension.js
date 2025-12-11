export async function search(request, query) {
  return [
    {
      title: "Example Result: " + query,
      url: "https://example.com/result1",
      time: ""
    }
  ];
}

export async function detail(request, url) {
  return {
    episodes: [
      {
        title: "Episode 1",
        url: "https://example.com/episode1"
      }
    ]
  };
}
