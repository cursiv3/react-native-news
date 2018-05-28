const config = require("./config");
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
  config.newsKey
}`;

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
