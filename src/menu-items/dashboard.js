// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons-react';

const icons = {
    IconDashboard,
    IconDeviceAnalytics
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'dashboard',
    title: <FormattedMessage id="dashboard" />,
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'default',
            title: <FormattedMessage id="default" />,
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'analytics',
            title: <FormattedMessage id="analytics" />,
            type: 'item',
            url: '/dashboard/analytics',
            icon: icons.IconDeviceAnalytics,
            breadcrumbs: false
        },
        {
            id: 'map',
            title: <FormattedMessage id="map" />,
            type: 'item',
            url: '/dashboard/map',
            icon: icons.IconMapPin,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
