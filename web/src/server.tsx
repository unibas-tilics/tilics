"use server";

const cacheStore: {
  [pr_number: number]: {
    result: any;
    date_iso: string;
  };
} = {};

export async function fetchRawFile(url: string) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  const text = await response.text();
  return text;
}

export async function getPRFiles(
  number: number,
  last_updated_at: string
): Promise<{
  files: GitFile[];
  cacheStatus: string;
}> {
  const cache = cacheStore[number];
  if (cache) {
    const invalidated = new Date(cache.date_iso) < new Date(last_updated_at);
    if (invalidated) {
      console.log("cache invalidated!", number);
      delete cacheStore[number];
    } else {
      console.log("cache hit!", number);
      return {
        files: cache.result,
        cacheStatus: "hit",
      };
    }
  } else {
    console.log("cache miss!", number);
  }

  const response = await fetch(
    `https://api.github.com/repos/unibas-tilics/tilics/pulls/${number}/files`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  const json = await response.json();

  cacheStore[number] = {
    result: json,
    date_iso: new Date().toISOString(),
  };

  return {
    files: json,
    cacheStatus: "miss",
  };
}
