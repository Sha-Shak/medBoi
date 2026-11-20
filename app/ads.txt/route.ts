export function GET() {
  const publisher = /^ca-(pub-\d{16})$/.exec(process.env.ADSENSE_CLIENT || '');
  if (!publisher) return new Response('Not configured', { status: 404 });
  return new Response('google.com, ' + publisher[1] + ', DIRECT, f08c47fec0942fa0\n',
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
