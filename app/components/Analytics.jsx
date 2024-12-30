"use client";
import { useEffect, useState } from 'react';

const TIME_RANGES = [
  { value: '24h', label: 'Last 24 Hours' },
  { value: '7d', label: 'Last 7 Days' },
  { value: '30d', label: 'Last 30 Days' },
  { value: 'thisYear', label: 'This Year' },
  { value: 'lastYear', label: 'Last Year' },
  { value: 'all', label: 'All Time' },
];

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('30d');
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        setLoading(true);
        const response = await fetch(`/api/analytics?timeRange=${timeRange}`);
        if (!response.ok) {
          throw new Error('Failed to fetch analytics');
        }
        const data = await response.json();
        setAnalytics(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAnalytics();
  }, [timeRange]); // Re-fetch when timeRange changes

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="p-2 border rounded-md shadow-sm"
        >
          {TIME_RANGES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!loading && !error && analytics && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-inherit border border-zinc-200 p-4 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm">Unique Visitors</h3>
              <p className="text-2xl font-semibold">{analytics.uniqueVisitors}</p>
            </div>
            
            <div className="bg-inherit border border-zinc-200 p-4 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm">Total Sessions</h3>
              <p className="text-2xl font-semibold">{analytics.uniqueSessions}</p>
            </div>
            
            <div className="bg-inherit border border-zinc-200 p-4 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm">Total Pageviews</h3>
              <p className="text-2xl font-semibold">{analytics.totalPageviews}</p>
            </div>
          </div>

          <div className="bg-inherit border border-zinc-200 rounded-lg shadow">
            <div className="p-4">
              <h3 className="text-gray-500 text-sm mb-4">Pageviews by Page</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-zinc-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Page</th>
                      <th className="px-4 py-2 text-right text-sm font-medium text-gray-500">Views</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {Object.entries(analytics.pageviewsByPage)
                      .sort(([, a], [, b]) => b - a) // Sort by views in descending order
                      .map(([page, views]) => (
                        <tr key={page}>
                          <td className="px-4 py-2 text-sm whitespace-nowrap">{page}</td>
                          <td className="px-4 py-2 text-sm text-right">{views}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </>
      )}
    </div>
  );
}