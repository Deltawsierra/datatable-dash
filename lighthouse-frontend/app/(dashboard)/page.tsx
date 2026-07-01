'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Card, Typography, Skeleton, Empty } from 'antd';
import {
  Home as HomeIcon,
  Clock,
  Calendar,
  Database,
  Star,
  History,
  Megaphone,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';
import { NumberTicker } from '~/components/magicui/NumberTicker';
import { BorderBeam } from '~/components/magicui/BorderBeam';
import { fetchUserInfo } from '~/lib/api';
import { useTheme } from '~/components/ThemeProvider';
import { useTables } from '~/components/TablesProvider';
import { useUserTables } from '~/lib/userTables';

const { Title, Text } = Typography;

// Curated "what's new" notes for the live launch. Edit this list to update the
// announcements card — newest first.
const ANNOUNCEMENTS: { date: string; text: string }[] = [
  { date: 'Jul 2026', text: 'Streamlined the theme picker — fewer, cleaner themes to choose from.' },
  { date: 'Jul 2026', text: 'New view controls on every dataset: toggle columns and show live vs. archived rows.' },
  { date: 'Jul 2026', text: 'Pin your favorite tables and jump back to recently viewed ones from here.' },
];

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

function formatDate(): string {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function toLabel(name: string): string {
  return name
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function HomePage() {
  const [greeting, setGreeting] = useState('Welcome');
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [userName, setUserName] = useState<string | null>(null);
  const [lastRefresh, setLastRefresh] = useState<string | null>(null);
  const { currentScheme } = useTheme();
  const { tableCount, tablesLoading, apiStatus } = useTables();
  const { favorites, recent, isFavorite, toggleFavorite } = useUserTables();
  const showBeam = !currentScheme.glowColor;

  useEffect(() => {
    const updateTime = () => {
      setGreeting(getGreeting());
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
      setCurrentDate(formatDate());
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchUserInfo()
      .then((res) => setUserName(res.display_name || res.username || null))
      .catch(() => setUserName(null));
  }, []);

  // Stamp the "last refreshed" time once the dataset list has loaded.
  useEffect(() => {
    if (!tablesLoading) {
      setLastRefresh(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    }
  }, [tablesLoading]);

  const displayName = userName ?? 'there';

  const favoriteItems = useMemo(() => favorites.slice(0, 8), [favorites]);
  const recentItems = useMemo(() => recent.slice(0, 8), [recent]);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <HomeIcon style={{ width: 28, height: 28, color: '#1677ff' }} />
          <Title level={2} style={{ margin: 0 }} data-testid="title-home">
            {greeting}, {displayName}
          </Title>
        </div>
        <div className="flex items-center gap-4 mt-1">
          <div className="flex items-center gap-1.5">
            <Calendar style={{ width: 14, height: 14, color: 'var(--text-muted, #8c8c8c)' }} />
            <Text type="secondary" data-testid="text-date" style={{ fontSize: 13 }}>{currentDate}</Text>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock style={{ width: 14, height: 14, color: 'var(--text-muted, #8c8c8c)' }} />
            <Text type="secondary" data-testid="text-time" style={{ fontSize: 13 }}>{currentTime}</Text>
          </div>
        </div>
      </div>

      {/* Top row: datasets summary + what's new */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Total datasets + last refresh */}
        <div className="blur-fade-in">
          <Card
            className="relative overflow-visible"
            styles={{ body: { padding: 24 } }}
            data-testid="card-datasets"
          >
            {showBeam && <BorderBeam colorFrom="#1677ff" colorTo="#36cfc9" duration={5} />}
            <div className="flex items-start justify-between gap-4">
              <div style={{ flex: 1 }}>
                <Text type="secondary" className="text-sm font-medium uppercase tracking-wide">
                  Total Datasets
                </Text>
                <div style={{ marginTop: 4 }}>
                  {tableCount !== null ? (
                    <NumberTicker value={tableCount} delay={0.2} className="text-4xl font-bold" />
                  ) : (
                    <Skeleton.Input active size="large" style={{ width: 80 }} />
                  )}
                </div>
                <div className="flex items-center gap-1.5 mt-3">
                  <RefreshCw style={{ width: 13, height: 13, color: 'var(--text-muted, #8c8c8c)' }} />
                  <Text type="secondary" style={{ fontSize: 13 }} data-testid="text-last-refresh">
                    {!lastRefresh
                      ? 'Loading reference data…'
                      : apiStatus === 'connected'
                        ? `Live from Databricks · as of ${lastRefresh}`
                        : `Sample data · as of ${lastRefresh}`}
                  </Text>
                </div>
              </div>
              <div
                className="flex items-center justify-center w-12 h-12 rounded-lg"
                style={{ background: 'linear-gradient(135deg, #1677ff20, #36cfc920)', flexShrink: 0 }}
              >
                <Database style={{ width: 24, height: 24, color: '#1677ff' }} />
              </div>
            </div>
          </Card>
        </div>

        {/* What's new / announcements */}
        <div className="blur-fade-in" style={{ animationDelay: '0.1s' }}>
          <Card styles={{ body: { padding: 24 } }} data-testid="card-announcements" style={{ height: '100%' }}>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg"
                style={{ background: 'linear-gradient(135deg, #722ed120, #eb2f9620)' }}
              >
                <Megaphone style={{ width: 20, height: 20, color: '#722ed1' }} />
              </div>
              <div>
                <Text strong style={{ fontSize: 16 }}>What&apos;s New</Text>
                <Text type="secondary" style={{ fontSize: 13, display: 'block' }}>Latest updates</Text>
              </div>
            </div>
            <div className="space-y-3">
              {ANNOUNCEMENTS.map((item, i) => (
                <div key={i} className="flex gap-3" data-testid={`announcement-${i}`}>
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#722ed1',
                      marginTop: 7,
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <Text style={{ fontSize: 13, display: 'block' }}>{item.text}</Text>
                    <Text type="secondary" style={{ fontSize: 11 }}>{item.date}</Text>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom row: favorites + recently viewed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Favorites / pinned tables */}
        <div className="blur-fade-in" style={{ animationDelay: '0.2s' }}>
          <Card styles={{ body: { padding: 24 } }} data-testid="card-favorites" style={{ height: '100%' }}>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg"
                style={{ background: 'linear-gradient(135deg, #faad1420, #ffc53d20)' }}
              >
                <Star style={{ width: 20, height: 20, color: '#faad14' }} />
              </div>
              <div>
                <Text strong style={{ fontSize: 16 }}>Favorites</Text>
                <Text type="secondary" style={{ fontSize: 13, display: 'block' }}>Your pinned tables</Text>
              </div>
            </div>
            {favoriteItems.length === 0 ? (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="No favorites yet — pin a table to see it here"
                data-testid="empty-favorites"
                style={{ margin: '16px 0' }}
              />
            ) : (
              <div className="space-y-1">
                {favoriteItems.map((name) => (
                  <div
                    key={name}
                    className="flex items-center justify-between rounded-md hover-elevate"
                    style={{ padding: '6px 8px' }}
                    data-testid={`favorite-item-${name}`}
                  >
                    <Link
                      href={`/tables/${name}`}
                      className="flex items-center gap-2"
                      style={{ flex: 1, minWidth: 0, color: 'inherit' }}
                      data-testid={`link-favorite-${name}`}
                    >
                      <Database style={{ width: 14, height: 14, color: '#1677ff', flexShrink: 0 }} />
                      <Text ellipsis style={{ fontSize: 14 }}>{toLabel(name)}</Text>
                    </Link>
                    <button
                      onClick={() => toggleFavorite(name)}
                      title="Unpin"
                      aria-label={`Unpin ${toLabel(name)}`}
                      data-testid={`button-unpin-${name}`}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, lineHeight: 0 }}
                    >
                      <Star style={{ width: 15, height: 15, color: '#faad14', fill: '#faad14' }} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>

        {/* Recently viewed */}
        <div className="blur-fade-in" style={{ animationDelay: '0.3s' }}>
          <Card styles={{ body: { padding: 24 } }} data-testid="card-recent" style={{ height: '100%' }}>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg"
                style={{ background: 'linear-gradient(135deg, #13c2c220, #36cfc920)' }}
              >
                <History style={{ width: 20, height: 20, color: '#13c2c2' }} />
              </div>
              <div>
                <Text strong style={{ fontSize: 16 }}>Recently Viewed</Text>
                <Text type="secondary" style={{ fontSize: 13, display: 'block' }}>Jump back in</Text>
              </div>
            </div>
            {recentItems.length === 0 ? (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="Tables you open will show up here"
                data-testid="empty-recent"
                style={{ margin: '16px 0' }}
              />
            ) : (
              <div className="space-y-1">
                {recentItems.map((name) => (
                  <div
                    key={name}
                    className="flex items-center justify-between rounded-md hover-elevate"
                    style={{ padding: '6px 8px' }}
                    data-testid={`recent-item-${name}`}
                  >
                    <Link
                      href={`/tables/${name}`}
                      className="flex items-center gap-2"
                      style={{ flex: 1, minWidth: 0, color: 'inherit' }}
                      data-testid={`link-recent-${name}`}
                    >
                      <ArrowRight style={{ width: 14, height: 14, color: '#13c2c2', flexShrink: 0 }} />
                      <Text ellipsis style={{ fontSize: 14 }}>{toLabel(name)}</Text>
                    </Link>
                    <button
                      onClick={() => toggleFavorite(name)}
                      title={isFavorite(name) ? 'Unpin' : 'Pin to favorites'}
                      aria-label={isFavorite(name) ? `Unpin ${toLabel(name)}` : `Pin ${toLabel(name)}`}
                      data-testid={`button-pin-${name}`}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, lineHeight: 0 }}
                    >
                      <Star
                        style={{
                          width: 15,
                          height: 15,
                          color: isFavorite(name) ? '#faad14' : 'var(--text-muted, #bbb)',
                          fill: isFavorite(name) ? '#faad14' : 'none',
                        }}
                      />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
