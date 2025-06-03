declare module "react-resizable" {
  import * as React from "react";

  export interface ResizableBoxProps {
    width?: number;
    height?: number;
    minConstraints?: [number, number];
    maxConstraints?: [number, number];
    resizeHandles?: Array<"s" | "w" | "e" | "n" | "sw" | "se" | "nw" | "ne">;
    axis?: "both" | "x" | "y" | "none";
    onResizeStop?: (
      e: React.SyntheticEvent,
      data: { size: { width: number; height: number } }
    ) => void;
    onResize?: (
      e: React.SyntheticEvent,
      data: { size: { width: number; height: number } }
    ) => void;
    onResizeStart?: (
      e: React.SyntheticEvent,
      data: { size: { width: number; height: number } }
    ) => void;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
  }

  export class ResizableBox extends React.Component<ResizableBoxProps, any> {}
}