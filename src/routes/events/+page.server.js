import { events } from './data.js';

export function load() {
  return {
    summaries: events.map((event) => ({
      slug: event.slug,
      name: event.name,
      date: event.date,
      cover: event.cover,
      desc: event.desc,
      category: event.category
    }))
  };
}
