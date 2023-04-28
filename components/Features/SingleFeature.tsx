'use client';
import { useState, useEffect } from 'react';
import { Feature } from '@/types/feature';
import { useTheme } from 'next-themes';

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { darkIcon, lightIcon, title, paragraph } = feature;
  const { theme } = useTheme();
  const [iconName, setIconName] = useState('');

  useEffect(() => {
    const nameAndExtension = theme === 'dark' ? darkIcon : lightIcon;
    const [name, extension] = nameAndExtension.split('.');
    setIconName(`${name}.${extension}`);
  }, [theme, darkIcon, lightIcon]);

  // Make sure iconName has at least one '.' separator
  const [name, extension] = iconName.split('.');
  if (!name || !extension) {
    return null;
  }
  
  return (
    <div className="flex flex-col items-center">
      <img src={`${name}.${extension}`} alt={name} />
      <h4 className="mt-6 mb-2 text-lg font-medium text-center">{title}</h4>
      <p className="text-sm text-center">{paragraph}</p>
    </div>
  );
};

export default SingleFeature;
