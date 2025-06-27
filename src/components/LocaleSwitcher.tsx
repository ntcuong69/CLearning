'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { Select, MenuItem, SelectChangeEvent, Box, Typography } from '@mui/material';

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
        size="small"
        disabled={isPending}
        sx={{
          minWidth: 54,
          borderRadius: 2,
          background: '#fff',
          fontSize: '1rem',
          px: 1.5,
          py: 0.5,
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
          '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            py: 0.5,
            px: 0.5,
          },
          '&:hover, &:focus': {
            borderColor: '#232b38',
            background: '#f5f6fa',
          },
        }}
        MenuProps={{
          disableScrollLock: true,
          PaperProps: {
            sx: {
              borderRadius: 2,
              boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
              mt: 1,
            }
          }
        }}
      >
        {locales.map((locale) => (
          <MenuItem 
            key={locale.code} 
            value={locale.code} 
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.2,
              py: 1,
              px: 1.5,
              borderRadius: 1.5,
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'background 0.2s',
              '&:hover': {
                background: '#f5f6fa',
              }
            }}
          >
            <img src={locale.flag} width={22} height={16} style={{ borderRadius: 3, marginRight: 8 }} alt={locale.label} />
            <Typography component='span' sx={{ fontWeight: 700, color: '#232b38' }}>{locale.label}</Typography>
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
