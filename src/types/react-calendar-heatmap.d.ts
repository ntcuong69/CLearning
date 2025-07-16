declare module 'react-calendar-heatmap' {
    import * as React from 'react';
  
    export interface HeatmapValue {
      date: string;
      count?: number;
      [key: string]: any;
    }
  
    export interface CalendarHeatmapProps {
      startDate: Date | string;
      endDate: Date | string;
      values: HeatmapValue[];
      classForValue?: (value: HeatmapValue) => string;
      tooltipDataAttrs?: ((value: HeatmapValue) => { [key: string]: string }) | { [key: string]: string };
      showWeekdayLabels?: boolean;
      transformDayElement?: (element: React.ReactElement, value: HeatmapValue, index: number) => React.ReactElement;
      horizontal?: boolean;
      gutterSize?: number;
    }
  
    const CalendarHeatmap: React.FC<CalendarHeatmapProps>;
  
    export default CalendarHeatmap;
  }
  