import { directories } from './data.js';

export function load() {
  return {
    summaries: directories.map((directory) => ({
      slug: directory.slug,
      name: directory.name,
      img: directory.img,
      position: directory.position,
      course: directory.course,
      year: directory.year
    }))
  };
}
