import { LatchshotScreenshotEntityBase } from '../LatchshotScreenshotEntityBase';
import type { LatchshotScreenshotSDK } from '../LatchshotScreenshotSDK';
import type { Control } from '../types';
import type { Upgrade, UpgradeCreateData } from '../LatchshotScreenshotTypes';
declare class UpgradeEntity extends LatchshotScreenshotEntityBase<Upgrade> {
    constructor(client: LatchshotScreenshotSDK, entopts: any);
    make(this: UpgradeEntity): UpgradeEntity;
    create(this: any, reqdata?: UpgradeCreateData, ctrl?: Control): Promise<UpgradeEntity>;
}
export { UpgradeEntity };
