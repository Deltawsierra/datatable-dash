'use client';

import { Result, Button } from 'antd';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
      <Result
        status="404"
        title="Table Not Found"
        subTitle="The table you're looking for doesn't exist."
        extra={
          <Button 
            type="primary" 
            onClick={() => router.push('/tables/states')}
            data-testid="button-go-home"
          >
            Go to States
          </Button>
        }
        data-testid="not-found-result"
      />
    </div>
  );
}
