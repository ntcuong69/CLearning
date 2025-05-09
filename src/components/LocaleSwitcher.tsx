'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { Select, MenuItem, SelectChangeEvent  } from '@mui/material';

const locales = [
  { code: 'en', label: 'English' },
  { code: 'vi', label: 'Tiếng Việt' }
];

export default function LocaleSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newLocale = event.target.value as string;
    const segments = pathname.split('/');
    segments[1] = newLocale; // Replace current locale
    const newPath = segments.join('/');

    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <div className="w-32">
      <Select
        value={currentLocale}
        onChange={handleChange}
        fullWidth
        className="bg-white dark:bg-gray-800 text-sm"
        size="small"
        disabled={isPending}
      >
        {locales.map((locale) => (
          <MenuItem key={locale.code} value={locale.code}>
            {locale.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
