function destCity(paths: string[][]): string {
  const map = new Map<string, string>();

  for (const path of paths) {
    const [city1, city2] = path;
    map.set(city1, city2);
  }

  for (const path of paths) {
    const [_, city2] = path;

    if (!map.has(city2)) {
      return city2;
    }
  }

  return '';
}
