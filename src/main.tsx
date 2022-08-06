import { Root, createRoot } from 'react-dom/client';

import { App } from '@/app';

// What a good day! My top secret parameters for VKMA are: /?vk_access_token_settings=&vk_app_id=1&vk_are_notifications_enabled=0&vk_is_app_user=0&vk_is_favorite=0&vk_language=ru&vk_platform=desktop_web&vk_ref=other&vk_ts=1659776308&vk_user_id=86404556&sign=XDDDDDDDDD
// And token: vk1.a.XXXXXXXXXXDDDDDDDDDDDDDDDDDDDDDDDD
const root: Root = createRoot(document.getElementById('root')!);
root.render(<App />);
