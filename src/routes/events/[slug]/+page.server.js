import { events } from '../data.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  const event = events.find((event) => event.slug === params.slug);

  if (!event) return error(404);

  return { event };
}
