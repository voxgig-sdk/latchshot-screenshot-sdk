import { LatchshotScreenshotEntityBase } from '../LatchshotScreenshotEntityBase';
import type { LatchshotScreenshotSDK } from '../LatchshotScreenshotSDK';
import type { Control } from '../types';
import type { Render, RenderCreateData } from '../LatchshotScreenshotTypes';
declare class RenderEntity extends LatchshotScreenshotEntityBase<Render> {
    constructor(client: LatchshotScreenshotSDK, entopts: any);
    make(this: RenderEntity): RenderEntity;
    create(this: any, reqdata?: RenderCreateData, ctrl?: Control): Promise<RenderEntity>;
}
export { RenderEntity };
