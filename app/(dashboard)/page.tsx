'use client';

import { useEffect, useState } from 'react';
import { Card, Typography } from 'antd';
import { Map, Globe, Building2, Home as HomeIcon, Clock, Calendar, Database, Activity } from 'lucide-react';
import { NumberTicker } from '../../components/magicui/NumberTicker';
import { BorderBeam } from '../../components/magicui/BorderBeam';
import { tableStats } from '../../lib/tableRegistry';
import { isApiAvailable } from '../../lib/api';

const { Title, Text } = Typography;

const stats = [
  { title: 'States', value: tableStats.states, icon: Map, description: 'US state records', colorFrom: '#1677ff', colorTo: '#36cfc9' },
  { title: 'Countries', value: tableStats.countries, icon: Globe, description: 'Country records', colorFrom: '#722ed1', colorTo: '#eb2f96' },
  { title: 'Departments', value: tableStats.departments, icon: Building2, description: 'Department records', colorFrom: '#fa8c16', colorTo: '#fadb14' },
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

export default function HomePage() {
  const [greeting, setGreeting] = useState('Welcome');
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [apiStatus, setApiStatus] = useState<'checking' | 'connected' | 'disconnected'>('checking');
  const userName = 'User';

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
    isApiAvailable().then((available) => {
      setApiStatus(available ? 'connected' : 'disconnected');
    });
  }, []);

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <HomeIcon style={{ width: 28, height: 28, color: '#1677ff' }} />
          <Title level={2} style={{ margin: 0 }} data-testid="title-home">
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {greeting}, {userName}
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card
              key={stat.title}
              className="relative overflow-visible"
              styles={{ body: { padding: 24 } }}
              data-testid={`card-stat-${stat.title.toLowerCase()}`}
            >
              <BorderBeam colorFrom={stat.colorFrom} colorTo={stat.colorTo} duration={4 + index} delay={index * 0.5} />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Text type="secondary" className="text-sm font-medium uppercase tracking-wide">{stat.title}</Text>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">
                      <NumberTicker value={stat.value} delay={0.2 + index * 0.1} className="text-4xl font-bold" />
                    </span>
                  </div>
                  <Text type="secondary" className="text-sm mt-2 block">{stat.description}</Text>
                </div>
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-lg"
                  style={{ background: `linear-gradient(135deg, ${stat.colorFrom}20, ${stat.colorTo}20)` }}
                >
                  <IconComponent style={{ width: 24, height: 24, color: stat.colorFrom }} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          styles={{ body: { padding: 24 } }}
          data-testid="card-api-status"
        >
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
                    background: apiStatus === 'connected' ? '#52c41a' : apiStatus === 'disconnected' ? '#ff4d4f' : '#faad14',
                  }}
                  data-testid="indicator-api-status"
                />
                <Text type="secondary" style={{ fontSize: 13 }} data-testid="text-api-status">
                  {apiStatus === 'checking' ? 'Checking connection...' : apiStatus === 'connected' ? 'Backend connected' : 'Backend offline — using mock data'}
                </Text>
              </div>
            </div>
          </div>
          <Text type="secondary" style={{ fontSize: 13 }}>
            The Python FastAPI backend provides live data from Databricks. When disconnected, the app falls back to local sample data.
          </Text>
        </Card>

        <Card
          styles={{ body: { padding: 24 } }}
          data-testid="card-quick-info"
        >
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
              <Text strong style={{ fontSize: 13 }} data-testid="text-total-tables">{stats.length}</Text>
            </div>
            <div className="flex justify-between">
              <Text type="secondary" style={{ fontSize: 13 }}>Total records</Text>
              <Text strong style={{ fontSize: 13 }} data-testid="text-total-records">{stats.reduce((sum, s) => sum + s.value, 0)}</Text>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
