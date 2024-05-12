import React from "react";
import { Oval } from "react-loader-spinner";

interface LoaderProps {
  visible?: boolean;
  height?: number | string;
  width?: number | string;
  ariaLabel?: string;
  wrapperStyle?: React.CSSProperties;
  wrapperClass?: string;
}

const Loader: React.FC<LoaderProps> = ({
  visible,
  height = 80,
  width = 80,
  ariaLabel = "progress-bar-loading",
  wrapperStyle = {},
  wrapperClass = "",
}) => {
  return (
    <div>
      {visible && (
        <div style={wrapperStyle} className={wrapperClass}>
          <Oval
            visible={true}
            height={height}
            width={width}
            ariaLabel={ariaLabel}
          />
        </div>
      )}
    </div>
  );
};

export default Loader;