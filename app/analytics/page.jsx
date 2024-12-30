import Analytics from '../components/Analytics';

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-6">Analytics</h1>
      <Analytics />
    </div>
  );
}

export const metadata = {
  title: 'Analytics Dashboard',
  description: 'View website analytics and statistics',
  robots: {
    index: false,
    follow: false,
  }
};
