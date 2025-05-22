'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { Select, MenuItem, SelectChangeEvent, Box } from '@mui/material';

const locales = [
  { code: 'en', label: 'EN', flag: '/EN.png'},
  { code: 'vi', label: 'VN', flag: '/VN.png'},
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
    <Box>
      <Select
        value={currentLocale}
        onChange={handleChange}
        className="bg-white text-sm"
        size="small"
        disabled={isPending}
        sx={{
          ".dark &": { backgroundColor: "rgba(255,255,255,0.08)", color: "white" },
        }}
      >
        {locales.map((locale) => (
          <MenuItem key={locale.code} value={locale.code} className="flex items-center gap-2">
            <img src={locale.flag} width={20} height={14} className='inline-block'/> {locale.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
