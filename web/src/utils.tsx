export const fetchPullRequests = async (page: number) => {
  const getAllPullRequestEndpoint = `https://api.github.com/repos/unibas-tilics/tilics/pulls?state=open&per_page=100&sort=created&direction=desc`;
  const url = `${getAllPullRequestEndpoint}&page=${page}`;
  console.log("fetch url", url);
  const response = await fetch(url);
  const json = await response.json();
  return {
    hasNext: json.length == 100,
    json,
  };
};

export const getPullRequests = async () => {
  let page = 1;
  const prs: PullRequest[] = [];
  while (true) {
    console.log("fetching page", page);
    const { hasNext, json } = await fetchPullRequests(page);
    prs.push(...json);
    if (!hasNext) break;
    page++;
  }

  console.log("return prs", prs);
  return prs;
};

export function compareJaccardSimilarity(str1: string, str2: string): number {
  const tokenize = (str: string): Set<string> =>
    new Set(str.toLowerCase().split(/[\W_]+/)); // Split on non-word characters and normalize

  const set1 = tokenize(str1);
  const set2 = tokenize(str2);

  const intersection = new Set([...set1].filter((word) => set2.has(word)));
  const union = new Set([...set1, ...set2]);

  return intersection.size / union.size; // Jaccard similarity
}

export function notEmpty<TValue>(
  value: TValue | null | undefined
): value is TValue {
  return value !== null && value !== undefined;
}
