import React from 'react';
import { componentClassNames } from '../../shared/class-util';
import { IconCorrect, IconError } from '@pui/icons';
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
  /** 停止上传回调函数 */
  onStop?: () => void
}

const Info = ({
  status = 'normal',
  percent = 0,
}:ProgressProps) => {

  if (status === 'success') {
    return <IconCorrect />
  }

  if (status === 'error') {
    return <IconError />
  }

  return <span>{percent}%</span> 
}

const Progress = ({
  status = 'normal',
  percent = 0,
  showInfo = true,
  onStop
}:ProgressProps) => {
  const usePercent = validProgress(percent);
  const useStatus = percent >= 100 ? 'success' : status;

  return (
    <div className={componentClassNames('pui-progress', {
      status: useStatus
    })}
    >
      <div className="pui-progress-outer">
        <div 
          className="pui-progress-inner"
          style={{width: `${usePercent}%`}}
        />
      </div>
      <span className={componentClassNames('pui-progress-text', {status: useStatus})}>
        {showInfo ? <Info percent={usePercent} status={useStatus} /> : null}
      </span>
      {useStatus === 'normal' ? (
        <span onClick={onStop} className="pui-progress-close">
          <IconError />
        </span>
      ) : null }
    </div>
  )
}

export {Progress}