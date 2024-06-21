import type { EventProperties } from '@segment/analytics-next';

import { analytics } from './segment';

export let inspectorLoaded = false;

export const segmentDestination = {
  make: function () {
    inspectorLoaded = true;
    document.dispatchEvent(new Event('avo_inspector_initialized'));
  },
  logEvent: function (eventName: string, eventProperties: EventProperties) {
    analytics.track(eventName, eventProperties);
  },
  setUserProperties: function (userId: string, userProperties: object) {
    analytics.identify(userId, userProperties);
  },
  identify: function (userId: string) {
    analytics.identify(userId);
  },
  unidentify: function () {
    analytics.identify(null);
  },
  logPage: function (pageName: string, eventProperties: EventProperties) {
    const properties = Object.assign(eventProperties, { pageName: pageName });

    analytics.page(properties);
  },
  revenue: function (amount: number, eventProperties: EventProperties) {
    const name = 'Purchase Complete';
    const properties = Object.assign(eventProperties, { revenue: amount });

    analytics.track(name, properties);
  },
  // The following methods are used for group analytics and are not required. Learn more about group analytics [here](/data-design/groups)
  setGroupProperties(groupType: string, groupId: string, groupProperties: object) {
    analytics.group(groupId, groupProperties);
  },
  addCurrentUserToGroup: function (groupType: string, groupId: string) {
    analytics.group(groupId);
  },
  logEventWithGroups: function (eventName: string, eventProperties: EventProperties, groupTypesToGroupIds: object) {
    // Not supported by the Segment SDK
    {
      eventName;
      eventProperties;
      groupTypesToGroupIds;
    }
  },
};
