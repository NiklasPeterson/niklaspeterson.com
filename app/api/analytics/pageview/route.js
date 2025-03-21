import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function POST(request) {
  const { page, visitorId, sessionId, referrer } = await request.json();

  const { error } = await supabase
    .from('pageviews')
    .insert({
      page,
      visitor_id: visitorId,
      session_id: sessionId,
      referrer // Add referrer to the insert data
    });

  if (error) {
    return NextResponse.json({ error: 'Failed to track pageview' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}