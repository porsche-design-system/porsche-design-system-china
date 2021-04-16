import React, { CSSProperties, useState, useEffect } from 'react';
import { componentClassNames } from '../../shared/class-util';
import './progress.scss';

function validProgress(progress: number | undefined) {
  if (!progress || progress < 0) {
    return 0;
  }
  if (progress > 100) {
    return 100;
  }
  return progress;
}

export interface ProgressProps {
  // 组件属性 //

  /** 百分比 */
  percent: number;
  /** 是否显示 信息 */
  showInfo?: boolean
  /** 状态 */
  status?: 'success' | 'error' | 'normal';

}

const Info = ({
  status = 'normal',
  percent = 0,
}:ProgressProps) => {



}

const Progress = ({
  status = 'normal',
  percent = 0,
  showInfo = true
}:ProgressProps) => {
  const prPercent = validProgress(percent);
  const [useStatus, setUseProgress] = useState(status)
  useEffect(() => {
    setUseProgress(() => {
      if (percent >= 100) {
        return 'success'
      }
      return status
    })
  }, [percent])

  return (
    <div className={componentClassNames('pui-progress', {
      status: useStatus
    })}
    >
      <div className="pui-progress-outer">
        <div 
          className="pui-progress-inner"
          style={{width: `${prPercent}%`}}
        />
      </div>
      <span className="pui-progress-text">
        {showInfo ? <span>{prPercent}%</span> : null}
      </span>
    </div>
  )
}

export {Progress}