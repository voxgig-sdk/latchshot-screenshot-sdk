import { HealthEntity } from './entity/HealthEntity';
import { MonitoringRequestEntity } from './entity/MonitoringRequestEntity';
import { PilotRequestEntity } from './entity/PilotRequestEntity';
import { RenderEntity } from './entity/RenderEntity';
import { RenderingEntity } from './entity/RenderingEntity';
import { SafetyReviewRequestEntity } from './entity/SafetyReviewRequestEntity';
import { TrialEntity } from './entity/TrialEntity';
import { UpgradeEntity } from './entity/UpgradeEntity';
import { UsageEntity } from './entity/UsageEntity';
export type * from './LatchshotScreenshotTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { LatchshotScreenshotEntityBase } from './LatchshotScreenshotEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class LatchshotScreenshotSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Health(entopts?: Record<string, any>): HealthEntity;
    MonitoringRequest(entopts?: Record<string, any>): MonitoringRequestEntity;
    PilotRequest(entopts?: Record<string, any>): PilotRequestEntity;
    Render(entopts?: Record<string, any>): RenderEntity;
    Rendering(entopts?: Record<string, any>): RenderingEntity;
    SafetyReviewRequest(entopts?: Record<string, any>): SafetyReviewRequestEntity;
    Trial(entopts?: Record<string, any>): TrialEntity;
    Upgrade(entopts?: Record<string, any>): UpgradeEntity;
    Usage(entopts?: Record<string, any>): UsageEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): LatchshotScreenshotSDK;
    tester(testopts?: any, sdkopts?: any): LatchshotScreenshotSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof LatchshotScreenshotSDK;
export { stdutil, config, BaseFeature, LatchshotScreenshotEntityBase, LatchshotScreenshotSDK, SDK, };
