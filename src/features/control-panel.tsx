import { PropsWithChildren } from 'react';
import './control-panel.css';

interface Props {
}

export default function ControlPanel({children}: Props & PropsWithChildren<{}>) {
  return (
    <div className="ControlPanel"></div>
  )
}