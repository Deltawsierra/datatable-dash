'use client';

import { useEffect, useState } from 'react';
import { Card, Typography, Skeleton } from 'antd';
import { Home as HomeIcon, Clock, Calendar, Database, Activity, User, Table2 } from 'lucide-react';
import { NumberTicker } from '../../components/magicui/NumberTicker';
import { BorderBeam } from '../../components/magicui/BorderBeam';
import { fetchUserInfo } from '../../lib/api';
import { useTheme } from '../../components/ThemeProvider';
import { useTables } from '../../components/TablesProvider';

const { Title, Text } = Typography;

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

export default function HomePage() {
  const [greeting, setGreeting] = useState('Welcome');
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [userName, setUserName] = useState<string | null>(null);
  const { currentScheme } = useTheme();
  const { tableCount, apiStatus } = useTables();
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
      .then((res) => setUserName(res.display_name || res.user_name || null))
      .catch(() => setUserName(null));
  }, []);

  const displayName = userName ?? 'there';

  const apiColor = apiStatus === 'connected' ? '#52c41a' : apiStatus === 'disconnected' ? '#ff4d4f' : '#faad14';

  const statCards = [
    {
      title: 'Tables Available',
      icon: Table2,
      description: 'Reference data tables in schema',
      colorFrom: '#1677ff',
      colorTo: '#36cfc9',
      content: tableCount !== null
        ? <NumberTicker value={tableCount} delay={0.2} className="text-4xl font-bold" />
        : <Skeleton.Input active size="large" style={{ width: 80 }} />,
    },
    {
      title: 'Backend Status',
      icon: Activity,
      description: apiStatus === 'checking'
        ? 'Checking connection...'
        : apiStatus === 'connected'
        ? 'Databricks connected'
        : 'Backend offline',
      colorFrom: apiColor,
      colorTo: apiColor,
      content: (
        <div className="flex items-center gap-2 mt-2">
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: apiColor, flexShrink: 0 }} />
          <Text style={{ fontSize: 15, fontWeight: 600, color: apiColor }}>
            {apiStatus === 'checking' ? 'Checking' : apiStatus === 'connected' ? 'Connected' : 'Offline'}
          </Text>
        </div>
      ),
    },
    {
      title: 'Signed In As',
      icon: User,
      description: 'Current Databricks user',
      colorFrom: '#722ed1',
      colorTo: '#eb2f96',
      content: userName !== null
        ? <Text style={{ fontSize: 15, fontWeight: 600, marginTop: 8, display: 'block' }}>{userName}</Text>
        : <Skeleton.Input active size="small" style={{ width: 120, marginTop: 8 }} />,
    },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <HomeIcon style={{ width: 28, height: 28, color: '#1677ff' }} />
          <Title level={2} style={{ margin: 0 }} data-testid="title-home">
            <span className="sparkle-text">
              {greeting}, {displayName}
            </span>
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

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {statCards.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.title}
              className="blur-fade-in"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <Card
                className="relative overflow-visible"
                styles={{ body: { padding: 24 } }}
                data-testid={`card-stat-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {showBeam && (
                  <BorderBeam
                    colorFrom={stat.colorFrom}
                    colorTo={stat.colorTo}
                    duration={4 + index}
                    delay={index * 0.5}
                  />
                )}
                <div className="flex items-start justify-between gap-4">
                  <div style={{ flex: 1 }}>
                    <Text type="secondary" className="text-sm font-medium uppercase tracking-wide">
                      {stat.title}
                    </Text>
                    {stat.content}
                    <Text type="secondary" className="text-sm mt-2 block">
                      {stat.description}
                    </Text>
                  </div>
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${stat.colorFrom}20, ${stat.colorTo}20)`,
                      flexShrink: 0,
                    }}
                  >
                    <IconComponent style={{ width: 24, height: 24, color: stat.colorFrom }} />
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Info cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card styles={{ body: { padding: 24 } }} data-testid="card-api-status">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-lg"
              style={{ background: 'linear-gradient(135deg, #52c41a20, #73d13d20)' }}
            >
              <Activity style={{ width: 20, height: 20, color: '#52c41a' }} />
            </div>
            <div>
              <Text strong style={{ fontSize: 16 }}>API Status</Text>
              <div className="flex items-center gap-2 mt-0.5">
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: apiColor,
                  }}
                  data-testid="indicator-api-status"
                />
                <Text type="secondary" style={{ fontSize: 13 }} data-testid="text-api-status">
                  {apiStatus === 'checking'
                    ? 'Checking connection...'
                    : apiStatus === 'connected'
                    ? 'Backend connected'
                    : 'Backend offline'}
                </Text>
              </div>
            </div>
          </div>
          <Text type="secondary" style={{ fontSize: 13 }}>
            The Python FastAPI backend queries Databricks for live reference data. All table data is fetched in real time.
          </Text>
        </Card>

        <Card styles={{ body: { padding: 24 } }} data-testid="card-quick-info">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-lg"
              style={{ background: 'linear-gradient(135deg, #1677ff20, #4096ff20)' }}
            >
              <Database style={{ width: 20, height: 20, color: '#1677ff' }} />
            </div>
            <div>
              <Text strong style={{ fontSize: 16 }}>Reference Data</Text>
              <Text type="secondary" style={{ fontSize: 13, display: 'block' }}>Quick overview</Text>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Text type="secondary" style={{ fontSize: 13 }}>Total tables</Text>
              <Text strong style={{ fontSize: 13 }} data-testid="text-total-tables">
                {tableCount !== null ? tableCount : '—'}
              </Text>
            </div>
            <div className="flex justify-between">
              <Text type="secondary" style={{ fontSize: 13 }}>Data source</Text>
              <Text strong style={{ fontSize: 13 }}>Databricks</Text>
            </div>
            <div className="flex justify-between">
              <Text type="secondary" style={{ fontSize: 13 }}>Connection</Text>
              <Text
                strong
                style={{ fontSize: 13, color: apiColor }}
                data-testid="text-connection-status"
              >
                {apiStatus === 'checking' ? 'Checking...' : apiStatus === 'connected' ? 'Live' : 'Offline'}
              </Text>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
