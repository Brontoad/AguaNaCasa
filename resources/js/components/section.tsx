import { IconName  } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Section({icon, title}: {icon: string, title: string}) {
    return (<div className="section-title"><FontAwesomeIcon icon={['fas', icon as IconName || 'question']}/> {title}</div>);
}