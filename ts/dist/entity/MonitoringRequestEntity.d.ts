import { LatchshotScreenshotEntityBase } from '../LatchshotScreenshotEntityBase';
import type { LatchshotScreenshotSDK } from '../LatchshotScreenshotSDK';
import type { Control } from '../types';
import type { MonitoringRequest, MonitoringRequestCreateData } from '../LatchshotScreenshotTypes';
declare class MonitoringRequestEntity extends LatchshotScreenshotEntityBase<MonitoringRequest> {
    constructor(client: LatchshotScreenshotSDK, entopts: any);
    make(this: MonitoringRequestEntity): MonitoringRequestEntity;
    create(this: any, reqdata?: MonitoringRequestCreateData, ctrl?: Control): Promise<MonitoringRequestEntity>;
}
export { MonitoringRequestEntity };
