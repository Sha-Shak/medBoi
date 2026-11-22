import { cleanQuery, searchCatalogue } from '../../../lib/catalogue';
import { isLanguage, isSection } from '../../../lib/content';
import { catalogueFacets, selectedFacets } from '../../../lib/facets';
import { recordCard } from '../../../lib/record-card';

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const lang = params.get('lang') ?? '';
  const section = params.get('section') ?? '';
  const page = Number(params.get('page'));
  if (!isLanguage(lang) || !isSection(section) || !Number.isSafeInteger(page) || page < 2 || page > 2000) {
    return Response.json({ error: 'Invalid directory request' }, { status: 400 });
  }

  const query = cleanQuery(params.get('q'));
  const requestedMode = params.get('mode');
  const mode = section === 'medicines' && (requestedMode === 'brand' || requestedMode === 'generic') ? requestedMode : 'all';
  const filters = selectedFacets(Object.fromEntries(params), await catalogueFacets(section));
  const { rows, hasMore } = await searchCatalogue(section, query, page, undefined, mode, filters);
  return Response.json({ cards: rows.map(row => recordCard(lang, section, row)), hasMore: hasMore && page < 2000 });
}
