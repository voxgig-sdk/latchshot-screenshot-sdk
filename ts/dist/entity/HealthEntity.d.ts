import { LatchshotScreenshotEntityBase } from '../LatchshotScreenshotEntityBase';
import type { LatchshotScreenshotSDK } from '../LatchshotScreenshotSDK';
import type { Control } from '../types';
import type { Health, HealthLoadMatch } from '../LatchshotScreenshotTypes';
declare class HealthEntity extends LatchshotScreenshotEntityBase<Health> {
    constructor(client: LatchshotScreenshotSDK, entopts: any);
    make(this: HealthEntity): HealthEntity;
    load(this: any, reqmatch?: HealthLoadMatch, ctrl?: Control): Promise<HealthEntity>;
}
export { HealthEntity };
