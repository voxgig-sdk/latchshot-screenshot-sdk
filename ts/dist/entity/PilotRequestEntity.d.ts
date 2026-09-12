import { LatchshotScreenshotEntityBase } from '../LatchshotScreenshotEntityBase';
import type { LatchshotScreenshotSDK } from '../LatchshotScreenshotSDK';
import type { Control } from '../types';
import type { PilotRequest, PilotRequestCreateData } from '../LatchshotScreenshotTypes';
declare class PilotRequestEntity extends LatchshotScreenshotEntityBase<PilotRequest> {
    constructor(client: LatchshotScreenshotSDK, entopts: any);
    make(this: PilotRequestEntity): PilotRequestEntity;
    create(this: any, reqdata?: PilotRequestCreateData, ctrl?: Control): Promise<PilotRequestEntity>;
}
export { PilotRequestEntity };
