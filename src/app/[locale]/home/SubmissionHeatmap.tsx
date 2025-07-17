'use client';

import React, { useState, useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

type Submission = {
  date: string; // YYYY-MM-DD
  count: number;
};

type Props = {
  data: Submission[];
};

export default function SubmissionHeatmap({ data }: Props) {
  // Lấy danh sách các năm có trong data
  const years = useMemo(() => {
    const set = new Set<number>();
    data.forEach(d => {
      const y = new Date(d.date).getFullYear();
      set.add(y);
    });
    return Array.from(set).sort((a, b) => b - a); // Descending, newest first
  }, [data]);

  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(years.includes(currentYear) ? currentYear : (years[0] || currentYear));

  // Lọc data theo năm được chọn
  const filteredData = useMemo(() => {
    return data.filter(d => new Date(d.date).getFullYear() === selectedYear);
  }, [data, selectedYear]);

  const now = new Date(selectedYear, 11, 31); // End of selected year
  const startDate = new Date(selectedYear, 0, 1); // Jan 1st
  const endDate = new Date(selectedYear, 11, 31); // Dec 31st

  // Build weeks with a full gap week after the last day of each month (except December)
  const submissionMap = new Map(filteredData.map(d => [d.date, d.count]));
  const weeks: Array<Array<{ date: Date | null; count: number; isGap?: boolean }>> = [];
  let currentWeek: Array<{ date: Date | null; count: number; isGap?: boolean }> = [];
  const d = new Date(startDate);

  // Pad the first week if Jan 1 is not Sunday
  for (let i = 0; i < d.getDay(); i++) {
    currentWeek.push({ date: null, count: 0, isGap: true });
  }

  while (d <= endDate) {
    const dateStr = d.toISOString().split('T')[0];
    const count = submissionMap.get(dateStr) || 0;
    currentWeek.push({ date: new Date(d), count });

    const next = new Date(d);
    next.setDate(d.getDate() + 1);

    // Insert gap after each month (except December)
    if (d.getMonth() !== next.getMonth() && d.getMonth() !== 11) {
      let gapLeft = 7;
      let n = 7 - currentWeek.length;
      if (n > 0) {
        for (let i = 0; i < n; i++) {
          currentWeek.push({ date: null, count: 0, isGap: true });
        }
        gapLeft -= n;
        weeks.push([...currentWeek]);
        currentWeek = [];
      } else if (n === 0) {
        weeks.push([...currentWeek]);
        currentWeek = [];
      }
      while (gapLeft > 0) {
        currentWeek.push({ date: null, count: 0, isGap: true });
        if (currentWeek.length === 7) {
          weeks.push([...currentWeek]);
          currentWeek = [];
        }
        gapLeft--;
      }
    } else if (currentWeek.length === 7) {
      weeks.push([...currentWeek]);
      currentWeek = [];
    }

    d.setDate(d.getDate() + 1);
  }

  // Pad the last week if needed
  if (currentWeek.length > 0 && currentWeek.length < 7) {
    while (currentWeek.length < 7) {
      currentWeek.push({ date: null, count: 0, isGap: true });
    }
    weeks.push(currentWeek);
  }

  // Stats
  const totalSubmissions = filteredData.reduce((sum, d) => sum + d.count, 0);
  const activeDays = filteredData.filter(d => d.count > 0).length;

  // Max streak
  let maxStreak = 0, currStreak = 0;
  const dayMap = new Map(filteredData.map(d => [d.date, d.count]));
  let dateCursor = new Date(startDate);
  while (dateCursor <= endDate) {
    const key = dateCursor.toISOString().split('T')[0];
    if ((dayMap.get(key) ?? 0) > 0) {
      currStreak++;
      maxStreak = Math.max(maxStreak, currStreak);
    } else {
      currStreak = 0;
    }
    dateCursor.setDate(dateCursor.getDate() + 1);
  }

  const getIntensityLevel = (count: number): number => {
    if (count === 0) return 0;
    if (count <= 2) return 1;
    if (count <= 4) return 2;
    if (count <= 6) return 3;
    return 4;
  };

  const getIntensityColor = (level: number, isGap?: boolean) => {
    if (isGap) return '#fff';
    const colors = [
      '#e2e8f0', // No submissions
      '#c6f6d5',
      '#68d391',
      '#38a169',
      '#276749',
    ];
    return colors[level];
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('vi-VN', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    });
  };

  const monthLabels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];
  const dayLabels = ['', '2', '', '4', '', '6', ''];

  // Tính vị trí cột chứa ngày 15 mỗi tháng
  const monthStartCol: number[] = [];
  weeks.forEach((week, weekIdx) => {
    for (const day of week) {
      if (day.date && !day.isGap && day.date.getDate() === 1) {
        const month = day.date.getMonth();
        monthStartCol[month] = weekIdx;
      }
    }
  });

  return (
    <Box className="p-4 bg-white rounded-xl shadow" sx={{ mb: 6 }}>
      {/* Dropdown chọn năm */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="subtitle1" sx={{ mr: 2 }}>
          Năm:
        </Typography>
        <select
          value={selectedYear}
          onChange={e => setSelectedYear(Number(e.target.value))}
          style={{
            padding: '4px 8px',
            borderRadius: 4,
            border: '1px solid #e2e8f0',
            fontSize: 15,
            background: '#f8fafc',
            color: '#222',
            outline: 'none',
            cursor: 'pointer',
          }}
        >
          {years.map(y => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </Box>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Bạn có {totalSubmissions} lượt nộp bài trong năm {selectedYear}
      </Typography>
      <Box sx={{ position: 'relative', overflowX: 'auto', pb: 2 }}>
        {/* Month labels */}
        <Box sx={{ position: 'relative', height: 20, mb: 1, px: 4 }}>
          {monthLabels.map((month, idx) => {
            if (monthStartCol[idx] === undefined) return null;
            return (
              <span
                key={idx}
                style={{
                  position: 'absolute',
                  left: `calc(${monthStartCol[idx]} * 15px + 10px)`,
                  width: `60px`,
                  textAlign: 'center',
                  fontSize: 12,
                  color: '#64748b',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                }}
              >
                {month}
              </span>
            );
          })}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          {/* Heatmap grid */}
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '2px' }}>
            {weeks.map((week, weekIdx) => (
              <Box key={weekIdx} sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {week.map((day, dayIdx) => (
                  day.isGap || !day.date ? (
                    <span key={dayIdx} style={{ width: 13, height: 13, display: 'inline-block', background: '#fff' }} />
                  ) : (
                    <span
                      key={dayIdx}
                      data-tooltip-id="submissions-tooltip"
                      data-tooltip-content={`${day.count} lượt nộp vào ${formatDate(day.date)}`}
                      style={{
                        width: 13,
                        height: 13,
                        display: 'inline-block',
                        borderRadius: 3,
                        background: getIntensityColor(getIntensityLevel(day.count), false),
                        border: '1px solid #e2e8f0',
                        cursor: day.count > 0 ? 'pointer' : 'default',
                        transition: 'box-shadow 0.2s',
                      }}
                    />
                  )
                ))}
              </Box>
            ))}
          </Box>
          <ReactTooltip id="submissions-tooltip" place="top" />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', fontSize: 14, color: '#64748b', mt: 2 }}>
        <span style={{ marginRight: 16 }}>Tổng số ngày hoạt động: {activeDays}</span>
        <span>Tổng số ngày liên tục: {maxStreak}</span>
      </Box>
    </Box>
  );
}
