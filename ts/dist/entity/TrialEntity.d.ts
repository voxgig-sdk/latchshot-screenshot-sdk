import { LatchshotScreenshotEntityBase } from '../LatchshotScreenshotEntityBase';
import type { LatchshotScreenshotSDK } from '../LatchshotScreenshotSDK';
import type { Control } from '../types';
import type { Trial, TrialCreateData } from '../LatchshotScreenshotTypes';
declare class TrialEntity extends LatchshotScreenshotEntityBase<Trial> {
    constructor(client: LatchshotScreenshotSDK, entopts: any);
    make(this: TrialEntity): TrialEntity;
    create(this: any, reqdata?: TrialCreateData, ctrl?: Control): Promise<TrialEntity>;
}
export { TrialEntity };
