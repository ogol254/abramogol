'use client';
import dynamic from 'next/dynamic';

const SystemScene = dynamic(
  () => import('./system-scene').then((module) => module.SystemScene),
  { ssr: false, loading: () => <div className="scene scene-loading" aria-hidden="true"><span className="scene-label">Assembling live system</span></div> },
);

export function SceneLoader(){return <SystemScene/>}
