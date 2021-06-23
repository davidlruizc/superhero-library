import * as React from 'react';
import { Progress } from 'reactstrap';

interface ProgressBarProps {
  title: string;
  powerstats: string;
  color: string;
}

/**
 * ProgressBar muestra una gráfica por habilidad
 *
 * @param {string} title
 * @param {string} powerstats
 * @param {string} color
 * Uso:
 * ```js
 * <ProgressBar title="Durability" powerstats="50" color="indigo" />
 * ```
 */
const ProgressBar: React.FC<ProgressBarProps> = ({ title, powerstats, color }) => {
  return (
    <React.Fragment>
      {powerstats === 'null' ? (
        <div>{`${title} unknown`}</div>
      ) : (
        <React.Fragment>
          <div className="text-left">{title}</div>
          <Progress value={powerstats} color={color} animated={true} style={{ height: 20 }}>
            {powerstats}%
          </Progress>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ProgressBar;
