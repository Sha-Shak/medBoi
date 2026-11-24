import { isLanguage, isSection } from '../../../lib/content';
import { searchScope } from '../../../lib/search-scope';
import { suggestions } from '../../../lib/suggestions';

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const lang = params.get('lang') ?? 'en';
  const section = params.get('section');
  const query = (params.get('q') ?? '').slice(0, 90).normalize('NFKC').trim().replace(/\s+/g, ' ');
  if (!isLanguage(lang) || (section && !isSection(section)) || query.length < 2) {
    return Response.json([]);
  }
  return Response.json(await suggestions(query, lang, section && isSection(section) ? [section] : searchScope(params.getAll('in'))));
}
