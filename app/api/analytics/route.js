import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const timeRange = searchParams.get('timeRange') || '7d';

  const now = new Date();
  let startDate = new Date();

  switch (timeRange) {
    case '24h':
      startDate.setHours(startDate.getHours() - 24);
      break;
    case '7d':
      startDate.setDate(startDate.getDate() - 7);
      break;
    case '30d':
      startDate.setDate(startDate.getDate() - 30);
      break;
    case 'thisYear':
      startDate = new Date(now.getFullYear(), 0, 1); // January 1st of current year
      break;
    case 'lastYear':
      startDate = new Date(now.getFullYear() - 1, 0, 1);
      now.setFullYear(now.getFullYear() - 1, 11, 31); // December 31st of last year
      break;
    case 'all':
      startDate = new Date(0); // Beginning of time
      break;
    default:
      startDate.setDate(startDate.getDate() - 30);
  }

  const { data, error } = await supabase
    .from('pageviews')
    .select('*')
    .gte('created_at', startDate.toISOString())
    .lte('created_at', now.toISOString());

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }

  // Calculate metrics
  const uniqueVisitors = new Set(data.map(pv => pv.visitor_id)).size;
  const uniqueSessions = new Set(data.map(pv => pv.session_id)).size;
  const totalPageviews = data.length;
  const pageviewsByPage = data.reduce((acc, pv) => {
    acc[pv.page] = (acc[pv.page] || 0) + 1;
    return acc;
  }, {});

  return NextResponse.json({
    uniqueVisitors,
    uniqueSessions,
    totalPageviews,
    pageviewsByPage,
  });
}