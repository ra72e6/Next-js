import { useRouter } from 'next/router';
import React from 'react';

export default function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  return <div>[[...params]]</div>;
}
