
import { useEffect, useState } from 'react';
import { Bell, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

type PermissionState = NotificationPermission | 'unsupported';

export const PushNotificationBanner = () => {
  // Notification.permission не существует в Node, поэтому читать его во время SSR нельзя
  // (падало с "Notification is not defined"). Стартовое значение всегда 'unsupported',
  // реальное состояние ставится в useEffect — заодно это снимает расхождение
  // между серверным null и баннером на клиенте.
  const [permission, setPermission] = useState<PermissionState>('unsupported');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined' || !('Notification' in window)) return;
    setPermission(window.Notification.permission);
  }, []);

  const requestPermission = async () => {
    const permissionResult = await window.Notification.requestPermission();
    setPermission(permissionResult);
    if (permissionResult === 'granted' || permissionResult === 'denied') {
      setIsVisible(false);
    }
  };

  if (!isVisible || permission !== 'default') {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 my-12 text-white shadow-xl"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-full">
            <Bell className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Будьте в курсе!</h3>
            <p className="opacity-90 max-w-lg">
              Подпишитесь на уведомления, чтобы первыми узнавать о скидках и специальных предложениях на печатные услуги.
            </p>
          </div>
        </div>
        <button
          onClick={requestPermission}
          className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-all flex-shrink-0 flex items-center gap-2 group"
        >
          Подписаться
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
