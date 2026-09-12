import { LatchshotScreenshotEntityBase } from '../LatchshotScreenshotEntityBase';
import type { LatchshotScreenshotSDK } from '../LatchshotScreenshotSDK';
import type { Control } from '../types';
import type { SafetyReviewRequest, SafetyReviewRequestCreateData } from '../LatchshotScreenshotTypes';
declare class SafetyReviewRequestEntity extends LatchshotScreenshotEntityBase<SafetyReviewRequest> {
    constructor(client: LatchshotScreenshotSDK, entopts: any);
    make(this: SafetyReviewRequestEntity): SafetyReviewRequestEntity;
    create(this: any, reqdata?: SafetyReviewRequestCreateData, ctrl?: Control): Promise<SafetyReviewRequestEntity>;
}
export { SafetyReviewRequestEntity };
