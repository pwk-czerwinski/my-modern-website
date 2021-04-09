import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Animate from '../enums/Animate';

/**
 * Service data.
 */
interface IService {
    animate: Animate;
    icon: IconProp;
    headerText: string;
    paragraphText: string;
}

export default IService;
