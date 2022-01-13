import sa from 'sa-sdk-javascript';

import { isDev, sensorsUrl } from '@/constants/env';

export function setupSensors() {
  if (isDev) return;
  sa.init({
    server_url: sensorsUrl,
    is_track_single_page: true,
    use_client_time: true,
    show_log: isDev,
    heatmap: {
      clickmap: 'default',
      scroll_notice_map: 'default',
    },
  });
}

export function saTrack(trackName: string, trackData: { [key: string]: any }) {
  sa.track(trackName, trackData);
}
