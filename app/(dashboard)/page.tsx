'use client';

import { Card, Typography } from 'antd';
import { Map, Globe, Building2, LayoutDashboard } from 'lucide-react';
import { NumberTicker } from '../../components/magicui/NumberTicker';
import { BorderBeam } from '../../components/magicui/BorderBeam';
import { statesData, countriesData, departmentsData } from '../../lib/mockData';

const { Title, Text } = Typography;

const stats = [
  {
    title: 'States',
    value: statesData.length,
    icon: Map,
    description: 'US state records',
    colorFrom: '#1677ff',
    colorTo: '#36cfc9',
  },
  {
    title: 'Countries',
    value: countriesData.length,
    icon: Globe,
    description: 'Country records',
    colorFrom: '#722ed1',
    colorTo: '#eb2f96',
  },
  {
    title: 'Departments',
    value: departmentsData.length,
    icon: Building2,
    description: 'Department records',
    colorFrom: '#fa8c16',
    colorTo: '#fadb14',
  },
];

export default function DashboardOverview() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <LayoutDashboard style={{ width: 28, height: 28, color: '#1677ff' }} />
          <Title 
            level={2} 
            style={{ margin: 0 }}
            data-testid="title-overview"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Dashboard Overview
            </span>
          </Title>
        </div>
        <Text type="secondary" data-testid="text-welcome">
          Welcome to the Reference Data Management Dashboard
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card
              key={stat.title}
              className="relative overflow-visible"
              styles={{ body: { padding: 24 } }}
              data-testid={`card-stat-${stat.title.toLowerCase()}`}
            >
              <BorderBeam
                colorFrom={stat.colorFrom}
                colorTo={stat.colorTo}
                duration={4 + index}
                delay={index * 0.5}
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Text 
                    type="secondary" 
                    className="text-sm font-medium uppercase tracking-wide"
                  >
                    {stat.title}
                  </Text>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">
                      <NumberTicker 
                        value={stat.value} 
                        delay={0.2 + index * 0.1}
                        className="text-4xl font-bold"
                      />
                    </span>
                  </div>
                  <Text type="secondary" className="text-sm mt-2 block">
                    {stat.description}
                  </Text>
                </div>
                <div 
                  className="flex items-center justify-center w-12 h-12 rounded-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${stat.colorFrom}20, ${stat.colorTo}20)`,
                  }}
                >
                  <IconComponent 
                    style={{ 
                      width: 24, 
                      height: 24, 
                      color: stat.colorFrom,
                    }} 
                  />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
