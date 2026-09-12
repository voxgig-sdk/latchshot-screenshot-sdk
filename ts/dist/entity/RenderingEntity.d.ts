import { LatchshotScreenshotEntityBase } from '../LatchshotScreenshotEntityBase';
import type { LatchshotScreenshotSDK } from '../LatchshotScreenshotSDK';
import type { Control } from '../types';
import type { Rendering, RenderingLoadMatch } from '../LatchshotScreenshotTypes';
declare class RenderingEntity extends LatchshotScreenshotEntityBase<Rendering> {
    constructor(client: LatchshotScreenshotSDK, entopts: any);
    make(this: RenderingEntity): RenderingEntity;
    load(this: any, reqmatch?: RenderingLoadMatch, ctrl?: Control): Promise<RenderingEntity>;
}
export { RenderingEntity };
